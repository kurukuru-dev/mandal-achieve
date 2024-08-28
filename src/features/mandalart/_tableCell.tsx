'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Textarea } from '@/components/ui/textarea';

export default function TableCell({ input }: { input: string }) {
  const [isInputtingFlg, setisInputtingFlg] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>(input);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isInputtingFlg) {
      textareaRef.current?.focus();
    }
  }, [isInputtingFlg]);

  return (
    <td onClick={() => setisInputtingFlg(true)} className="border bg-white p-1 text-center">
      {isInputtingFlg ? (
        <Textarea
          ref={textareaRef}
          onBlur={() => setisInputtingFlg(false)}
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
      ) : userInput ? (
        <p>{userInput}</p>
      ) : (
        <p className="text-sm text-gray-300">未入力</p>
      )}
    </td>
  );
}
