import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <LoaderCircle className="w-12 h-12 text-primary animate-spin" />
    </div>
  );
}
