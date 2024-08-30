import { FileText, ArrowRightLeft } from 'lucide-react';
import HowToButton from '@/components/howToButton';
import { Button } from '@/components/ui/button';
import ScreenShotButton from '@/components/screenShotButton';

export default function MandalartNav({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <ul className="gap flex flex-col items-center gap-1">
        <li>
          <HowToButton />
        </li>
        <li>
          <Button variant="accent" size="icon">
            <ArrowRightLeft />
          </Button>
        </li>
        <li>
          <Button variant="accent" size="icon">
            <FileText />
          </Button>
        </li>
        <li>
          <ScreenShotButton />
        </li>
      </ul>
    </nav>
  );
}
