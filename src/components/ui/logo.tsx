import Link from 'next/link';
import Image from 'next/image';

type Props = {
  href: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
};

export default function Logo(props: Props) {
  const { href, imgSrc, imgAlt, imgWidth, imgHeight } = props;

  return (
    <Link href={href} className="relative w-6 rounded-full border-2" rel="noopener noreferrer">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
      />
    </Link>
  );
}
