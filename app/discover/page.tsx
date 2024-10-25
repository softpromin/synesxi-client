export default function Discover() {
  return (
    <div className='flex w-full'>
      <div className='flex flex-col max-w-3/5 w-full'>
        <div className='text-[40px] font-medium'>Discover</div>
        <div className='opacity-80 text-[15px] font-medium'>Experience more in the decentralized web</div>

        <div className='bg-card-body rounded-md flex flex-col mt-7 px-[13px] pt-[22px] pb-[24px]'>
          <div className='flex justify-between items-center'>
            <div className="text-[25px] font-medium font-['DM Sans']">Recommended for you</div>
            <div className='w-[84px] h-7 bg-card-item flex items-center justify-center'>
              <button className="text-xs font-semibold font-['Nunito Sans']">View more</button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full bg-card-body ml-[31px] rounded-md pt-[23px] px-[30px]'>
        <div className="bg-gradient-to-r from-[#3F97FF] to-[#F402F9] bg-clip-text text-transparent text-[21px] font-semibold font-['Nunito Sans'] tracking-wide ml-[19px]">New Arrivals</div>
      </div>
    </div>
  );
}