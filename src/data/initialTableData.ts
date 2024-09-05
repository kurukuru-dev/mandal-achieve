export type TableCellData = {
  id: number;
  content: string;
  isCenter: boolean;
};

export type TableData = {
  id: number;
  cells: TableCellData[][];
};

export const initialTableData: TableData[] = Array.from({ length: 9 }, (_, tableIndex) => ({
  id: tableIndex + 1,
  cells: [
    [
      { id: 1, content: '', isCenter: false },
      { id: 2, content: '', isCenter: false },
      { id: 3, content: '', isCenter: false }
    ],
    [
      { id: 4, content: '', isCenter: false },
      { id: 5, content: '', isCenter: true }, // 中央セル
      { id: 6, content: '', isCenter: false }
    ],
    [
      { id: 7, content: '', isCenter: false },
      { id: 8, content: '', isCenter: false },
      { id: 9, content: '', isCenter: false }
    ]
  ]
}));
