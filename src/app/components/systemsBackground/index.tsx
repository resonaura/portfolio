import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../providers/theme/context';
import './index.scss';

// Deterministic pseudo-random
function seededRand(seed: number): number {
  const s = Math.sin(seed * 9301 + 49297) * 233280;
  return s - Math.floor(s);
}

// Systems cluster skyline: server monoliths, telemetry towers, compute blades
function systemsHeight(nx: number, jitterSeed: number): number {
  const rand = seededRand(jitterSeed);

  if (nx < -0.65) {
    // Edge clusters: medium low server banks
    return 0.6 + rand * 0.6;
  } else if (nx < -0.22) {
    // Stepped telemetry towers & compute racks
    return 1.1 + rand * 1.1;
  } else if (nx < 0.25) {
    // Central mainframe monoliths & data spires
    return 1.9 + rand * 2.3;
  } else if (nx < 0.68) {
    // High-density nodes
    return 1.2 + rand * 1.3;
  } else {
    // Edge cluster
    return 0.5 + rand * 0.6;
  }
}

// Soft telemetry node sprite
function makeNodeTexture() {
  const sz = 16;
  const offscreen = document.createElement('canvas');
  offscreen.width = sz;
  offscreen.height = sz;
  const ctx = offscreen.getContext('2d')!;
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  // Clean '+' crosshair node
  ctx.moveTo(sz / 2, 2);
  ctx.lineTo(sz / 2, sz - 2);
  ctx.moveTo(2, sz / 2);
  ctx.lineTo(sz - 2, sz / 2);
  ctx.stroke();
  const tex = new THREE.CanvasTexture(offscreen);
  tex.flipY = false;
  return tex;
}

interface LayerConfig {
  z: number;
  cols: number;
  hScale: number;
  gapRatio: number;
  fill: number;
  fOp: number;
  stroke: number;
  sOp: number;
}

interface Tier {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  resize: (w: number, h: number) => void;
  dispose: () => void;
}

function buildTier(
  canvas: HTMLCanvasElement,
  w: number,
  h: number,
  layerConfigs: LayerConfig[],
  includeSky: boolean,
  isDark: boolean,
  maxPixelRatio: number
): Tier {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio));
  renderer.setSize(w, h, false);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
  camera.position.z = 5;

  const visH = 2 * Math.tan(30 * (Math.PI / 180)) * 5; // ≈ 5.77
  const visW = visH * (w / h);
  const groundY = -visH / 2 - 0.45;

  const allGeo: THREE.BufferGeometry[] = [];
  const allMat: THREE.Material[] = [];

  function addMonolith(
    bx: number, bw: number,
    groundY: number, bh: number,
    z: number,
    type: number,
    fillColor: number, fillOp: number,
    strokeColor: number, strokeOp: number,
  ) {
    if (type === 4) return;

    const x1 = bx, x2 = bx + bw;
    const y1 = groundY;
    const y2 = groundY + bh;
    const cx = bx + bw / 2;

    const fillVerts: number[] = [];
    const lineVerts: number[] = [];

    if (type === 1) {
      // Spire / Antenna Node
      const baseH = bh * 0.72;
      const by2 = groundY + baseH;
      const spireW = bw * 0.4;
      const sx1 = cx - spireW / 2;
      const sx2 = cx + spireW / 2;

      fillVerts.push(
        x1, y1, z,  x2, y1, z,  x2, by2, z,
        x1, y1, z,  x2, by2, z,  x1, by2, z
      );
      fillVerts.push(
        sx1, by2, z,  sx2, by2, z,  cx, y2, z
      );

      lineVerts.push(
        x1, y1, z,  x2, y1, z,
        x2, y1, z,  x2, by2, z,
        x2, by2, z, sx2, by2, z,
        sx2, by2, z, cx, y2, z,
        cx, y2, z,   sx1, by2, z,
        sx1, by2, z, x1, by2, z,
        x1, by2, z,  x1, y1, z,
        x1, y1, z,   x2, by2, z,
      );
    } else if (type === 2 || type === 3) {
      // Stepped Server Monolith
      const baseH = bh * 0.65;
      const by2 = groundY + baseH;
      const topW = bw * 0.68;
      const tx1 = cx - topW / 2;
      const tx2 = cx + topW / 2;

      fillVerts.push(
        x1, y1, z,  x2, y1, z,  x2, by2, z,
        x1, y1, z,  x2, by2, z,  x1, by2, z
      );
      fillVerts.push(
        tx1, by2, z, tx2, by2, z, tx2, y2, z,
        tx1, by2, z, tx2, y2, z, tx1, y2, z
      );

      lineVerts.push(
        x1, y1, z,  x2, y1, z,
        x2, y1, z,  x2, by2, z,
        x2, by2, z, tx2, by2, z,
        tx2, by2, z, tx2, y2, z,
        tx2, y2, z,  tx1, y2, z,
        tx1, y2, z,  tx1, by2, z,
        tx1, by2, z, x1, by2, z,
        x1, by2, z,  x1, y1, z,
        x1, y1, z,   x2, by2, z,
        tx1, by2, z, tx2, y2, z,
      );
    } else {
      // Standard Compute Blade
      fillVerts.push(
        x1, y1, z,  x2, y1, z,  x2, y2, z,
        x1, y1, z,  x2, y2, z,  x1, y2, z
      );
      lineVerts.push(
        x1, y1, z,  x2, y1, z,
        x2, y1, z,  x2, y2, z,
        x2, y2, z,  x1, y2, z,
        x1, y2, z,  x1, y1, z,
        x1, y1, z,  x2, y2, z,
      );
    }

    const fillGeo = new THREE.BufferGeometry();
    fillGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(fillVerts), 3));
    const fillMat = new THREE.MeshBasicMaterial({
      color: fillColor,
      transparent: true,
      opacity: fillOp,
      side: THREE.DoubleSide,
      depthWrite: true,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });
    scene.add(new THREE.Mesh(fillGeo, fillMat));

    const outlineGeo = new THREE.BufferGeometry();
    outlineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(lineVerts), 3));
    const strokeMat = new THREE.LineBasicMaterial({
      color: strokeColor,
      transparent: true,
      opacity: strokeOp,
    });
    scene.add(new THREE.LineSegments(outlineGeo, strokeMat));

    allGeo.push(fillGeo, outlineGeo);
    allMat.push(fillMat, strokeMat);
  }

  layerConfigs.forEach(({ z, cols, hScale, gapRatio, fill, fOp, stroke, sOp }) => {
    const spanW = visW * 1.12;
    const slotW = spanW / cols;
    const startX = -visW / 2 - spanW * 0.06 + (seededRand(Math.abs(z) * 5) - 0.5) * (slotW * 0.5);

    for (let i = 0; i < cols; i++) {
      const nx   = (i / (cols - 1)) * 2 - 1;
      const h    = systemsHeight(nx, i + z * 17) * hScale;
      const gap  = slotW * gapRatio;
      const bx   = startX + i * slotW + gap / 2;
      const bw   = slotW - gap;

      const seedVal = i + Math.round(Math.abs(z) * 11);
      const rand = seededRand(seedVal);
      const bType = Math.floor(rand * 4.35);

      addMonolith(bx, bw, groundY, h, z, bType, fill, fOp, stroke, sOp);
    }
  });

  if (includeSky) {
    // Telemetry Network Node Constellation
    const nodeTex = makeNodeTexture();
    const nodeCount = 20;
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeList: THREE.Vector3[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const sx = (seededRand(i * 3) - 0.5) * visW * 1.05;
      const sy = (seededRand(i * 3 + 1) * 0.35 + 0.60) * visH * 0.5;
      const sz = -1.5 - seededRand(i * 3 + 2) * 2.5;

      nodePositions[i * 3]     = sx;
      nodePositions[i * 3 + 1] = sy;
      nodePositions[i * 3 + 2] = sz;
      nodeList.push(new THREE.Vector3(sx, sy, sz));
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    const nodeMat = new THREE.PointsMaterial({
      color: isDark ? 0x888888 : 0x777777,
      size: 0.16,
      map: nodeTex,
      transparent: true,
      opacity: isDark ? 0.4 : 0.28,
      depthWrite: false,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    scene.add(nodePoints);
    allGeo.push(nodeGeo);
    allMat.push(nodeMat);
    nodeTex.dispose();

    // Telemetry links
    const linePairs: number[] = [];
    const maxDist = 2.0;
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const p1 = nodeList[i];
        const p2 = nodeList[j];
        if (p1.distanceTo(p2) < maxDist) {
          linePairs.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
        }
      }
    }
    if (linePairs.length > 0) {
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePairs), 3));
      const lineMat = new THREE.LineBasicMaterial({
        color: isDark ? 0x383838 : 0xbbbbbb,
        transparent: true,
        opacity: isDark ? 0.25 : 0.18,
      });
      scene.add(new THREE.LineSegments(lineGeo, lineMat));
      allGeo.push(lineGeo);
      allMat.push(lineMat);
    }
  }

  return {
    renderer,
    scene,
    camera,
    resize(w: number, h: number) {
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    },
    dispose() {
      allGeo.forEach((g) => g.dispose());
      allMat.forEach((m) => m.dispose());
      renderer.dispose();
    }
  };
}

export function SystemsBackground() {
  const backRef = useRef<HTMLCanvasElement>(null);
  const midRef = useRef<HTMLCanvasElement>(null);
  const frontRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const backCanvas = backRef.current;
    const midCanvas = midRef.current;
    const frontCanvas = frontRef.current;
    if (!backCanvas || !midCanvas || !frontCanvas) return;
    let disposed = false;

    const parent = frontCanvas.parentElement!;
    const W = parent.offsetWidth  || window.innerWidth;
    const H = parent.offsetHeight || window.innerHeight;

    const isDark = theme === 'dark';

    // Systems architecture styling: strict B&W (grayscale monochrome)
    const allLayers: LayerConfig[] = [
      {
        z: 0.0,  cols: 14, hScale: 0.19, gapRatio: 0.05,
        fill: isDark ? 0x060606 : 0x0d0d0d, fOp: isDark ? 0.94 : 0.13,
        stroke: isDark ? 0x484848 : 0x999999, sOp: isDark ? 0.75 : 0.55,
      },
      {
        z: -1.0, cols: 17, hScale: 0.18, gapRatio: 0.04,
        fill: isDark ? 0x090909 : 0x0b0b0b, fOp: isDark ? 0.90 : 0.10,
        stroke: isDark ? 0x3a3a3a : 0x888888, sOp: isDark ? 0.65 : 0.45,
      },
      {
        z: -2.0, cols: 20, hScale: 0.17, gapRatio: 0.03,
        fill: isDark ? 0x0d0d0d : 0x090909, fOp: isDark ? 0.85 : 0.08,
        stroke: isDark ? 0x2e2e2e : 0x777777, sOp: isDark ? 0.55 : 0.35,
      },
      {
        z: -3.0, cols: 23, hScale: 0.16, gapRatio: 0.025,
        fill: isDark ? 0x111111 : 0x070707, fOp: isDark ? 0.80 : 0.06,
        stroke: isDark ? 0x222222 : 0x666666, sOp: isDark ? 0.45 : 0.28,
      },
      {
        z: -4.0, cols: 26, hScale: 0.15, gapRatio: 0.02,
        fill: isDark ? 0x151515 : 0x050505, fOp: isDark ? 0.75 : 0.04,
        stroke: isDark ? 0x181818 : 0x555555, sOp: isDark ? 0.35 : 0.20,
      },
    ];

    const tierEntries = [
      { tier: buildTier(frontCanvas, W, H, [allLayers[0]], false, isDark, 2), skip: 1 },
      { tier: buildTier(midCanvas, W, H, [allLayers[1], allLayers[2]], false, isDark, 1), skip: 1 },
      { tier: buildTier(backCanvas, W, H, [allLayers[3], allLayers[4]], true, isDark, 1), skip: 2 },
    ];

    let isVisible = true;
    let animId: number | null = null;
    let currentCamY = 0;
    let targetCamY = 0;

    // Smooth lerp animation loop to eliminate abrupt Y jumping on fast scrolling/flicks
    const tick = () => {
      if (disposed || !isVisible) {
        animId = null;
        return;
      }

      const diff = targetCamY - currentCamY;
      if (Math.abs(diff) > 0.0005) {
        // Exponential dampening ease (0.08) ensures silk-smooth camera motion
        currentCamY += diff * 0.08;
        tierEntries.forEach(({ tier }) => {
          tier.camera.position.y = currentCamY;
          tier.renderer.render(tier.scene, tier.camera);
        });
        animId = requestAnimationFrame(tick);
      } else {
        currentCamY = targetCamY;
        tierEntries.forEach(({ tier }) => {
          tier.camera.position.y = currentCamY;
          tier.renderer.render(tier.scene, tier.camera);
        });
        animId = null;
      }
    };

    const updateCameraTarget = () => {
      if (disposed || !isVisible) return;
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = 1 - (rect.top / vh);
      // Bounded subtle parallax
      targetCamY = (progress - 1.0) * 0.38;

      if (animId === null) {
        animId = requestAnimationFrame(tick);
      }
    };

    // Calculate initial position
    const initRect = parent.getBoundingClientRect();
    const initVh = window.innerHeight || 1;
    const initProgress = 1 - (initRect.top / initVh);
    targetCamY = (initProgress - 1.0) * 0.38;
    currentCamY = targetCamY;
    tierEntries.forEach(({ tier }) => {
      tier.camera.position.y = currentCamY;
      tier.renderer.render(tier.scene, tier.camera);
    });

    const onScroll = () => {
      if (!isVisible) return;
      updateCameraTarget();
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) updateCameraTarget();
      },
      { rootMargin: '25% 0px' }
    );
    io.observe(parent);

    const onResize = () => {
      if (disposed) return;
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      tierEntries.forEach(({ tier }) => tier.resize(w, h));
      tierEntries.forEach(({ tier }) => tier.renderer.render(tier.scene, tier.camera));
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(parent);

    return () => {
      disposed = true;
      if (animId !== null) cancelAnimationFrame(animId);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      tierEntries.forEach(({ tier }) => tier.dispose());
    };
  }, [theme]);

  return (
    <div className='systems-bg-stack'>
      <canvas ref={backRef} className='systems-bg systems-bg--back' />
      <canvas ref={midRef} className='systems-bg systems-bg--mid' />
      <canvas ref={frontRef} className='systems-bg systems-bg--front' />
    </div>
  );
}
