import Link from 'next/link';
import Image from 'next/image';

interface ItemProps {
  rank: number,
  id: string,
  name: string,
  usd: string,
  change: string
}

const TopItem: React.FC<ItemProps> = ({ rank, id, name, usd, change }) => {
  return (
    <Link href={`/token/${id}`}>
      <div className='flex justify-between items-center px-6 py-3 border border-gray-600 rounded cursor-pointer hover:border-white'>
        <div className='flex'>
          <div className='flex items-center'>
            <div>#{rank}</div>
            <Image
              src={`/token/${id}.png`}
              alt={id}
              width={44}
              height={44}
              className='ml-6'
            />
          </div>
          <div className='flex flex-col ml-4'>
            <div>{name}</div>
            <div className='text-sm text-custom-gray mt-3'>{usd}</div>
          </div>
        </div>
        <div className={`text-xs ${parseFloat(change) < 0 ? 'text-custom-orange' : 'text-custom-green'}`}>{change}%</div>
      </div>
    </Link>
  );
};

export default TopItem;