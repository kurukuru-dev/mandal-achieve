import HowToButton from '@/components/howToButton';
import ToggleModeButton from '@/components/toggleModeButton';
import PdfButton from '@/components/pdfButton';
import ScreenShotButton from '@/components/screenShotButton';

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
