'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function TableCell({ input }: { input: string }) {
  const [isInputtingFlg, setisInputtingFlg] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>(input);
  const [isCompleted, setisCompleted] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
      className="relative border bg-white p-1 text-center"
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
          <Button
            size="iconSm"
            variant={isCompleted ? 'default' : 'outline'}
            className="absolute bottom-1 right-1"
            onClick={handleCompleteClick}
          >
            済
          </Button>
        </>
      )}
    </td>
  );
}
