import Image from 'next/image';

const TopBar = () => {
  return (
    <div className='bg-card-body w-full h-[84px] pt-[23px] pb-[6px] rounded-[5px] box-content flex items-center justify-between'>
      <div className='w-7/12 ml-[11px] pb-3 flex border-b border-[#DCDEE033]'>
        <Image
          src='/search.png'
          alt='search'
          width={24}
          height={24}
          className='ml-[9px] mr-[25px]'
        />
        <input type='text' placeholder='Search...' className='bg-inherit focus:outline-none' />
      </div>
      <div className='flex items-center'>
        <button className='w-36 h-[42px] mr-[31px] bg-custom-pink rounded-md'>
          Connect Wallet
        </button>
        <Image
          src='/notification.png'
          alt='notification'
          width={24}
          height={24}
        />
        <div className='relative mx-4'>
          <Image
            src='/avatar.png'
            alt='avatar'
            width={28}
            height={28}
          />
          <Image
            src='/wallet.png'
            alt='wallet'
            width={16}
            height={16}
            className='absolute -bottom-1 -right-1'
          />
        </div>
        <div className='flex flex-col'>
          <div className='text-sm font-bold leading-tight tracking-tight'>Username</div>
          <div className='text-[11px] font-normal leading-none tracking-tight'>profile ID</div>
        </div>
        <Image
          src='/arrow-down.png'
          alt='arrow-down'
          width={16}
          height={16}
          className='mx-4'
        />
      </div>
    </div>
  );
};

export default TopBar;