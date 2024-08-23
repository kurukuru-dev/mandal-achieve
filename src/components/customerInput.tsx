'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import MODE from '@/constants/mode';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CustomerInput() {
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedMode = e.currentTarget.mode.value;
    router.push(`/mandalart?mode=${selectedMode}`);
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-x-2">
      <Select name="mode">
        <SelectTrigger className="w-60">
          <SelectValue placeholder="モードを選択" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value={MODE.CREATE}>{MODE.CREATE_IDEA_JP}</SelectItem>
            <SelectItem value={MODE.ACHIVE}>{MODE.ACHIVE_GOAL_JP}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input type="text" name="mainTheme" placeholder="メインテーマを入力" autoComplete="off" />
      <Button variant="accent">スタート</Button>
    </form>
  );
}
