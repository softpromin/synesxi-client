'use client';

import { ChevronRightIcon, ArrowsPointingInIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const tokens = [
    {
        name: 'Compound',
        price: '$27,308.00',
        change: '+8250%',
        changeColor: 'text-green-500',
        background: 'bg-gradient-to-r from-green-400 to-green-600',
        iconSrc: '/path/to/compound-icon.png',
    },
    {
        name: 'Shibalnu',
        price: '$0.0008827',
        change: '+660910%',
        changeColor: 'text-green-500',
        background: 'bg-black',
        iconSrc: '/path/to/shibalnu-icon.png',
    },
    {
        name: 'ThetaFuel',
        price: '$0.04276',
        change: '-151%',
        changeColor: 'text-red-500',
        background: 'bg-black',
        iconSrc: '/path/to/thetafuel-icon.png',
    },
];

const SimilarTokens = () => {
    return (
        <div className="bg-card-body p-8 rounded-lg text-white space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Similar Tokens</h2>
                <button className="border border-gray-600 text-sm px-4 py-1 rounded-md flex items-center space-x-1">
                    <span className='py-1'>All time</span>
                    <ChevronDownIcon className="h-4 w-4" />
                </button>
            </div>

            <div className="flex space-x-4">
                {tokens.map((token, index) => (
                    <div key={index} className={`bg-[url('/token-card.png')] bg-cover bg-center p-6 rounded-lg w-1/3 relative`}>
                        <ArrowsPointingInIcon className="h-5 w-5 absolute top-4 right-4 text-white opacity-70 cursor-pointer" />

                        <div className="flex flex-col space-y-4">
                            <Image src={'/tokens/solana.png'} alt={token.name} width={30} height={30} className="rounded-full" />
                            <div className="text-lg font-semibold">{token.name}</div>
                        </div>
                        <p className="text-2xl font-bold mt-2">{token.price}</p>
                        <div className={`text-lg ${token.changeColor} mt-4`}>
                            {token.change}
                            <span className="text-xs text-gray-400 ml-4">All time</span>
                        </div>

                        {index === 2 && (
                            <div className='absolute h-full flex items-center top-0 justify-end right-4'>
                                <div className="bg-white p-2 rounded-full w-fit">
                                    <ChevronRightIcon className="h-5 w-5 text-black" />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimilarTokens;