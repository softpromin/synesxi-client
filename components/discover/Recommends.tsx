import RecommendItem from "./RecommendItem";

export default function Recommends() {
    const items = [
        { id: 'mean-finance', name: 'Mean Finance' },
        { id: 'mean-finance', name: 'Mean Finance' },
        { id: 'mean-finance', name: 'Mean Finance' },
        { id: 'mean-finance', name: 'Mean Finance' },
    ];

    return (
        <div className='bg-card-body rounded-md px-3 py-6 flex flex-col space-y-3'>
            <div className='flex justify-between items-center'>
                <div className="text-2xl">Recommended for you</div>
                <div className='w-20 h-7 bg-card-item flex items-center justify-center'>
                    <button className="text-xs font-semibold">View more</button>
                </div>
            </div>

            <div className="flex justify-between">
                {items.map((item, index) => <RecommendItem key={index} id={item.id} name={item.name} />)}
            </div>
        </div>
    );
}