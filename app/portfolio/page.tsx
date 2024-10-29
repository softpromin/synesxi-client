'use client';

import TopBar from "@/components/TopBar";
import Cards from "@/components/portfolio/Cards";
import Table from "@/components/portfolio/Table";

export default function Help() {
    return (
        <div>
            <TopBar />

            <div className="text-white flex flex-col">
                <h1 className="text-3xl font-semibold mt-10">Portfolio</h1>
                <p className="mt-2">Updated on 23 May 2023</p>
            </div>

            <Cards />
            <div className="mt-4">
                <Table />
            </div>
        </div>
    );
}