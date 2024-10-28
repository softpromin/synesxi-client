import Link from 'next/link';
import Image from 'next/image';

interface ItemProps {
  isToken: boolean,
  id: string,
  name: string,
  comment: string,
  price: string,
  change: string,
}

const Card: React.FC<ItemProps> = ({ isToken, id, name, comment, price, change }) => {
  const prefix = isToken ? '/tokens/' : '/dapps/';

  return (
    <Link href={prefix + id} className='bg-card-item rounded-md p-6 w-full'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <Image
            src={`/tokens/solana.png`}
            alt={id}
            width={44}
            height={44}
          />
          <div className='ml-5'>
            <div>{name}</div>
            <div className='text-custom-gray text-sm'>{comment}</div>
          </div>
        </div>
        <div>
          <Image
            src='/arrow-up.png'
            alt='arrow-up'
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className='flex items-center justify-between mt-5'>
        <div>
          <div>${price}</div>
          <div className='mt-3 text-custom-green'>{change}%</div>
        </div>
        <div>
          <Image
            src='/graph.png'
            alt='graph'
            width={111}
            height={46.5}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;