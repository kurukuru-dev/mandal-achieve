'use client';
import { useEffect } from 'react';

export default function BeforeUnloadWarning() {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = ''; // Chromeでは必要
    };

    // IOSではbeforeunloadイベントがサポートされていないので、pageHideやunloadイベントを使うべきだが、本アプリはPC向けなので除外
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
}
