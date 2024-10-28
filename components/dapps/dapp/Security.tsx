'use client';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Security = () => {
  const percentage = 72 / 2;

  return (
    <div className="bg-card-item p-8 rounded-lg text-white flex">
      <div className="flex flex-col space-y-8">
        <h2 className="text-2xl font-semibold mb-4">Security</h2>

        <div className='flex'>
          <div className="relative w-40 h-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <CircularProgressbarWithChildren
                value={percentage}
                strokeWidth={10}
                styles={buildStyles({
                  pathColor: '#6366F1',
                  trailColor: '#E5E7EB',
                  rotation: 0.75,
                  strokeLinecap: 'round',
                })}
              >
                <div className="text-3xl font-semibold bottom-4 relative">{percentage * 2}%</div>
              </CircularProgressbarWithChildren>
            </div>
          </div>

          <div className="flex flex-col justify-end ml-6">
            <p className="text-lg">Token safety score is</p>
            <p className="text-gray-400 mt-2">Updated June 24, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;