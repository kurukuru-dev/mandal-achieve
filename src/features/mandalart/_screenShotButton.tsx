'use client';

import { Camera } from 'lucide-react';
import domtoimage from 'dom-to-image';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';

export default function ScreenShotButton() {
  const { toast } = useToast();

  const handleScreenShot = () => {
    const target = document.getElementById('mandalrtWrap');
    if (!target) return null;

    domtoimage
      .toSvg(target)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'mandalart.svg';
        link.href = dataUrl;
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
