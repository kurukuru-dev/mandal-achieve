import CustomerInput from '@/components/customerInput';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="relative">
      <main className="flex h-full min-h-screen flex-col items-center justify-center">
        <h1 className="text-6xl text-primary">MandalAchive</h1>
        <h2 className="text-xl text-primary">
          マンダラートを使用して「アイデアの創造」「目標達成」をサポートするアプリ
        </h2>
        <CustomerInput />
      </main>
      <Footer />
    </div>
  );
}
