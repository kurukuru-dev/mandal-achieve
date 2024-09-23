import { TriangleAlert } from 'lucide-react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ValidationText(props: Props) {
  const { children, className } = props;

  return (
    <div className={`flex items-center gap-x-1 ${className}`}>
      <TriangleAlert className="h-5 w-5 text-caution" />
      <p className="text-sm text-caution">{children}</p>
    </div>
  );
}
