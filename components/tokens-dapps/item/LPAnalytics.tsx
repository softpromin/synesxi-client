'use client';

import { Doughnut, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
} from 'chart.js';

import OverallPerformance from './Performance';
import Security from './Security';
import TokenReviews from './Reviews';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const LPAnalytics = () => {
    const doughnutData = {
        datasets: [
            {
                label: 'Token Distribution',
                data: [65, 20, 15],
                backgroundColor: ['#8B59A9', '#3F51B5', '#F402F9'],
                hoverOffset: 4,
            },
        ],
    };

    const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Transaction Fees',
                data: [5, 8, 12, 9, 6, 10, 12, 14, 10, 12, 13, 15],
                backgroundColor: ['#8B59A9'],
                borderRadius: 5,
                barThickness: 20,
            },
        ],
    };

    const barOptions = {
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: { grid: { display: false }, ticks: { color: '#888' } },
            y: { ticks: { color: '#888' } },
        },
    };

    return (
        <div className="bg-card-body p-8 rounded-lg space-y-8 text-white">
            <h2 className="text-2xl font-semibold">LP Analytics</h2>
            <p className="leading-relaxed">
                Bitcoin (BTC) is the first cryptocurrency built on blockchain technology, also known as a decentralized
                digital currency that is based on cryptography. Unlike government-issued or fiat currencies such as US
                Dollars or Euro which are controlled by central banks, Bitcoin can operate without the need of a central
                authority like a central bank or a company. The decentralized nature allows it to operate on a peer-to-peer
                network whereby users are able to send funds to each other without going through intermediaries.
            </p>

            <div className="flex gap-8">
                <div className="w-1/3 bg-card-item p-6 rounded-lg flex flex-col items-center">
                    <h3 className="text-xl font-medium mb-2">Allocation</h3>
                    <p className="text-sm text-gray-400 mb-4">Token Distribution</p>
                    <div className="w-56 h-56">
                        <Doughnut data={doughnutData} />
                    </div>
                </div>

                <div className="w-2/3 bg-card-item p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-medium">Average Transaction Fees</h3>
                        <div className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-300 flex items-center space-x-1">
                            <span>Quarterly</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">
                        The average fee required to use the blockchain.
                    </p>
                    <Bar data={barData} options={barOptions} />
                </div>
            </div>

            <OverallPerformance />
            <Security />
            <TokenReviews />
        </div>
    );
};

export default LPAnalytics;