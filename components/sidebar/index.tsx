import Link from 'next/link';
import Image from 'next/image';

import MenuItem from './MenuItem';

const SideBar = () => {
  return (
    <div className='max-w-[216px] w-full h-[826px] flex flex-col bg-main-gradient border-r border-r-[#DCDEE033]'>
      <div className='h-[154px] flex items-center justify-center'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='logo'
            width={166}
            height={44}
          />
        </Link>
      </div>

      <div className='border-t border-t-[#DCDEE033] flex flex-col space-y-2'>
        <MenuItem target='discover' caption='Discover' />
        <MenuItem target='tokens' caption='Tokens' />
        <MenuItem target='dapps' caption='DApps' />
        <MenuItem target='settings' caption='Settings' />
        <MenuItem target='portfolio' caption='Portfolio' />
      </div>

      <div className='border-t border-t-[#DCDEE033] flex flex-col mt-auto mb-4'>
        <MenuItem target='events' caption='Events' />
        <MenuItem target='help' caption='Need help?' />
      </div>
    </div>
  );
};

export default SideBar;