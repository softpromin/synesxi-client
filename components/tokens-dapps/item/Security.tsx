'use client';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Security = () => {
  const percentage = 15;

  return (
    <div className="bg-gray-900 p-8 rounded-lg text-white flex">
      <div className="w-1/2 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Security</h2>
        <div className="w-40 h-40">
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
            <div className="text-3xl font-semibold">{percentage}%</div>
          </CircularProgressbarWithChildren>
        </div>
      </div>

      <div className="w-1/2 flex flex-col justify-center ml-6">
        <p className="text-lg">Token safety score is</p>
        <p className="text-gray-400 mt-2">Updated June 24, 2024</p>
      </div>
    </div>
  );
};

export default Security;