import { ArrowRightLeft } from 'lucide-react';
import MODE from '@/constants/mode';

export default function ModeTitle() {
  return (
    <button className="flex items-center gap-x-1 text-xl transition hover:opacity-80">
      <h2 className="font-bold text-primary">{MODE.CREATE_IDEA_JP}</h2>
      <ArrowRightLeft />
      <h2 className="font-bold text-primary">{MODE.ACHIVE_GOAL_JP}</h2>
    </button>
  );
}
