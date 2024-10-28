import Image from "next/image";

export default function Analytics() {
    return (
        <div className="bg-card-body rounded-md px-4 py-10 flex flex-col">
            <div className="w-fit bg-custom-gradient bg-clip-text text-transparent text-2xl font-semibold">Analytics</div>

            <div className="text-custom-gray mt-10">Greed Index</div>
            <div className="bg-card-item rounded flex items-center justify-around px-1 py-2 mt-5">
                <Image
                    src='/donut-chart.png'
                    alt='donut-chart'
                    width={61}
                    height={33}
                />
                <div className="flex flex-col text-[10px]">
                    <div className="flex space-x-2">
                        <span className="text-red-600 font-semibold">•</span>
                        <span className="font-semibold">Critical</span>
                    </div>
                    <div className="flex space-x-2">
                        <span className="text-red-600 font-semibold">•</span>
                        <span className="font-semibold">Risky</span>
                    </div>
                    <div className="flex space-x-2">
                        <span className="text-green-600 font-semibold">•</span>
                        <span className="font-semibold">Safe Zone</span>
                    </div>
                </div>
            </div>

            <div className="text-custom-gray mt-5">Allocation</div>
            <div className="bg-card-item rounded flex items-center justify-around px-1 py-2 mt-5">
                <Image
                    src='/circle-chart.png'
                    alt='circle-chart'
                    width={61}
                    height={33}
                />
                <div className="flex flex-col text-[10px]">
                    <div className="flex space-x-2">
                        <span className="text-red-600 font-semibold">•</span>
                        <span className="font-semibold">Token 1</span>
                    </div>
                    <div className="flex space-x-2">
                        <span className="text-green-600 font-semibold">•</span>
                        <span className="font-semibold">Token 2</span>
                    </div>
                    <div className="flex space-x-2">
                        <span className="text-blue-600 font-semibold">•</span>
                        <span className="font-semibold">Token 2</span>
                    </div>
                </div>
            </div>

            <Image
                src='/ads.png'
                alt='ads'
                width={143}
                height={287}
                className="mt-8"
            />
        </div>
    );
}