'use client';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const ChartDashboard = () => {
    const chartData: ChartData<'bar' | 'line'> = {
        labels: ['19:00 AM', '19:10 AM', '19:20 AM', '19:30 AM', '19:40 AM', '19:50 AM'],
        datasets: [
            {
                type: 'line',
                label: 'Price',
                data: [35000, 40000, 30000, 50000, 45000, 42000],
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                yAxisID: 'y',
            },
            {
                type: 'bar',
                label: 'Volume',
                data: [20000, 30000, 10000, 40000, 35000, 28000],
                backgroundColor: 'rgba(59, 130, 246, 0.6)',
                borderWidth: 1,
                yAxisID: 'y1',
            },
        ],
    };

    const chartOptions: ChartOptions<'bar' | 'line'> = {
        responsive: true,
        scales: {
            y: {
                type: 'linear',
                position: 'left',
                ticks: {
                    color: 'gray',
                    callback: function (tickValue) {
                        return typeof tickValue === 'number' ? `${tickValue.toLocaleString()}k` : tickValue;
                    },
                },
            },
            y1: {
                type: 'linear',
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
                ticks: {
                    color: 'gray',
                    callback: function (tickValue) {
                        return typeof tickValue === 'number' ? `${tickValue.toLocaleString()}k` : tickValue;
                    },
                },
            },
            x: {
                ticks: {
                    color: 'gray',
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className="bg-card-item p-6 rounded-lg space-y-6">
            <div className="flex space-x-6 text-custom-gray">
                {["Chart", "Markets", "About", "LP Analytics", "Security"].map((tab) => (
                    <button key={tab} className="px-4 py-2 text-sm text-white hover:border-b-2 border-blue-500">
                        {tab}
                    </button>
                ))}
            </div>
            <div className="flex justify-between items-center text-white">
                <div className='flex space-x-12'>
                    <h2 className="text-2xl font-semibold">Chart</h2>
                    <div className="flex space-x-2 items-center text-custom-gray">
                        <button className="w-24 py-1 border border-gray-700 text-xs rounded">Price</button>
                        <button className="w-24 px-4 py-1 border border-gray-700 text-xs rounded">MarketCap</button>
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <button className="p-2 border border-custom-gray rounded">
                        <InformationCircleIcon className="h-5 w-5 text-custom-gray" />
                    </button>
                    <div className="flex items-center border border-custom-gray px-3 py-2 rounded text-custom-gray">
                        <CurrencyDollarIcon className="h-5 w-5 mr-1 text-yellow-500" />
                        <select className="bg-transparent text-sm">
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="btc">BTC</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center text-custom-gray">
                <div>
                    <p className="text-lg text-white">Bitcoin/BTC</p>
                    <p className="text-3xl font-semibold text-white">$35,352.02</p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                        {["1h", "3h", "1d", "1w", "1m"].map((time) => (
                            <button key={time} className={`px-3 py-1 ${time === "1h" ? "bg-blue-500" : "bg-gray-800"} text-white rounded text-sm`}>
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <Chart type="line" data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default ChartDashboard;