import Recommends from "@/components/discover/Recommends";
import TopCharts from "@/components/discover/TopCharts";
import NewArrivals from "@/components/discover/NewArrivals";
import TopItems from "@/components/discover/TopItems";

export default function Discover() {
  return (
    <div className='flex w-full space-x-8'>
      <div className='flex flex-col w-3/5 space-y-7'>
        <div>
          <div className='text-4xl'>Discover</div>
          <div className='text-custom-gray'>Experience more in the decentralized web</div>
        </div>
        <Recommends />
        <TopCharts />
      </div>

      <div className='flex flex-col w-2/5 bg-card-body rounded-md px-8 py-6 space-y-10'>
        <NewArrivals />
        <TopItems />
      </div>
    </div>
  );
}