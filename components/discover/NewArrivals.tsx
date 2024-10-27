import NewArrivalItem from "./NewArrivalItem";

export default function NewArrivals() {
    const newArrivals = [
        { id: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40', price: '0.12543 ETH' },
        { id: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '+13.40', price: '0.12543 ETH' },
        { id: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40', price: '0.12543 ETH' },
        { id: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40', price: '0.12543 ETH' },
        { id: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40', price: '0.12543 ETH' },
    ];

    return (
        <div>
            <div className="w-fit bg-custom-gradient bg-clip-text text-transparent text-2xl font-semibold ml-5">New Arrivals</div>
            <div className="flex flex-col mt-4 space-y-2">
                {newArrivals.map((item, index) => <NewArrivalItem key={index} id={item.id} name={item.name} usd={item.usd} change={item.change} price={item.price} />)}
            </div>
        </div>
    );
}