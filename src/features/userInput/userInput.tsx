'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ModeSelect from '@/features/userInput/modeSelect';
import { Input } from '@/components/ui/input';
import ValidationText from '@/components/validationText';
import { Button } from '@/components/ui/button';

export default function UserInput() {
  const router = useRouter();

  const [selectedMode, setSelectedMode] = useState<string>('');
  const [mainTheme, setMainTheme] = useState<string>('');
  const [errors, setErrors] = useState<{ mode: string; mainTheme: string }>({
    mode: '',
    mainTheme: ''
  });

  const validateForm = () => {
    const newErroes = { mode: '', mainTheme: '' };
    if (!selectedMode) newErroes.mode = '選択は必須です。';
    if (!mainTheme) newErroes.mainTheme = '入力は必須です。';
    setErrors(newErroes);

    return Object.values(newErroes).some((error) => !!error);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      localStorage.setItem('mainTheme', mainTheme);
      router.push(`/mandalart?mode=${selectedMode}`);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-x-2">
      <div className="relative w-36">
        {errors.mode && (
          <div className="absolute -top-6 left-1">
            <ValidationText className="h-5">{errors.mode}</ValidationText>
          </div>
        )}
        <ModeSelect onValueChange={(value: string) => setSelectedMode(value)} />
      </div>
      <div className="relative w-72">
        {errors.mainTheme && (
          <div className="absolute -top-6 left-1">
            <ValidationText className="h-5">{errors.mainTheme}</ValidationText>
          </div>
        )}
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMainTheme(e.target.value)}
          value={mainTheme}
          type="text"
          name="mainTheme"
          placeholder="メインテーマを入力"
          autoComplete="off"
        />
      </div>
      <Button className="w-28" variant="accent">
        スタート
      </Button>
    </form>
  );
}
