import MODE from '@/constants/mode';
import CustomerInput from '@/components/customerInput';
import HowToButton from '@/components/howToButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-7xl text-primary">MandalAchive</h1>
      <h2 className="text-xl text-primary">
        マンダラートを使用して「{MODE.CREATE_IDEA_JP}」「{MODE.ACHIVE_GOAL_JP}
        」をサポートするアプリ
      </h2>
      <div className="mt-6 flex items-center gap-x-2">
        <CustomerInput />
        <HowToButton />
      </div>
    </main>
  );
}
