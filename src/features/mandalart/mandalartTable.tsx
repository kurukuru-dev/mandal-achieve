import TableCell from '@/features/mandalart/_tableCell';
import { TableCellData } from '@/data/initialTableData';

type Props = {
  tableIndex: number;
  tableData: TableCellData[][];
  tableThemeData: string[];
  setTableThemeData: (data: string[]) => void;
};

export default function MandalartTable(props: Props) {
  const { tableIndex, tableData, tableThemeData, setTableThemeData } = props;

  return (
    <table className="w-full table-fixed border-separate border-spacing-0 overflow-hidden rounded-sm border">
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex} className="h-1/3 border">
            {row.map((cell) => (
              <TableCell
                key={cell.id}
                tableIndex={tableIndex}
                cellData={cell}
                tableThemeData={tableThemeData}
                setTableThemeData={setTableThemeData}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
