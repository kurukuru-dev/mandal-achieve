'use client';

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { TableCellData } from '@/data/initialTableData';
import MODE from '@/constants/mode';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

type Props = {
  tableIndex: number;
  cellData: TableCellData;
};

export default function TableCell(props: Props) {
  const { tableIndex, cellData } = props;

  const [userInput, setUserInput] = useState<string>('');
  const [isInputting, setIsInputting] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isCentralCellTheme = useMemo(
    () => tableIndex === 5 && cellData.isCenter,
    [tableIndex, cellData.isCenter]
  );

  // ローカルストレージからメインテーマを取得して、中央セルの場合はメインテーマを表示
  useEffect(() => {
    const mainTheme = localStorage.getItem('mainTheme') || '';

    const initialContent = isCentralCellTheme ? mainTheme : cellData.content;

    setUserInput(initialContent);
  }, [isCentralCellTheme, cellData.content]);

  useEffect(() => {
    if (isInputting) {
      textareaRef.current?.focus();
    }
  }, [isInputting]);

  const mode = useSearchParams().get('mode');

  const handleCompleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsCompleted(!isCompleted);
  };

  return (
    <td
      onClick={() => setIsInputting(true)}
      className={`relative border p-1 text-center ${cellData.isCenter ? 'bg-secondary' : 'bg-white'}`}
    >
      {!isCentralCellTheme && isInputting ? (
        <Textarea
          ref={textareaRef}
          onBlur={() => setIsInputting(false)}
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
      ) : (
        <>
          <p className={`text-sm ${userInput ? 'text-black' : 'text-gray-300'}`}>
            {userInput ? userInput : '未入力'}
          </p>
          {mode === MODE.ACHIVE && (
            <Button
              size="iconSm"
              variant={isCompleted ? 'default' : 'outline'}
              className="absolute bottom-1 right-1"
              onClick={handleCompleteClick}
            >
              済
            </Button>
          )}
        </>
      )}
    </td>
  );
}
