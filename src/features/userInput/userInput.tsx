'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ModeSelect from '@/features/userInput/modeSelect';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function UserInput() {
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedMode = e.currentTarget.mode.value;
    router.push(`/mandalart?mode=${selectedMode}`);
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-x-2">
      <ModeSelect />
      <Input type="text" name="mainTheme" placeholder="メインテーマを入力" autoComplete="off" />
      <Button variant="accent">スタート</Button>
    </form>
  );
}
