'use client';

import { ClipboardDocumentIcon, InformationCircleIcon, ShareIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon } from '@heroicons/react/24/solid';

export default function Overview() {
    return (
        <div className="flex space-x-4">
            <div className="bg-card-item rounded-lg p-4 w-1/2 space-y-4">
                <div>
                    <h2 className="text-2xl font-bold text-white">Tether</h2>
                    <p className="text-gray-400">$3,755.08 <span className="text-green-500">+1.58%</span></p>
                </div>
                <div className="flex space-x-2">
                    <div className="bg-gray-700 px-3 py-1 rounded text-sm">Created <span className="text-custom-gray">21-05-2024</span></div>
                    <div className="bg-gray-700 px-3 py-1 rounded text-sm">Dex <span className="text-custom-gray">Uniswap</span></div>
                </div>
                <div className="flex space-x-2">
                    <button className="bg-custom-pink w-3/5 px-4 py-2 rounded text-white text-sm font-semibold flex items-center justify-center space-x-2">
                        <ClipboardDocumentIcon className='w-5 h-5' />
                        <span>0x1fA..6E17</span>
                    </button>
                    <button className="bg-gray-700 w-2/5 px-4 py-2 rounded text-gray-300 text-sm font-semibold">Socials</button>
                </div>
            </div>

            <div className="bg-card-item rounded-lg p-4 w-1/4 space-y-4 relative">
                <div className="flex space-x-2 justify-end text-gray-400">
                    <InformationCircleIcon className="h-5 w-5" />
                    <ShareIcon className="h-5 w-5" />
                    <BookmarkIcon className="h-5 w-5 text-custom-green" />
                </div>
                <h3 className="text-lg font-bold text-white">Tether Token</h3>
                <p className="text-gray-500 text-sm">
                    App description in 3 rows maximum. Then it goes to "…"
                </p>
                <div className="flex space-x-2">
                    <span className="bg-gray-700 px-3 py-1 rounded text-gray-300 text-xs">Holders: 40000</span>
                    <button className="bg-gray-700 px-3 py-1 rounded text-gray-300 text-xs flex items-center space-x-1">
                        <span>Website</span>
                        <ArrowUpRightIcon className='w-3 h-3' />
                    </button>
                </div>
            </div>

            <div className="bg-card-item rounded-lg p-4 w-1/4 space-y-4 text-center">
                <div className="text-gray-500 text-sm">MarketCap</div>
                <div className="text-white text-2xl">$12,594k</div>
                <hr className="border-gray-700" />
                <div className="text-gray-500 text-sm">Liquidity</div>
                <div className="text-white text-2xl">$12,594m</div>
            </div>
        </div>
    );
}