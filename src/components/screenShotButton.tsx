'use client';

import html2canvas from 'html2canvas';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ScreenShotButton() {
  const handleScreenShot = () => {
    html2canvas(document.getElementById('mandalrtWrap') as HTMLElement).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'mandalart.png';
      link.click();
    });
  };

  return (
    <Button variant="accent" size="icon" onClick={handleScreenShot}>
      <Camera />
    </Button>
  );
}
