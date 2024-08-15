import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="h-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-primary text-6xl">MandalAchive</h1>
      <h2 className="text-primary text-xl">
        マンダラートを使用して「アイデアの創造」「目標達成」をサポートするアプリ
      </h2>
      <select name="mode" id="">
        <option value="create">アイデアの創造</option>
        <option value="achieve">目標達成</option>
      </select>
      <input type="text" placeholder="メインテーマを入力" />
      <Button>スタート</Button>
      <button>使い方</button>
      <footer>
        <p>© 2024 Your Name. All rights reserved.</p>
        <nav className="flex justify-center space-x-4">
          <a href="/privacy-policy" className="hover:underline">
            プライバシーポリシー
          </a>
          <a href="/terms-of-service" className="hover:underline">
            利用規約
          </a>
          <a href="/contact" className="hover:underline">
            お問い合わせ
          </a>
        </nav>
        <p>SNS</p>
        <p className="mt-2 text-sm">Version 1.0.0</p>
      </footer>
    </main>
  );
}
