import MODE from '@/constants/mode';
import Header from '@/components/header';

export default function Create() {
  return (
    <div className="h-screen">
      <Header mode={MODE.CREATE} />
    </div>
  );
}
