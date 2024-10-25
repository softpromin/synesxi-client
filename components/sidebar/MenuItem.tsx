'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
  target: string;
  caption: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ target, caption }) => {
  const pathname = usePathname();

  const active = pathname === `/${target}`;

  return (
    <div className='mx-auto'>
      <Link href={target} className={`w-[200px] h-[44px] flex items-center ${active ? 'bg-custom-pink' : ''}`}>
        <div className='ml-4 mr-3'>
          <Image
            src={`/sidebar/${target}.png`}
            alt={target}
            width={16}
            height={16}
          />
        </div>
        <div className='text-sm font-bold leading-tight tracking-tight'>
          {caption}
        </div>
      </Link>
    </div>
  );
};

export default MenuItem;