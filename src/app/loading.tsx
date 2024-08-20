import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}
