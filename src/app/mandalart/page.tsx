import { MandalartLayout, MandalartTable } from '@/features/mandalart';

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
      <main className="mx-auto my-2 flex w-10/12 flex-grow">
        <MandalartLayout>
          {items.map((item) => (
            <MandalartTable key={item.id} userInputs={item.userInputs} />
          ))}
        </MandalartLayout>
      </main>
    </>
  );
}
