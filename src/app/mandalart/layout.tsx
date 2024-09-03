import BeforeUnloadWarning from '@/components/beforeUnloadWarning';

export default function MandlartLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <BeforeUnloadWarning />
    </>
  );
}
