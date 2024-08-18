import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/components/ui/logo';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 mx-auto w-full bg-primary p-2 text-sm text-white">
      <div className="flex flex-col gap-y-1 text-center">
        <p className="h-6">© 2024 kurukuru-dev</p>
        <div className="flex h-6 justify-center gap-x-16">
          <nav className="flex gap-x-4">
            <Link
              href="/disclaimer"
              className="underline-offset-2 hover:underline"
            >
              免責事項
            </Link>
            <Link href="/faq" className="underline-offset-2 hover:underline">
              FAQ
            </Link>
          </nav>
          <div className="flex h-6 gap-x-4">
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
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
