import { ArrowRightLeft } from 'lucide-react';

export default function ModeTitle() {
  return (
    <button className="flex items-center gap-x-1 text-xl transition hover:opacity-80">
      <h2 className="font-bold text-primary">アイデア発想</h2>
      <ArrowRightLeft />
      <h2 className="font-bold text-primary">目標達成</h2>
    </button>
  );
}
