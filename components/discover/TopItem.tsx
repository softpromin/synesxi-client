import Image from 'next/image';

interface ItemProps {
  rank: number,
  symbol: string,
  name: string,
  usd: string,
  change: string
}

const TopItem: React.FC<ItemProps> = ({ rank, symbol, name, usd, change }) => {
  return (
    <div className='flex justify-between items-center px-6 py-3 border border-gray-600 rounded'>
      <div className='flex'>
        <div className='flex items-center'>
          <div>#{rank}</div>
          <Image
            src={`/coin/${symbol}.png`}
            alt={symbol}
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
  );
};

export default TopItem;