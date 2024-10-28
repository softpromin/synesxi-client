import Card from "./Card";

export default function Cards() {
    const items = [
        { id: 'solana', name: 'Tether', comment: 'BTC', price: '52,291', change: '+0.25' },
        { id: 'solana', name: 'Tether', comment: 'BTC', price: '52,291', change: '+0.25' },
        { id: 'solana', name: 'Tether', comment: 'BTC', price: '52,291', change: '+0.25' },
        { id: 'solana', name: 'Tether', comment: 'BTC', price: '52,291', change: '+0.25' },
    ];

    return (
        <div className="flex justify-between space-x-4">
            {items.map((item, index) => (
                <Card key={index} isToken={true} id={item.id} name={item.name} comment={item.comment} price={item.price} change={item.change} />
            ))}
        </div>
    );
}