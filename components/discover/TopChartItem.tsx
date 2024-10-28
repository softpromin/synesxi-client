import Link from 'next/link';
import Image from 'next/image';

interface ItemProps {
  rank: number,
  id: string,
  name: string,
}

const TopChartItem: React.FC<ItemProps> = ({ rank, id, name }) => {
  return (
    <Link href={`/dapps/${id}`}>
      <div className='relative flex flex-col space-y-1 justify-center items-center bg-card-item rounded-md p-2 border border-card-item hover:border-white'>
        <div className='w-9 absolute top-0 left-0 bg-[#E91DF5] rounded-tl-md rounded-br-md text-sm flex items-center justify-center'>
          <div>#{rank}</div>
        </div>
        <Image
          src={`/dapps/${id}.png`}
          alt={id}
          width={140}
          height={101}
        />
        <div className='text-xs'>{name}</div>
        <div className='text-[8px] text-custom-gray'>More details of token</div>
      </div>
    </Link>
  );
}

export default TopChartItem;