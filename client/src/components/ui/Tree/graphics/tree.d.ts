interface createTreeAttributes {
  canvas: HTMLDivElement | null;
  seed: string;
  size: number;
  canvasWidth: number;
  canvasHeight: number;
}

export function createTree(attributes: createTreeAttributes): {tree: any, pixiCanvas: any};
