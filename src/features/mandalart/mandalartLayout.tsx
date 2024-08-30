export default function MandalartLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="mandalrtWrap" className="grid flex-grow grid-cols-3 grid-rows-3 gap-1 p-2">
      {children}
    </div>
  );
}
