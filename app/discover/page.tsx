import NewArrivalItem from "@/components/discover/NewArrivalItem";
import TopItem from "@/components/discover/TopItem";

export default function Discover() {
  const newArrivals = [
    { symbol: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40', price: '0.12543 ETH' },
    { symbol: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '+13.40', price: '0.12543 ETH' },
    { symbol: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40', price: '0.12543 ETH' },
    { symbol: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40', price: '0.12543 ETH' },
    { symbol: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40', price: '0.12543 ETH' },
  ];

  const topGainers = [
    { symbol: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '+13.40' },
    { symbol: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '+13.40' },
    { symbol: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '+13.40' },
    { symbol: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '+13.40' },
    { symbol: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '+13.40' },
  ];

  const topLosers = [
    { symbol: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40' },
    { symbol: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40' },
    { symbol: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40' },
    { symbol: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40' },
    { symbol: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40' },
  ];

  return (
    <div className='flex w-full'>
      <div className='flex flex-col max-w-3/5 w-full'>
        <div className='text-4xl'>Discover</div>
        <div className='text-custom-gray'>Experience more in the decentralized web</div>

        <div className='bg-card-body rounded-md flex flex-col mt-7 px-3 py-6'>
          <div className='flex justify-between items-center'>
            <div className="text-2xl">Recommended for you</div>
            <div className='w-20 h-7 bg-card-item flex items-center justify-center'>
              <button className="text-xs font-semibold">View more</button>
            </div>

          </div>
        </div>
      </div>
      <div className='flex flex-col w-full bg-card-body rounded-md ml-8 px-8 py-6'>
        <div className="w-fit bg-custom-gradient bg-clip-text text-transparent text-2xl font-semibold ml-5">New Arrivals</div>
        <div className="flex flex-col mt-4 space-y-2">
          {newArrivals.map((item, index) => <NewArrivalItem key={index} symbol={item.symbol} name={item.name} usd={item.usd} change={item.change} price={item.price} />)}
        </div>

        <div className="mt-10">
          <div className="flex space-x-3">
            <GradientBorder>
              <div className="bg-card-body rounded-md px-8 py-3 text-1xl font-semibold">Top Gainers</div>
            </GradientBorder>
            <div className="bg-card-item rounded-md px-8 py-3 text-1xl font-semibold">Top Losers</div>
          </div>
        </div>
        <div className="flex flex-col mt-4 space-y-2">
          {topGainers.map((item, index) => <TopItem key={index} rank={index + 1} symbol={item.symbol} name={item.name} usd={item.usd} change={item.change} />)}
        </div>
      </div>
    </div>
  );
}

const GradientBorder = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-custom-gradient p-[1px] rounded-md">
      {children}
    </div>
  );
};