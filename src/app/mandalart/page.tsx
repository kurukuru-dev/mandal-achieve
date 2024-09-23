'use client';

import { MandalartLayout, MandalartNav, MandalartTable } from '@/features/mandalart';
import { initialTableData, TableData } from '@/data/initialTableData';
import { useState } from 'react';

export default function Mandalart() {
  const [tableThemeData, setTableThemeData] = useState<string[]>(Array(7).fill(''));

  return (
    <>
      <header className="absolute bottom-19 right-1/24 translate-x-1/2 transform">
        <MandalartNav />
      </header>
      <main className="mx-auto flex flex-grow" style={{ width: 'calc(83.333333% + 0.5rem)' }}>
        <MandalartLayout>
          {initialTableData.map((table: TableData) => (
            <MandalartTable
              key={table.id}
              tableIndex={table.id}
              tableData={table.cells}
              tableThemeData={tableThemeData}
              setTableThemeData={setTableThemeData}
            />
          ))}
        </MandalartLayout>
      </main>
    </>
  );
}
