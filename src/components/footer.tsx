import Link from 'next/link';
import Logo from '@/components/ui/logo';

export default function Footer() {
  return (
    <footer className="h-17 flex min-w-full flex-col items-center gap-y-1 bg-primary p-2 text-white">
      <p className="h-6">© 2024 kurukuru-dev</p>
      <div className="flex h-6 justify-center gap-x-16">
        <nav>
          <Link href="/disclaimer" className="underline-offset-2 hover:underline">
            免責事項
          </Link>
          <Link href="/faq" className="ml-4 underline-offset-2 hover:underline">
            FAQ
          </Link>
        </nav>
        <div>
          <Logo
            href="https://twitter.com/kurukuru_dev"
            imgSrc="/x.svg"
            imgAlt="X(旧Twitter)のロゴ"
            imgWidth={11.736}
            imgHeight={12}
          />
          <Logo
            href="https://github.com/kurukuru-dev/mandal-achieve"
            imgSrc="/github.svg"
            imgAlt="GitHubのロゴ"
            imgWidth={15.3}
            imgHeight={15}
            className="ml-4"
          />
        </div>
      </div>
    </footer>
  );
}
