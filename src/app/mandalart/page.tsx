import { MandalartLayout, MandalartNav, MandalartTable } from '@/features/mandalart';

// ダミーデータ
// TODO: データ構造考える余地あり
const items = [
  {
    id: 1,
    theme: '',
    userInputs: {
      top: ['', '', ''],
      middle: ['', '', ''],
      bottom: ['', '', '']
    }
  },
  {
    id: 2,
    theme: '',
    userInputs: {
      top: ['', '', ''],
      middle: ['', '', ''],
      bottom: ['', '', '']
    }
  },
  {
    id: 3,
    theme: '',
    userInputs: {
      top: ['', '', ''],
      middle: ['', '', ''],
      bottom: ['', '', '']
    }
  },
  {
    id: 4,
    theme: '',
    userInputs: {
      top: ['', '', ''],
      middle: ['', '', ''],
      bottom: ['', '', '']
    }
  },
  {
    id: 5,
    theme: '',
    userInputs: {
      top: ['', '', ''],
      middle: ['', '', ''],
      bottom: ['', '', '']
    }
  },
  {
    id: 6,
    theme: '',
    userInputs: {
      top: ['', '', ''],
      middle: ['', '', ''],
      bottom: ['', '', '']
    }
  },
  {
    id: 7,
    theme: '',
    userInputs: {
      top: ['', '', ''],
      middle: ['', '', ''],
      bottom: ['', '', '']
    }
  },
  {
    id: 8,
    theme: '',
    userInputs: {
      top: ['', '', ''],
      middle: ['', '', ''],
      bottom: ['', '', '']
    }
  },
  {
    id: 9,
    theme: '',
    userInputs: {
      top: ['', '', ''],
      middle: ['', '', ''],
      bottom: ['', '', '']
    }
  }
];

export default function Mandalart() {
  return (
    <>
      <header className="right-1/24 bottom-19 absolute translate-x-1/2 transform">
        <MandalartNav />
      </header>
      <main className="mx-auto flex flex-grow" style={{ width: 'calc(83.333333% + 0.5rem)' }}>
        <MandalartLayout>
          {items.map((item) => (
            <MandalartTable key={item.id} userInputs={item.userInputs} />
          ))}
        </MandalartLayout>
      </main>
    </>
  );
}
