import WorldLogic from "../logic/WorldLogic";
import React, {useRef, useEffect} from 'react';


interface WorldProps {
  worldLogic: WorldLogic;
}

const World: React.FC<WorldProps> = ({ worldLogic }) => {
  const canvasRef = useRef<any>(null);
  // const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas?.getContext('2d')) {
      const context = canvas.getContext('2d');

      context.fillStyle = 'rgb(200, 0, 0)';
      context.fillRect(10, 10, 50, 50);

      context.fillStyle = 'rgba(0, 0, 200, 0.5)';
      context.fillRect(30, 30, 50, 50);

      worldLogic.cells().forEach((cell) => {
        context.fillStyle = cell.isAlive ? 'rgb(200, 0, 0)' : 'rgb(0, 200, 0)';

        context.fillRect(cell.position.x * 10, cell.position.y * 10, 10, 10);
        });
    }
  }, [worldLogic])

  return <>
    <canvas ref={canvasRef} width="150" height="150">
      I'm a canvas
    </canvas>
    {/* <table>
      <thead></thead>
      <tbody>
        {worldLogic.cellMatrix.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, columnIndex) =>
              <td key={`${rowIndex}-${columnIndex}`}>{cell.toString}</td>)}
          </tr>
        ))}
      </tbody>
    </table> */}
  </>
}

export default World;