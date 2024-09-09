import MODE from '@/constants/mode';
import HowToButton from '@/components/howToButton';
import { UserInput } from '@/features/userInput';

export default function Home() {
  return (
    <main className="flex w-full flex-grow flex-col items-center justify-center">
      <h1 className="text-7xl text-primary">MandalAchive</h1>
      <h2 className="text-xl text-primary">
        マンダラートを使用して「{MODE.CREATE_IDEA_JP}」「{MODE.ACHIVE_GOAL_JP}」をサポートするアプリ
      </h2>
      <div className="mt-7 flex w-full items-center justify-center gap-x-2">
        <UserInput />
        <HowToButton />
      </div>
    </main>
  );
}
