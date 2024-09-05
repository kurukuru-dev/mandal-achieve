import TableCell from '@/features/mandalart/_tableCell';
import { TableCellData } from '@/data/initialTableData';

type Props = {
  tableIndex: number;
  tableData: TableCellData[][];
};

export default function MandalartTable(props: Props) {
  const { tableIndex, tableData } = props;

  return (
    <table className="w-full table-fixed border-separate border-spacing-0 overflow-hidden rounded-sm border">
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex} className="h-1/3 border">
            {row.map((cell) => (
              <TableCell key={cell.id} tableIndex={tableIndex} cellData={cell} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
