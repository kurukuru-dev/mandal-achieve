import TableCell from '@/features/mandalart/_tableCell';

export default function MandalartTable() {
  // ダミーデータ生成
  const tableRows = Array.from({ length: 3 }, (_, i) => ({ id: i + 1 }));
  const tableCells = Array.from({ length: 3 }, (_, i) => ({ id: i + 1 }));

  return (
    <table className="w-full table-fixed border-separate border-spacing-0 overflow-hidden rounded-sm border">
      <tbody>
        {tableRows.map((tableRow) => (
          <tr key={tableRow.id} className="h-1/3 border">
            {tableCells.map((tableCell) => (
              <TableCell key={tableCell.id} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
