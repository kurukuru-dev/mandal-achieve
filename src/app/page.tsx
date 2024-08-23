import CustomerInput from '@/components/customerInput';
import HowToButton from '@/components/howToButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-7xl text-primary">MandalAchive</h1>
      <h2 className="text-xl text-primary">
        マンダラートを使用して「アイデアの発想」「目標達成」をサポートするアプリ
      </h2>
      <div className="mt-6 flex items-center gap-x-2">
        <CustomerInput />
        <HowToButton />
      </div>
    </main>
  );
}
