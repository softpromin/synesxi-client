import TopBar from "@/components/TopBar";
import Cards from "@/components/tokens-dapps/Cards";
import Table from "@/components/tokens-dapps/Table";

export default function Tokens() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="bg-card-body rounded-md">
        <TopBar />

        <div className="p-6 flex flex-col space-y-3">
          <div className='text-4xl'>Discover Tokens</div>
          <div className='text-custom-gray'>Experience more in the decentralized web</div>
          <Cards />
        </div>
      </div>

      <div className="flex justify-between text-xs text-custom-gray px-12">
        <div>Solana News Update</div>
        <div>Solana News Update</div>
        <div>Solana News Update</div>
        <div>Solana News Update</div>
        <div>Solana News Update</div>
        <div>Solana News Update</div>
        <div>Solana News Update</div>
      </div>

      <div className="flex">
        <div className="w-4/5">
          <Table />
        </div>
      </div>
    </div>
  );
}