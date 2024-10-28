'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Context } from 'vm';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Filler);

const OverallPerformance = () => {
  const data = {
    labels: ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Sales',
        data: [4000, 3000, 4890, 3800, 9000, 7000],
        fill: true,
        borderColor: '#3B82F6',
        backgroundColor: (context: Context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          return gradient;
        },
        pointBackgroundColor: '#3B82F6',
        pointBorderColor: '#3B82F6',
        pointRadius: 5,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: Context) {
            return `${context.raw.toLocaleString()} sales in ${context.label}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#A3A3A3',
        },
      },
      y: {
        grid: {
          color: '#2D2D2D',
        },
        ticks: {
          color: '#A3A3A3',
        },
      },
    },
  };

  return (
    <div className="bg-card-item p-8 rounded-lg space-y-8 text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Overall Performance</h2>
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="relative h-[300px]">
        <Line data={data} options={options} />
      </div>

      <div className="flex space-x-12 text-gray-300 text-sm mt-4">
        <div className="text-center flex items-center space-x-12">
          <div>Best</div>
          <div className="text-lg font-semibold text-white">$90.00</div>
        </div>
        <div className="text-center flex items-center space-x-12">
          <div>Today</div>
          <div className="text-lg font-semibold text-white">$90.00</div>
        </div>
      </div>
    </div>
  );
};

export default OverallPerformance;