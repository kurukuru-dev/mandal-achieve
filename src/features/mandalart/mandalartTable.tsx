import TableCell from '@/features/mandalart/_tableCell';
import { TableCellData } from '@/data/initialTableData';

export default function MandalartTable({ tableData }: { tableData: TableCellData[][] }) {
  return (
    <table className="w-full table-fixed border-separate border-spacing-0 overflow-hidden rounded-sm border">
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex} className="h-1/3 border">
            {row.map((cell) => (
              <TableCell key={cell.id} cellData={cell} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
