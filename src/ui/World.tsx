import WorldLogic from "../logic/WorldLogic";
import React, {useRef, useEffect} from 'react';


interface WorldProps {
  worldLogic: WorldLogic;
}

const World: React.FC<WorldProps> = ({ worldLogic }) => {
  const [rerender, setRerender] = React.useState(0);
  const canvasRef = useRef<any>(null);
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellSize = 20;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas?.getContext('2d')) {
      const context = canvas.getContext('2d');

      worldLogic.cells().forEach((cell) => {
        context.fillStyle = cell.isAlive ? 'rgb(0, 0, 200)' : 'rgb(0, 200, 0)';
        context.fillRect(cell.position.x * cellSize - 1, cell.position.y * cellSize - 1, cellSize-2, cellSize-2);
        });
    }
  }, [worldLogic, rerender])

  const onClick = (el: any, canvas: any) => {
    // console.log(`el:`, el, canvas)
    const canvasBoundingBox = canvas.getBoundingClientRect();
    const x = Math.floor((el.clientX - canvasBoundingBox.left) / cellSize);
    // const x = el.pageX;
    const y = Math.floor((el.clientY - canvasBoundingBox.top) / cellSize);
    console.log(`el2 x, y`, x, y)


    worldLogic.cellAt(x, y).toggleState();
    setRerender((prevValue) => prevValue + 1);
  }

  return <canvas ref={canvasRef} onClick={(el) => onClick(el, canvasRef.current)} width="1000" height="1000" />
}

export default World;