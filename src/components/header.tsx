'use client';

import { Camera, FileText } from 'lucide-react';
import HowToButton from '@/components/howToButton';
import ModeTitle from '@/components/modeTitle';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="h-13 mx-auto w-10/12">
      <div className="flex min-h-full items-center justify-between">
        <ModeTitle />
        <div className="flex items-center gap-x-1">
          <Button variant="accent" size="icon">
            <FileText />
          </Button>
          <Button variant="accent" size="icon">
            <Camera />
          </Button>
          <HowToButton />
        </div>
      </div>
    </header>
  );
}
