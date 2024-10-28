'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

export default function DAppTable() {
    const [activeTab, setActiveTab] = useState('Newly Listed');
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
        <div className="bg-card-body rounded-md px-6 pt-12 pb-20">
            <div className='text-2xl ml-4'>All DApps</div>

            <div className="flex space-x-4 mt-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-black text-white' : 'bg-card-item text-custom-gray'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="overflow-x-auto mt-4">
                <table className="min-w-full text-sm text-left">
                    <thead className="text-xs text-custom-gray border-t border-b border-gray-600">
                        <tr>
                            <th className="px-4 py-4 text-center">Name</th>
                            <th className="px-4 py-4">
                                <button className="flex items-center space-x-1">
                                    <span>Balance</span>
                                    <ChevronUpIcon className='w-3' />
                                    <span>ⓘ</span>
                                </button>
                            </th>
                            <th className="px-4 py-4">
                                <button className="flex items-center space-x-1">
                                    <span>UAW</span>
                                    <ChevronUpIcon className='w-3' />
                                    <span>ⓘ</span>
                                </button>
                            </th>
                            <th className="px-4 py-4">
                                <button className="flex items-center space-x-1">
                                    <span>UAW%</span>
                                    <ChevronUpIcon className='w-3' />
                                    <span>ⓘ</span>
                                </button>
                            </th>
                            <th className="px-4 py-4">
                                <button className="flex items-center space-x-1">
                                    <span>24h Volume</span>
                                    <ChevronUpIcon className='w-3' />
                                    <span>ⓘ</span>
                                </button>
                            </th>
                            <th className="px-4 py-4">24h UAW Chart</th>
                            <th className="px-4 py-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((token) => (
                            <tr key={token.rank} className="border-b border-gray-700 text-white">
                                <td className="px-4 py-3 flex items-center">
                                    <Image
                                        src='/favorite.png'
                                        alt='favorite'
                                        width={22}
                                        height={22}
                                    />
                                    <span className="text-gray-500 ml-3">{token.rank}</span>
                                    <span className='ml-6'>{token.name}</span>
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
                                    <button>…</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center text-gray-400 text-xs mt-12">
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