'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Error() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h2 className="text-xl">予期せぬエラーが発生しました。</h2>
      <Button className="mt-4" asChild>
        <Link href="/">TOPに戻る</Link>
      </Button>
    </div>
  );
}
