import Link from 'next/link';
import Image from 'next/image';

interface ItemProps {
  id: string,
  name: string,
  usd: string,
  change: string,
  price: string
}

const NewArrivalItem: React.FC<ItemProps> = ({ id, name, usd, change, price }) => {
  return (
    <Link href={`/tokens/${id}`}>
      <div className='flex justify-between items-center px-6 py-3 border border-gray-600 rounded cursor-pointer hover:border-white'>
        <div className='flex'>
          <div className='flex items-center'>
            <Image
              src={`/tokens/${id}.png`}
              alt={id}
              width={44}
              height={44}
            />
          </div>
          <div className='flex flex-col ml-4'>
            <div>{name}</div>
            <div className='text-sm text-custom-gray mt-3'>{usd}</div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className={`text-xs ${parseFloat(change) < 0 ? 'text-custom-orange' : 'text-custom-green'}`}>{change}%</div>
          <div className='text-sm mt-3'>{price}</div>
        </div>
      </div>
    </Link>
  );
};

export default NewArrivalItem;