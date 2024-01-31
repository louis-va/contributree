import { useEffect, useRef, useState } from 'react';
import './Tree.css';
import { createTree } from './graphics/tree';

interface TreeProps {
  seed: string;
  size: number;
}

const Tree = ({ seed, size }: TreeProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [canvas, setCanvas] = useState<any>(null);

  useEffect(() => {
    const pixi = createTree({
      canvas: canvasRef.current,
      seed: seed,
      size: size,
      canvasWidth: 1000,
      canvasHeight: 1000
    });

    setCanvas(pixi.tree);

    return () => {
      pixi.tree.destroy();
      pixi.app.view.remove();
    };
  }, [seed, size]);

  const download = () => {
    canvas.downloadAsPng();
  }

  return (
    <section className='tree-container' ref={canvasRef}>
      <button className='download-btn' type='button' name='download' onClick={download}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45.8334 8.33334C43.5334 8.33334 41.6667 10.2 41.6667 12.5V45.8334H27.0834C25.9328 45.8334 25 46.7661 25 47.9167C25.0001 48.4692 25.2196 48.999 25.6104 49.3897C25.652 49.4322 25.6954 49.4729 25.7406 49.5118L47.0134 69.572L47.1517 69.7022C47.9229 70.4274 48.9413 70.8319 50 70.8334C51.0587 70.8319 52.077 70.4274 52.8483 69.7022L52.9052 69.6534C52.9189 69.6372 52.9325 69.6209 52.9459 69.6045L74.2106 49.5524C74.2528 49.5161 74.2935 49.4781 74.3327 49.4385L74.3652 49.4141C74.3734 49.406 74.3815 49.3979 74.3896 49.3897C74.7803 48.9991 74.9999 48.4692 75 47.9167C75 46.7661 74.0672 45.8334 72.9166 45.8334H58.3333V12.5C58.3333 10.2 56.4666 8.33334 54.1666 8.33334H49.9999H45.8334ZM12.5 83.3334C10.9974 83.3121 9.59969 84.1016 8.84214 85.3995C8.0846 86.6974 8.0846 88.3027 8.84214 89.6005C9.59969 90.8985 10.9974 91.6879 12.5 91.6667H87.5C89.0027 91.6879 90.4004 90.8984 91.1579 89.6005C91.9155 88.3026 91.9155 86.6974 91.1579 85.3995C90.4004 84.1016 89.0027 83.3121 87.5 83.3334H12.5Z" fill="currentColor"/>
        </svg>
      </button>
    </section>
  );
}

export default Tree;
