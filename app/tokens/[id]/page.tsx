import TopBar from "@/components/TopBar";
import Overview from "@/components/tokens/token/Overview";
import Chart from "@/components/tokens/token/Chart";
import TransactionTable from "@/components/tokens/token/TransactionTable";
import Analytics from "@/components/tokens/Analytics";
import About from "@/components/tokens/token/About";
import LPAnalytics from "@/components/tokens/token/LPAnalytics";
import SimilarTokens from "@/components/tokens/token/SimilarTokens";

const TokenPage = () => {
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

            <div className="flex space-x-4 h-full">
                <div className="flex-grow">
                    <TransactionTable />
                </div>
                <div className="w-44 h-full">
                    <Analytics />
                </div>
            </div>

            <About />
            <LPAnalytics />
            <SimilarTokens />
        </div>
    );
};

export default TokenPage;