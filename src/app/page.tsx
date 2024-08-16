import CustomerInput from '@/components/CustomerInput';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <main className="h-full min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-primary text-6xl">MandalAchive</h1>
        <h2 className="text-primary text-xl">
          マンダラートを使用して「アイデアの創造」「目標達成」をサポートするアプリ
        </h2>
        <CustomerInput />
        <Footer />
      </main>
    </div>
  );
}
