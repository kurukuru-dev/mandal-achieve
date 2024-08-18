import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h2 className="text-xl">お探しのページは見つかりませんでした。</h2>
      <Button className="mt-4" asChild>
        <Link href="/">TOPに戻る</Link>
      </Button>
    </div>
  );
}
