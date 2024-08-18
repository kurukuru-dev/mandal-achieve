import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h2 className="text-xl">お探しのページは見つかりませんでした。</h2>
      <Button className="mt-4">
        <Link href="/">TOPに戻る</Link>
      </Button>
    </div>
  );
}
