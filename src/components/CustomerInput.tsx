'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

export default function CustomerInput() {
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedMode = e.currentTarget.mode.value;
    const mainTheme = e.currentTarget.mainTheme.value;

    if (selectedMode === 'create') {
      router.push(`/create?mainTheme=${mainTheme}`);
    } else if (selectedMode === 'achive') {
      router.push(`/achive?mainTheme=${mainTheme}`);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-x-2">
      <Select name="mode">
        <SelectTrigger className="w-60">
          <SelectValue placeholder="モードを選択" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="create">アイデア創造</SelectItem>
            <SelectItem value="achive">目標達成</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
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
