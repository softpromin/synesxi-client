import Image from 'next/image';

const Footer = () => {
  return (
    <div className='border-t border-[#31353f] flex flex-col mb-[56px]'>
      <div className='flex justify-between mx-[91.5px] mt-[142px] h-[233px]'>
        <div className='text-[#858585] flex flex-col mt-[84px]'>
          <div>Your Gateway to a better and seamless</div>
          <div>Web3 Experience</div>
        </div>
        <div className='w-[147px] flex flex-col space-y-3'>
          <div className='text-[#9E9E9E]'>
            Resources
          </div>
          <div>About Us</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
      </div>
      <div className='flex justify-between mx-[123.5px] mt-[11px] border-t border-[#31353f] pt-[33px] text-[#9E9E9E]'>
        <div>© 2024 Synesxi</div>
        <div className='flex space-x-6'>
          <Image
            src='/social/twitter.png'
            alt='twitter'
            width={24}
            height={22.5}
          />
          <Image
            src='/social/telegram.png'
            alt='telegram'
            width={30.4}
            height={24}
          />
          <Image
            src='/social/linkedin.png'
            alt='linkedin'
            width={24}
            height={24}
          />
          <Image
            src='/social/medium.png'
            alt='medium'
            width={54}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;