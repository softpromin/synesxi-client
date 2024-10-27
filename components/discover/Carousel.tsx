'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import { useState } from 'react';

const Carousel = () => {
    const items = [
        { id: 'flipgg', name: 'Flipgg', imageUrl: '/images/flipgg.png' },
        { id: 'drift-protocol', name: 'Drift Protocol', imageUrl: '/images/drift-protocol.png' },
        { id: 'zig', name: 'Zignaly (ZIG)', imageUrl: '/images/zig.png' },
        { id: 'chingari', name: 'Chingari', imageUrl: '/images/chingari.png' },
        { id: 'moon-roll', name: 'Moon Roll', imageUrl: '/images/moon-roll.png' },
    ];

    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <div className="carousel-container">
            <Swiper
                modules={[Pagination, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 12,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
                className="mySwiper"
                initialSlide={2}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={item.id} className="flex justify-center items-center">
                        <div
                            className="item-card flex flex-col items-center bg-white rounded-md p-4 shadow-lg"
                            style={{
                                opacity:
                                    activeIndex === index
                                        ? 1
                                        : Math.max(0.2, 1 - Math.abs(activeIndex - index) * 0.4),
                            }}
                        >
                            <Image
                                src={'/dapp/mean-finance.png'}
                                alt={item.name}
                                width={140}
                                height={101}
                                className="rounded"
                            />
                            <div className="text-center mt-2 font-bold text-black">{item.name}</div>
                            <div className="text-center text-xs text-gray-500">More details of token</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;