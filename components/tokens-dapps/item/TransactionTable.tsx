'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon, ClipboardDocumentIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

export default function TransactionTable() {
    const [activeTab, setActiveTab] = useState('Transactions');
    
    const data = [
        { date: '1min ago', type: 'Buy', tokens: '0.0593', usd: '$3.00', sol: '125.56', price: '$0.4472', maker: '51075D', transactionIcon: '/buy-icon.png' },
        { date: '2min ago', type: 'Buy', tokens: '0.0593', usd: '$3.00', sol: '125.56', price: '$0.4472', maker: '51075D', transactionIcon: '/buy-icon.png' },
        { date: '3min ago', type: 'Sell', tokens: '0.0593', usd: '$3.00', sol: '125.56', price: '$0.4472', maker: '51075D', transactionIcon: '/sell-icon.png' },
        { date: '4min ago', type: 'Sell', tokens: '0.0593', usd: '$3.00', sol: '125.56', price: '$0.4472', maker: '51075D', transactionIcon: '/sell-icon.png' },
        { date: '5min ago', type: 'Buy', tokens: '0.0593', usd: '$3.00', sol: '125.56', price: '$0.4472', maker: '51075D', transactionIcon: '/buy-icon.png' },
        { date: '6min ago', type: 'Sell', tokens: '0.0593', usd: '$3.00', sol: '125.56', price: '$0.4472', maker: '51075D', transactionIcon: '/sell-icon.png' },
        { date: '7min ago', type: 'Buy', tokens: '0.0593', usd: '$3.00', sol: '125.56', price: '$0.4472', maker: '51075D', transactionIcon: '/buy-icon.png' },
        { date: '8min ago', type: 'Sell', tokens: '0.0593', usd: '$3.00', sol: '125.56', price: '$0.4472', maker: '51075D', transactionIcon: '/sell-icon.png' },
    ];

    const tabs = ['Transactions', 'Top Holders', 'Top Traders', 'Buyers', 'Sellers'];

    return (
        <div className="bg-card-body rounded-md px-6 pt-8 pb-16">
            <div className='text-3xl'>Buy/Sell Transactions</div>
            <div className="flex space-x-4 mt-10">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-xs px-4 py-2 rounded ${activeTab === tab ? 'bg-black text-white' : 'bg-card-item text-custom-gray'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="overflow-x-auto mt-10">
                <table className="min-w-full text-sm text-left">
                    <thead className="text-xs text-custom-gray border-t border-b border-gray-600">
                        <tr>
                            <th className="px-4 py-4">Date</th>
                            <th className="px-4 py-4">
                                <button className="flex items-center space-x-1">
                                    <span>Type</span>
                                    <ChevronUpIcon className='w-3' />
                                    <span>ⓘ</span>
                                </button>
                            </th>
                            <th className="px-4 py-4">
                                <button className="flex items-center space-x-1">
                                    <span>Tokens</span>
                                    <ChevronUpIcon className='w-3' />
                                    <span>ⓘ</span>
                                </button>
                            </th>
                            <th className="px-4 py-4">
                                <button className="flex items-center space-x-1">
                                    <span>USD</span>
                                    <ChevronUpIcon className='w-3' />
                                    <span>ⓘ</span>
                                </button>
                            </th>
                            <th className="px-4 py-4">
                                <button className="flex items-center space-x-1">
                                    <span>SOL</span>
                                    <ChevronUpIcon className='w-3' />
                                    <span>ⓘ</span>
                                </button>
                            </th>
                            <th className="px-4 py-4">Price</th>
                            <th className="px-4 py-4">Maker</th>
                            <th className="px-4 py-4">Transactions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((transaction, index) => (
                            <tr key={index} className={`border-b border-gray-700 ${transaction.type === 'Buy' ? 'text-green-400' : 'text-red-400'}`}>
                                <td className="px-4 py-3 text-gray-500">{transaction.date}</td>
                                <td className={`px-4 py-3 font-bold`}>
                                    <div className="flex items-center space-x-2">
                                        <span className={`w-2 h-2 rounded-full ${transaction.type === 'Buy' ? 'bg-green-400' : 'bg-red-400'}`}></span>
                                        <span>{transaction.type}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    {transaction.tokens}
                                    <div className="text-xs">Stream</div>
                                </td>
                                <td className="px-4 py-3">{transaction.usd}</td>
                                <td className="px-4 py-3">{transaction.sol}</td>
                                <td className="px-4 py-3">{transaction.price}</td>
                                <td className="px-4 py-3">{transaction.maker}</td>
                                <td className="px-4 py-3 flex justify-center">
                                    <ClipboardDocumentIcon className='w-5' />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center text-gray-400 text-xs mt-10">
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