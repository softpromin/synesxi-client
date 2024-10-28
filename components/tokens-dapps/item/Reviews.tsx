'use client';

import { StarIcon } from '@heroicons/react/24/solid';

const TokenReviews = () => {
    const reviews = [
        {
            date: 'Jan 20, 2024',
            rating: 5,
            reviewer: { name: 'Alex K.', role: 'Senior Analyst', initials: 'AK' },
            text: "Working at Sam.AI has been an incredible journey so far. The technology we're building is truly cutting-edge, and being a part of a team that's revolutionizing how people achieve their goals is immensely fulfilling.",
        },
        {
            date: 'Jan 20, 2024',
            rating: 5,
            reviewer: { name: 'Alex K.', role: 'Senior Analyst', initials: 'AK' },
            text: "Working at Sam.AI has been an incredible journey so far. The technology we're building is truly cutting-edge, and being a part of a team that's revolutionizing how people achieve their goals is immensely fulfilling.",
        },
    ];

    const ratingSummary = {
        average: 4.7,
        totalReviews: 578,
        distribution: [
            { stars: 5, count: 488 },
            { stars: 4, count: 74 },
            { stars: 3, count: 14 },
            { stars: 2, count: 0 },
            { stars: 1, count: 0 },
        ],
    };

    return (
        <div className="bg-card-item p-8 rounded-lg text-white space-y-8">
            <div className='flex'>
                <div className='w-1/3'>
                    <h2 className="text-3xl font-semibold mb-2">Token Reviews</h2>
                    <div className="text-4xl font-bold mb-2">{ratingSummary.average}</div>
                    <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, index) => (
                            <StarIcon
                                key={index}
                                className={`h-6 w-6 ${index < Math.round(ratingSummary.average) ? 'text-yellow-500' : 'text-gray-500'}`}
                            />
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mb-6">({ratingSummary.totalReviews} Reviews)</p>
                </div>

                <div className='w-2/3'>
                    {ratingSummary.distribution.map((entry) => (
                        <div key={entry.stars} className="flex items-center text-sm space-x-2 mb-2">
                            <span>{entry.stars} stars</span>
                            <div className="w-full bg-white rounded-full h-2.5 overflow-hidden">
                                <div
                                    className="bg-yellow-500 h-2.5"
                                    style={{ width: `${(entry.count / ratingSummary.totalReviews) * 100}%` }}
                                ></div>
                            </div>
                            <span className="text-gray-400">{entry.count}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='space-y-4 border-t border-gray-800 pt-6 pb-12'>
                {reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-800 pb-6">
                        <p className="text-gray-400 text-sm mb-2">{review.date}</p>
                        <div className="flex items-center space-x-2 mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                                <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
                            ))}
                        </div>
                        <div className="flex items-center space-x-4 mb-2">
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                                {review.reviewer.initials}
                            </div>
                            <div>
                                <p className="font-semibold">{review.reviewer.name}</p>                                
                            </div>                            
                        </div>
                        <p className="text-sm text-gray-400">{review.reviewer.role}</p>
                        <p className="text-gray-300 mt-2">{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TokenReviews;