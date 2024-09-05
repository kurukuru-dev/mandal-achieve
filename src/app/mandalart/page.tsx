import { MandalartLayout, MandalartNav, MandalartTable } from '@/features/mandalart';
import { initialTableData, TableData } from '@/data/initialTableData';

export default function Mandalart() {
  return (
    <>
      <header className="absolute bottom-19 right-1/24 translate-x-1/2 transform">
        <MandalartNav />
      </header>
      <main className="mx-auto flex flex-grow" style={{ width: 'calc(83.333333% + 0.5rem)' }}>
        <MandalartLayout>
          {initialTableData.map((table: TableData) => (
            <MandalartTable key={table.id} tableData={table.cells} />
          ))}
        </MandalartLayout>
      </main>
    </>
  );
}
