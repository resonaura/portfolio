/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'three/examples/jsm/postprocessing/EffectComposer.js' {
  import { WebGLRenderTarget } from 'three';
  import { Pass } from 'three/examples/jsm/postprocessing/Pass';
  export class EffectComposer {
    constructor(renderer: any, renderTarget?: WebGLRenderTarget);
    render(deltaTime?: number): void;
    addPass(pass: Pass): void;
  }
}

declare module 'three/examples/jsm/postprocessing/RenderPass.js' {
  import { Pass } from 'three/examples/jsm/postprocessing/Pass';
  import { Scene, Camera } from 'three';
  export class RenderPass extends Pass {
    constructor(scene: Scene, camera: Camera);
  }
}

declare module 'three/examples/jsm/postprocessing/UnrealBloomPass.js' {
  import { Pass } from 'three/examples/jsm/postprocessing/Pass';
  import { Vector2 } from 'three';
  export class UnrealBloomPass extends Pass {
    constructor(
      resolution: Vector2,
      strength: number,
      radius: number,
      threshold: number
    );
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'shader-art': any;
    uniform: any;
    // Extend 'script' element to include custom 'name' attribute
    script: React.DetailedHTMLProps<
      React.ScriptHTMLAttributes<HTMLScriptElement>,
      HTMLScriptElement
    > & {
      name?: string;
    };
  }
}

declare module '@shader-art/plugin-uniform' {
  export class UniformPlugin {
    // Define the methods and properties if known, otherwise use 'any'
    constructor();
  }
}

declare module 'shader-art' {
  export class ShaderArt {
    constructor(element: HTMLElement, options?: { autoplay?: boolean });
    static register(plugins?: Array<() => any>): void;
    dispose(): void;
  }
}
