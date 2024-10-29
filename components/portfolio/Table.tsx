'use client';

import Image from 'next/image';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

export default function Table() {
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

    return (
        <div className="bg-card-body rounded-md px-6 pt-6 pb-12">
            <div className="flex space-x-4 mt-1">
                <button className='bg-card-item rounded px-4 py-2'>
                    Add New +
                </button>
            </div>

            <div className="overflow-x-auto mt-6">
                <table className="min-w-full text-sm text-left">
                    <thead className="text-xs text-custom-gray border-t border-b border-gray-600">
                        <tr>
                            <th className="px-4 py-4 text-center">Coin</th>
                            <th className="px-4 py-4">
                                <button className="flex items-center space-x-1">
                                    <span>Market Cap</span>
                                    <ChevronUpIcon className='w-3' />
                                    <span>ⓘ</span>
                                </button>
                            </th>
                            <th className="px-4 py-4">
                                <button className="flex items-center space-x-1">
                                    <span>Coin Price</span>
                                    <ChevronUpIcon className='w-3' />
                                    <span>ⓘ</span>
                                </button>
                            </th>
                            <th className="px-4 py-4">
                                <button className="flex items-center space-x-1">
                                    <span>Change</span>
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
                            <th className="px-4 py-4">Chart</th>
                            <th className="px-4 py-4">Actions</th>
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
        </div>
    );
}