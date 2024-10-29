import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { PiCurrencyCircleDollar } from "react-icons/pi";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const tokenDistributionData = {
        datasets: [
            {
                data: [40, 30, 30],
                backgroundColor: ['#8e44ad', '#3498db', '#ecf0f1'],
                borderWidth: 0,
            },
        ],
    };

    const profitLossData = {
        datasets: [
            {
                data: [50, 25, 25],
                backgroundColor: ['#2ecc71', '#e74c3c', '#95a5a6'],
                borderWidth: 0,
            },
        ],
    };

    return (
        <div className="flex flex-wrap rounded-md text-white mt-10 justify-between">
            <div className="bg-card-body p-6 rounded-md w-[280px] flex flex-col">
                <h3 className="text-lg font-semibold mb-4">Token Distribution</h3>
                <div className='flex'>
                    <div className="w-24 h-24">
                        <Pie data={tokenDistributionData} options={{ responsive: true, maintainAspectRatio: true }} />
                    </div>
                    <div className="mt-3 ml-6 text-sm text-gray-400">
                        <p>• Token 1</p>
                        <p>• Token 2</p>
                        <p>• Token 3</p>
                    </div>
                </div>
            </div>

            <div className="bg-card-body p-6 rounded-md w-[280px] flex flex-col space-y-1">
                <PiCurrencyCircleDollar className='text-2xl text-green-500' />
                <h3 className="text-lg font-semibold mb-2">All time profit</h3>
                <p className="text-4xl mb-1 text-custom-gray">$12k</p>
                <div className="text-sm">Increased this week by <span className='text-green-400'>+0.2%</span></div>
            </div>

            <div className="bg-card-body p-6 rounded-md w-[280px] flex flex-col pt-10">
                <h3 className="text-lg font-semibold mb-2 mt-4">Top Performer</h3>
                <p className="text-2xl text-custom-gray mb-1">Drift Protocol</p>
                <div className="text-sm">Increased this week by <span className='text-green-400'>+0.2%</span></div>
            </div>

            <div className="bg-card-body p-6 rounded-md w-[280px] flex flex-col">
                <h3 className="text-lg font-semibold mb-4">Token Distribution</h3>
                <div className='flex'>
                    <div className="w-24 h-24">
                        <Pie data={profitLossData} options={{ responsive: true, maintainAspectRatio: true }} />
                    </div>
                    <div className="mt-3 ml-6 text-sm text-gray-400">
                        <p>• Token 1</p>
                        <p>• Token 2</p>
                        <p>• Token 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;