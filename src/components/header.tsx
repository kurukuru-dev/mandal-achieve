import ModeSelect from '@/components/modeSelect';
import HowToButton from '@/components/howToButton';

import type { ModeValueLiteral } from '@/types/mode';

type Props = {
  mode: ModeValueLiteral;
};

export default function Header({ mode }: Props) {
  return (
    <header className="flex justify-between">
      <div className="flex items-center gap-x-2">
        <ModeSelect mode={mode} className="w-40" />
        <HowToButton />
      </div>
      <div>
        <button>PDF</button>
        <button>スクショ</button>
      </div>
    </header>
  );
}
