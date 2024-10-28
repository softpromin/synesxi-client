'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Table() {
    const [activeTab, setActiveTab] = useState('Newly Listed');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
    const data = [
        { rank: 1, name: 'Tether', marketCap: '$3.560M', price: '$3.00', change: '+12.00%', volume: '$65.20M', chart: '/chart.svg' },
        { rank: 2, name: 'Radium', marketCap: '$3.560M', price: '$3.00', change: '+12.00%', volume: '$65.20M', chart: '/chart.svg' },
        { rank: 3, name: 'Maga Trump', marketCap: '$3.560M', price: '$3.00', change: '+12.00%', volume: '$65.20M', chart: '/chart.svg' },
        { rank: 4, name: 'MYRO', marketCap: '$3.560M', price: '$3.00', change: '+12.00%', volume: '$65.20M', chart: '/chart.svg' },
        { rank: 5, name: 'MEW', marketCap: '$3.560M', price: '$3.00', change: '+12.00%', volume: '$65.20M', chart: '/chart.svg' },
        { rank: 6, name: 'Helium HNT', marketCap: '$3.560M', price: '$3.00', change: '+12.00%', volume: '$65.20M', chart: '/chart.svg' },
        { rank: 7, name: 'Chainlink', marketCap: '$3.560M', price: '$3.00', change: '+12.00%', volume: '$65.20M', chart: '/chart.svg' },
        { rank: 8, name: 'Solana', marketCap: '$3.560M', price: '$3.00', change: '+12.00%', volume: '$65.20M', chart: '/chart.svg' },
    ];

    const tabs = ['Newly Listed', 'Hot Tokens', 'Top Gainers', 'Top Losers', 'Fear Index'];

    return (
        <div className="bg-gray-900 rounded-md p-6 space-y-6">
            <div className="flex space-x-4 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-black text-white' : 'bg-gray-800 text-gray-400'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-400">
                    <thead className="bg-gray-800 text-xs uppercase text-gray-500">
                        <tr>
                            <th className="px-4 py-2 text-center">Coin</th>
                            <th className="px-4 py-2">
                                <button className="flex items-center space-x-1">
                                    <span>Market Cap</span>
                                    <span className="text-xs">⌃</span>
                                    <span>ⓘ</span>
                                </button>
                            </th>
                            <th className="px-4 py-2">
                                <button className="flex items-center space-x-1">
                                    <span>Coin Price</span>
                                    <span className="text-xs">⌃</span>
                                    <span>ⓘ</span>
                                </button>
                            </th>
                            <th className="px-4 py-2">
                                <button className="flex items-center space-x-1">
                                    <span>Change</span>
                                    <span className="text-xs">⌃</span>
                                    <span>ⓘ</span>
                                </button>
                            </th>
                            <th className="px-4 py-2">
                                <button className="flex items-center space-x-1">
                                    <span>24h Volume</span>
                                    <span className="text-xs">⌃</span>
                                    <span>ⓘ</span>
                                </button>
                            </th>
                            <th className="px-4 py-2">Chart</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((token) => (
                            <tr key={token.rank} className="border-b border-gray-800">
                                <td className="px-4 py-3 flex items-center space-x-2">
                                    <span className="text-gray-500">{token.rank}</span>
                                    <span>{token.name}</span>
                                </td>
                                <td className="px-4 py-3">{token.marketCap}</td>
                                <td className="px-4 py-3">{token.price}</td>
                                <td className="px-4 py-3 text-green-400">{token.change}</td>
                                <td className="px-4 py-3">{token.volume}</td>
                                <td className="px-4 py-3">
                                    <Image
                                        src='/chart.png'
                                        alt='chart'
                                        width={40}
                                        height={17.38}
                                    />
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <button className="text-gray-400 hover:text-white">⋮</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center text-gray-400 text-xs mt-4">
                <div className='w-60'>Showing 1 to 10 of 4769 results</div>
                <div className="w-full flex items-center justify-center space-x-2">
                    <button className="px-2 py-1 bg-gray-800 rounded text-gray-500">‹</button>
                    <button className="px-2 py-1 bg-gray-800 rounded text-gray-500">1</button>
                    <button className="px-2 py-1 bg-gray-800 rounded text-gray-500">2</button>
                    <button className="px-2 py-1 bg-gray-800 rounded text-gray-500">3</button>
                    <span>...</span>
                    <button className="px-2 py-1 bg-gray-800 rounded text-gray-500">30</button>
                    <button className="px-2 py-1 bg-purple-600 rounded text-white">›</button>
                </div>
            </div>
        </div>
    );
}