'use client';

import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';

export default function ScreenShotButton() {
  const { toast } = useToast();

  const handleScreenShot = () => {
    const target = document.getElementById('mandalrtWrap');
    if (!target) return null;
  };

  return (
    <Button variant="accent" size="icon" onClick={handleScreenShot}>
      <Camera />
    </Button>
  );
}
