import HowToButton from '@/components/howToButton';
import ToggleModeButton from './_toggleModeButton';
import PdfButton from './_pdfButton';
import ScreenShotButton from './_screenShotButton';

export default function MandalartNav({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <ul className="gap flex flex-col items-center gap-1">
        <li>
          <HowToButton />
        </li>
        <li>
          <ToggleModeButton />
        </li>
        <li>
          <PdfButton />
        </li>
        <li>
          <ScreenShotButton />
        </li>
      </ul>
    </nav>
  );
}
