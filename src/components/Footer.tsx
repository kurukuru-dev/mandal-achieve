import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 mx-auto w-full bg-primary p-2 text-sm text-white">
      <div className="flex flex-col gap-y-1 text-center">
        <p>© 2024 kurukuru-dev</p>
        <div className="flex h-6 justify-center gap-x-16">
          <nav>
            <Link
              href="/disclaimer"
              className="underline-offset-2 hover:underline"
            >
              免責事項
            </Link>
            <Link
              href="/faq"
              className="ml-4 underline-offset-2 hover:underline"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex h-6">
            <Link
              href="#"
              className="relative w-6 rounded-full border-2"
              rel="noopener noreferrer"
            >
              <Image
                src="/x.svg"
                alt="X(旧Twitter)のロゴ"
                width={11.736}
                height={12}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              />
            </Link>
            <Link
              href="https://github.com/kurukuru-dev/mandal-achieve"
              className="relative ml-4 w-6 rounded-full border-2"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.svg"
                alt="GitHubのロゴ"
                width={15.3}
                height={15}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
