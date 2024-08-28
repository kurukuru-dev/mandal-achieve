export default function MandalartLayout({ children }: { children: React.ReactNode }) {
  return <div className="grid flex-grow grid-cols-3 grid-rows-3 gap-1">{children}</div>;
}
