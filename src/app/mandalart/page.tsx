import { MandalartLayout, MandalartNav, MandalartTable } from '@/features/mandalart';

export default function Mandalart() {
  // ダミーデータを生成
  const tables = Array.from({ length: 9 }, (_, i) => ({ id: i + 1 }));

  return (
    <>
      <header className="absolute bottom-19 right-1/24 translate-x-1/2 transform">
        <MandalartNav />
      </header>
      <main className="mx-auto flex flex-grow" style={{ width: 'calc(83.333333% + 0.5rem)' }}>
        <MandalartLayout>
          {tables.map((table) => (
            <MandalartTable key={table.id} />
          ))}
        </MandalartLayout>
      </main>
    </>
  );
}
