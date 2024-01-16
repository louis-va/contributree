import { useEffect, useRef } from 'react';
import './Tree.css';
import { createTree } from './graphics/tree';

interface TreeProps {
  seed: string;
  size: number;
}

const Tree = ({ seed, size }: TreeProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pixi = createTree({
      canvas: canvasRef.current,
      seed: seed,
      size: size,
      canvasWidth: 1000,
      canvasHeight: 1000
    });

    return () => {
      pixi.tree.destroy();
      pixi.pixiCanvas.remove();
    };
  }, []);

  return (
    <section className='tree-container' ref={canvasRef}></section>
  );
}

export default Tree;
