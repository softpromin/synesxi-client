'use client';

import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();

    return (
        <div className="h-[550px] p-10 bg-[#1c1e22] rounded-[10px] border border-[#3e97ff] flex-col justify-center items-center gap-20 inline-flex">
            <div className="flex-col justify-start items-center gap-6 flex">
                <div className="h-[63px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch text-center text-white text-[27px] font-bold font-['DM Sans'] leading-[33.35px] tracking-tight">Create Account</div>
                    <div className="self-stretch text-center text-white text-base font-normal font-['DM Sans'] leading-snug tracking-tight">Sign up to get started</div>
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch px-4 py-2 rounded-md border-2 border-[#31353f] justify-center items-center gap-2 inline-flex">
                        <div className="text-center text-[#31353f] text-sm font-bold font-['DM Sans'] leading-relaxed tracking-wide">Username</div>
                    </div>
                    <div className="self-stretch px-4 py-2 rounded-md border-2 border-[#31353f] justify-center items-center gap-2 inline-flex">
                        <div className="text-center text-[#31353f] text-sm font-bold font-['DM Sans'] leading-relaxed tracking-wide">Email</div>
                    </div>
                    <div className="self-stretch px-4 py-2 rounded-md border-2 border-[#31353f] justify-center items-center gap-2 inline-flex">
                        <div className="text-center text-[#31353f] text-sm font-bold font-['DM Sans'] leading-relaxed tracking-wide">Password</div>
                    </div>
                    <div className="self-stretch px-4 py-2 rounded-md border-2 border-[#31353f] justify-center items-center gap-2 inline-flex">
                        <div className="text-center text-[#31353f] text-sm font-bold font-['DM Sans'] leading-relaxed tracking-wide">Confirm Password</div>
                    </div>
                    <div className="self-stretch px-4 py-2 bg-gradient-to-r from-[#3e97ff] to-[#f402f9] rounded-md justify-center items-center gap-2 inline-flex">
                        <div className="text-center text-white text-sm font-bold font-['DM Sans'] leading-relaxed tracking-wide">Register</div>
                    </div>
                    <div className="w-80 justify-center items-center inline-flex">
                        <div className="h-px relative border border-[#31353f]" />
                        <div className="px-1 justify-center items-center gap-2.5 flex">
                            <div className="text-center text-[#636669] text-[11px] font-bold font-['DM Sans'] leading-none">Already have an account?</div>
                        </div>
                        <div className="h-px relative border border-[#31353f]" />
                    </div>
                    <div className="self-stretch px-4 py-2 bg-[#2a2a36] rounded-md justify-center items-center gap-2 inline-flex">
                        <button onClick={() => router.push('/login')} className="text-center text-white text-sm font-bold font-['DM Sans'] leading-relaxed tracking-wide">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}