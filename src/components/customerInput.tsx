'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import MODE from '@/const/mode';
import ModeSelect from '@/components/modeSelect';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CustomerInput() {
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedMode = e.currentTarget.mode.value;
    const mainTheme = e.currentTarget.mainTheme.value;

    if (selectedMode === MODE.CREATE) {
      router.push(`/${MODE.CREATE}?mainTheme=${mainTheme}`);
    } else if (selectedMode === MODE.ACHIVE) {
      router.push(`/${MODE.ACHIVE}?mainTheme=${mainTheme}`);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-x-2">
      <ModeSelect className="w-60" />
      <Input
        type="text"
        name="mainTheme"
        placeholder="メインテーマを入力"
        autoComplete="off"
      />
      <Button variant="accent">スタート</Button>
    </form>
  );
}
