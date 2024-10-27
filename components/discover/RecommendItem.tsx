import Link from 'next/link';
import Image from 'next/image';

interface ItemProps {
    id: string,
    name: string,
}

const RecommendItem: React.FC<ItemProps> = ({ id, name }) => {
    return (
        <Link href={`/dapp/${id}`}>
            <div className='flex flex-col space-y-1 justify-center items-center bg-card-item rounded-md p-2 border border-card-item hover:border-white'>
                <Image
                    src={`/dapp/${id}.png`}
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

export default RecommendItem;