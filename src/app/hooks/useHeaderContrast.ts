import { useEffect, useRef, useState } from 'react';

const LIGHT_THRESHOLD = 0.6;
const HYSTERESIS_MARGIN = 0.08;
const X_SAMPLE_SPREAD = 40;
const Y_SAMPLE_SPREAD = 12;
const LEFT_ANCHOR_WEIGHT = 0.65;
const FALLBACK_LEFT_X = 50;
const FALLBACK_RIGHT_INSET = 75;

function parseRgba(color: string): { r: number; g: number; b: number; a: number } | null {
  const match = /rgba?\(([^)]+)\)/.exec(color);
  if (!match) return null;
  const parts = match[1].split(',').map((part) => parseFloat(part.trim()));
  const [r, g, b, a = 1] = parts;
  if ([r, g, b].some((n) => Number.isNaN(n))) return null;
  return { r, g, b, a };
}

function parseHex(color: string): { r: number; g: number; b: number } | null {
  const match = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i.exec(color.trim());
  if (!match) return null;
  const hex = match[1];
  const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16)
  };
}

function luminanceOf(r: number, g: number, b: number): number {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function backgroundBrightness(color: string): number | null {
  const rgba = parseRgba(color);
  if (!rgba || rgba.a < 0.5) return null;
  return luminanceOf(rgba.r, rgba.g, rgba.b);
}

function rootBackgroundBrightness(): number | null {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--app-background').trim();
  if (raw === 'black') return 0;
  if (raw === 'white') return 1;
  const rgb = parseHex(raw);
  return rgb ? luminanceOf(rgb.r, rgb.g, rgb.b) : null;
}

function pointBrightness(x: number, y: number): number | null {
  const stack = document.elementsFromPoint(x, y);
  for (const el of stack) {
    if (el.closest('header')) continue;

    if (el === document.documentElement || el === document.body) {
      const rootValue = rootBackgroundBrightness();
      if (rootValue !== null) return rootValue;
    }

    const brightness = backgroundBrightness(getComputedStyle(el).backgroundColor);
    if (brightness !== null) return brightness;
  }
  return null;
}

function sampleBrightnessAt(centerX: number, centerY: number): number | null {
  const xs = [centerX - X_SAMPLE_SPREAD, centerX, centerX + X_SAMPLE_SPREAD].filter(
    (x) => x >= 0 && x <= window.innerWidth
  );
  const ys = [centerY - Y_SAMPLE_SPREAD, centerY, centerY + Y_SAMPLE_SPREAD].filter((y) => y >= 0);

  const values: number[] = [];
  for (const x of xs) {
    for (const y of ys) {
      const value = pointBrightness(x, y);
      if (value !== null) values.push(value);
    }
  }
  if (values.length === 0) return null;
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}

function headerAnchors(): { left: number; right: number } {
  const logoRect = document.querySelector('header .logo')?.getBoundingClientRect();
  const actionsRect = document.querySelector('header .actions')?.getBoundingClientRect();
  return {
    left: logoRect ? logoRect.left + logoRect.width / 2 : FALLBACK_LEFT_X,
    right: actionsRect ? actionsRect.left + actionsRect.width / 2 : window.innerWidth - FALLBACK_RIGHT_INSET
  };
}

function sampleBrightness(y: number): number {
  const { left, right } = headerAnchors();
  const leftValue = sampleBrightnessAt(left, y);
  const rightValue = sampleBrightnessAt(right, y);

  if (leftValue === null && rightValue === null) return 0.2;
  if (leftValue === null) return rightValue!;
  if (rightValue === null) return leftValue;
  return leftValue * LEFT_ANCHOR_WEIGHT + rightValue * (1 - LEFT_ANCHOR_WEIGHT);
}

export function useHeaderContrast(sampleAtY: number): 'light' | 'dark' {
  const [background, setBackground] = useState<'light' | 'dark'>('dark');
  const wasLightRef = useRef(false);

  useEffect(() => {
    let scheduled = false;

    const sample = () => {
      scheduled = false;
      const brightness = sampleBrightness(sampleAtY);

      const isLight = wasLightRef.current
        ? brightness > LIGHT_THRESHOLD - HYSTERESIS_MARGIN
        : brightness > LIGHT_THRESHOLD + HYSTERESIS_MARGIN;

      if (isLight !== wasLightRef.current) {
        wasLightRef.current = isLight;
        setBackground(isLight ? 'light' : 'dark');
      }
    };

    const onChange = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(sample);
    };

    window.addEventListener('scroll', onChange, { passive: true });
    window.addEventListener('resize', onChange);

    const themeObserver = new MutationObserver(onChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    let lastTheme = document.documentElement.getAttribute('data-theme');
    const pollTheme = window.setInterval(() => {
      const current = document.documentElement.getAttribute('data-theme');
      if (current !== lastTheme) {
        lastTheme = current;
        onChange();
      }
    }, 200);

    sample();

    return () => {
      window.removeEventListener('scroll', onChange);
      window.removeEventListener('resize', onChange);
      themeObserver.disconnect();
      window.clearInterval(pollTheme);
    };
  }, [sampleAtY]);

  return background;
}
