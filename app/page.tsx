'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // router.push('/login');
  }, []);

  return (
    <div className="flex space-x-4 h-full">
                <div className="flex-grow">
                    {/* <TransactionTable /> */}
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                </div>
                <div className="w-44 h-full bg-white">
                    {/* <Analytics /> */}
                </div>
            </div>
  );
}
