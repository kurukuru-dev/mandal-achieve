'use client';

import html2canvas from 'html2canvas';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';

export default function ScreenShotButton() {
  const { toast } = useToast();

  const handleScreenShot = () => {
    html2canvas(document.getElementById('mandalrtWrap') as HTMLElement)
      .then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'mandalart.png';
        link.click();
      })
      .then(() => {
        toast({ title: 'スクリーンショットを保存しました' });
      })
      .catch((e) => {
        toast({ title: 'スクリーンショットの保存に失敗しました', variant: 'failed' });
        console.error(e);
      });
  };

  return (
    <Button variant="accent" size="icon" onClick={handleScreenShot}>
      <Camera />
    </Button>
  );
}
