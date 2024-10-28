import TopBar from "@/components/TopBar";
import Overview from "@/components/dapps/dapp/Overview";
import Chart from "@/components/dapps/dapp/Chart";
import TransactionTable from "@/components/dapps/dapp/TransactionTable";
import Analytics from "@/components/dapps/Analytics";
import About from "@/components/dapps/dapp/About";
import LPAnalytics from "@/components/dapps/dapp/LPAnalytics";

const DAppPage = () => {
    return (
        <div className="flex flex-col space-y-6 h-full">
            <div className="flex flex-col space-y-6 bg-card-body pb-6">
                <TopBar />
                <div className="px-6 flex flex-col space-y-6">
                    <Overview />

                    <div className="flex justify-between text-xs text-custom-gray px-12">
                        <div>Solana News Update</div>
                        <div>Solana News Update</div>
                        <div>Solana News Update</div>
                        <div>Solana News Update</div>
                        <div>Solana News Update</div>
                        <div>Solana News Update</div>
                        <div>Solana News Update</div>
                    </div>

                    <Chart />
                </div>
            </div>

            <div className="flex space-x-4 h-[880px]">
                <div className="flex-grow h-full">
                    <TransactionTable />
                </div>
                <div className="w-44">
                    <Analytics />
                </div>
            </div>

            <About />
            <LPAnalytics />
        </div>
    );
};

export default DAppPage;