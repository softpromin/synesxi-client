'use client';

import { useState } from "react";
import TopItem from "./TopItem";

import GradientBorder from "../GradientBorder";

export default function TopItems() {
    const topGainers = [
        { id: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '+13.40' },
        { id: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '+13.40' },
        { id: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '+13.40' },
        { id: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '+13.40' },
        { id: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '+13.40' },
    ];

    const topLosers = [
        { id: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40' },
        { id: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40' },
        { id: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40' },
        { id: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40' },
        { id: 'solana', name: 'Allbridge', usd: '$3,245.03', change: '-13.40' },
    ];

    const [isGainers, setIsGainers] = useState(true);

    const getButton = (active: boolean, caption: string, handler: VoidFunction) => {
        if (active) {
            return (
                <div className="w-40">
                    <GradientBorder>
                        <button onClick={handler} className="w-full bg-card-body rounded-md px-8 py-3 font-semibold">{caption}</button>
                    </GradientBorder>
                </div>
            );
        } else {
            return (
                <button onClick={handler} className="w-40 bg-card-item rounded-md px-8 py-3 font-semibold">{caption}</button>
            );
        }
    };

    return (
        <div className="h-full">
            <div className="flex space-x-3">
                {getButton(isGainers, 'Top Gainers', () => setIsGainers(true))}
                {getButton(!isGainers, 'Top Losers', () => setIsGainers(false))}
            </div>

            <div className="flex flex-col mt-4 space-y-2 pb-3">
                {(isGainers ? topGainers : topLosers).map((item, index) => <TopItem key={index} rank={index + 1} id={item.id} name={item.name} usd={item.usd} change={item.change} />)}
            </div>
        </div>
    );
}