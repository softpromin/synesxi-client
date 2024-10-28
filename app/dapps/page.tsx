import Image from "next/image";

import TopBar from "@/components/TopBar";
import Cards from "@/components/dapps/Cards";
import TopCharts from "@/components/discover/TopCharts";
import TopItems from "@/components/discover/TopItems";
import DAppTable from "@/components/dapps/DAppTable";

export default function DApps() {
  return (
    <div className="flex flex-col space-y-6 h-full">
      <div className="bg-card-body rounded-md">
        <TopBar />

        <div className="p-6 flex flex-col space-y-3">
          <div className='text-4xl'>Discover DApps</div>
          <div className='text-custom-gray'>Experience more in the decentralized web</div>
          <Cards />
        </div>
      </div>

      <div className="flex justify-between text-xs text-blue-600 px-12">
        <div>Solana News Update</div>
        <div>Solana News Update</div>
        <div>Solana News Update</div>
        <div>Solana News Update</div>
        <div>Solana News Update</div>
        <div>Solana News Update</div>
        <div>Solana News Update</div>
      </div>

      <div className="relative flex items-center py-8 px-8">
        <div className="flex-grow border-t border-dotted border-gray-600"></div>
        <span className="mx-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold text-sm rounded-md">
          Browse All Daps
        </span>
        <div className="flex-grow border-t border-dotted border-gray-600"></div>
      </div>

      <div className="flex space-x-4 h-[440px]">
        <div className="w-3/5 h-full">
          <TopCharts />
        </div>
        <div className="w-2/5 bg-card-body rounded-md p-4 overflow-x-auto">
          <TopItems />
        </div>
      </div>

      <div className="flex space-x-3">
        <div className="flex-grow">
          <DAppTable />
        </div>

        <div className="w-44">
          <div className="h-full bg-card-body rounded-md px-4 py-10 flex flex-col">
            <Image
              src='/ads.png'
              alt='ads'
              width={143}
              height={287}
            />
            <Image
              src='/ads.png'
              alt='ads'
              width={143}
              height={287}
              className="mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}