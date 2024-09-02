'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRightLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MODE from '@/constants/mode';

export default function ToggleModeButton() {
  const router = useRouter();
  const currentMode = useSearchParams().get('mode');

  const handleToggleMode = () => {
    const isCreateMode = currentMode === MODE.CREATE;

    if (isCreateMode) {
      router.push(`/mandalart?mode=${MODE.ACHIVE}`);
    } else {
      router.push(`/mandalart?mode=${MODE.CREATE}`);
    }
  };

  return (
    <Button variant="accent" size="icon" onClick={handleToggleMode}>
      <ArrowRightLeft />
    </Button>
  );
}
