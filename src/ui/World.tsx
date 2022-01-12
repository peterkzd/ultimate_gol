import WorldLogic from "../logic/WorldLogic";

interface WorldProps {
  worldLogic: WorldLogic;
}

const World: React.FC<WorldProps> = ({ worldLogic }) => {
  return (
    <table>
      <thead></thead>
      <tbody>
        {worldLogic.statusMatrix.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, columnIndex) => <td key={`${rowIndex}-${columnIndex}`}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default World;