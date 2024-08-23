import type { Metadata } from 'next';
import { Poppins, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-poppins'
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-noto-sans-jp'
});

export const metadata: Metadata = {
  title: 'mandalAchieve',
  description:
    'マンダラートを使って「アイデアの発想」や「目標達成」をサポートするアプリ'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${poppins.variable} ${notoSansJP.variable} bg-secondary`}
      >
        <div className="h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
