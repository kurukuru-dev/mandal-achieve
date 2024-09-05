'use client';

import React, { useEffect, useState, useRef } from 'react';
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

  const [mainTheme, setMainTheme] = useState<string>('');
  const [isInputtingFlg, setisInputtingFlg] = useState<boolean>(false);
  const [isCompleted, setisCompleted] = useState<boolean>(false);

  useEffect(() => {
    const mainTheme = localStorage.getItem('mainTheme') || '';
    setMainTheme(mainTheme);
  }, []);

  const isCentralCellTheme = tableIndex === 5 && cellData.isCenter;
  const initialContent = isCentralCellTheme ? mainTheme : cellData.content;

  useEffect(() => {
    setUserInput(initialContent);
  }, [initialContent]);

  const [userInput, setUserInput] = useState<string>('');

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const mode = useSearchParams().get('mode');

  useEffect(() => {
    if (isInputtingFlg) {
      textareaRef.current?.focus();
    }
  }, [isInputtingFlg]);

  const handleCompleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setisCompleted(!isCompleted);
  };

  return (
    <td
      onClick={() => setisInputtingFlg(true)}
      className={`relative border p-1 text-center ${cellData.isCenter ? 'bg-secondary' : 'bg-white'}`}
    >
      {isInputtingFlg ? (
        <Textarea
          ref={textareaRef}
          onBlur={() => setisInputtingFlg(false)}
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
