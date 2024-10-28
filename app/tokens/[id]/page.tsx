import TopBar from "@/components/TopBar";
import Overview from "@/components/tokens-dapps/item/Overview";
import Chart from "@/components/tokens-dapps/item/Chart";

interface TokenPageProps {
    params: { id: string };
}

const TokenPage = async ({ params }: TokenPageProps) => {
    const { id } = await params;

    return (
        <div className="flex flex-col space-y-6 bg-card-body">
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
    );
};

export default TokenPage;