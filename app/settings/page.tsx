'use client';

import Image from "next/image";
import { useState } from "react";
import { FaCheckCircle } from 'react-icons/fa';
import { FaRegEdit } from "react-icons/fa";
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

import TopBar from "@/components/TopBar";

export default function Settings() {
	const [activeTab, setActiveTab] = useState('Profile');

	const tabs = ['Profile', 'Notifications', 'Security', 'Appearance', 'Other'];

	return (
		<div>
			<TopBar />

			<div className="text-white flex flex-col">
				<h1 className="text-3xl font-semibold mt-10">Settings</h1>
				<p className="mt-2">Experience more in the decentralized web</p>

				<div className="flex space-x-8 mt-10">
					{tabs.map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`w-24 pb-2 border-b-2 ${activeTab === tab ? 'border-purple-500 text-custom-pink' : 'border-transparent text-white'} hover:border-purple-500 transition-colors`}
						>
							{tab}
						</button>
					))}
				</div>
			</div>

			<div>
				<div className="bg-card-body text-white p-6 rounded-md w-full mt-10 shadow-lg space-y-12">
					<div>
						<h2 className="text-xl font-semibold mb-2">Account Profile</h2>
						<p className="text-custom-gray mb-2">
							Set up verification methods to be able to restore access to your account in another browser or on another device
						</p>

						<div className="flex items-center justify-between border border-gray-700 p-4 rounded-lg">
							<div className="flex items-center space-x-3">
								<FaCheckCircle className="text-green-500 text-lg" />
								<span className="text-white font-medium">Account Alias</span>
							</div>
							<button aria-label="Edit Account Alias">
								<FaRegEdit className="text-gray-400 hover:text-gray-200 transition-colors text-lg" />
							</button>
						</div>
					</div>

					<div>
						<h2 className="text-xl font-semibold mb-2">Account Notification Settings</h2>
						<p className="text-custom-gray mb-2">
							Set up verification methods to be able to restore access to your account in another browser or on another device
						</p>

						<div className="flex items-center justify-between border border-gray-700 p-4 rounded-lg">
							<div className="flex items-center space-x-3">
								<FaCheckCircle className="text-green-500 text-lg" />
								<span className="text-white font-medium">Turn off Notification</span>
							</div>
							<button aria-label="Edit Account Alias">
								<FaRegEdit className="text-gray-400 hover:text-gray-200 transition-colors text-lg" />
							</button>
						</div>
						<div className="flex items-center justify-between border border-gray-700 p-4 rounded-lg mt-2">
							<div className="flex items-center space-x-3">
								<FaCheckCircle className="text-red-500 text-lg" />
								<span className="text-white font-medium">Turn off Notification</span>
							</div>
							<button aria-label="Edit Account Alias">
								<FaRegEdit className="text-gray-400 hover:text-gray-200 transition-colors text-lg" />
							</button>
						</div>
					</div>

					<div>
						<h2 className="text-xl font-semibold mb-2">Multifactor authentication</h2>
						<p className="text-custom-gray mb-2">
							Set up verification methods to be able to restore access to your account in another browser or on another device
						</p>

						<div className="flex items-center justify-between border border-gray-700 p-4 rounded-lg">
							<div className="flex items-center space-x-3">
								<FaCheckCircle className="text-green-500 text-lg" />
								<span className="text-white font-medium">Password</span>
							</div>
							<button aria-label="Edit Account Alias">
								<FaRegEdit className="text-gray-400 hover:text-gray-200 transition-colors text-lg" />
							</button>
						</div>
						<div className="flex items-center justify-between border border-gray-700 p-4 rounded-lg mt-2">
							<div className="flex items-center space-x-3">
								<FaCheckCircle className="text-green-500 text-lg" />
								<span className="text-white font-medium">Add Biometric</span>
							</div>
							<button aria-label="Edit Account Alias">
								<FaRegEdit className="text-gray-400 hover:text-gray-200 transition-colors text-lg" />
							</button>
						</div>
						<div className="flex items-center justify-between border border-gray-700 p-4 rounded-lg mt-2">
							<div className="flex items-center space-x-3">
								<FaCheckCircle className="text-green-500 text-lg" />
								<span className="text-white font-medium">Authenticator app</span>
							</div>
							<button aria-label="Edit Account Alias">
								<GoChevronDown className="text-white transition-colors text-lg" />
							</button>
						</div>

						<div className="text-white p-6 rounded-md w-1/2">
							<div className="space-y-6">
								<div className="flex items-start space-x-8">
									<Image
										src='/qr-code.png'
										alt='qr-code'
										width={100}
										height={100}
									/>
									<div className="space-y-2">
										<Bs1CircleFill className="text-gray-600" />
										<p className="text-gray-400">
											Install an authenticator app like <a href="#" className="underline">Authy</a> or <a href="#" className="underline">Google Authenticator</a> on your mobile device.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-8">
									<Image
										src='/qr-code.png'
										alt='qr-code'
										width={100}
										height={100}
									/>
									<div className="space-y-2">
										<Bs2CircleFill className="text-gray-600" />
										<p className="">
											Open the authenticator app and scan this QR code using your phone’s camera.
										</p>
										<p className="mt-2 flex flex-col">
											<span className="text-gray-400 font-semibold">2FA Key(or use manual entry):</span>
											<span className="text-sm">atth cn34 yep2 h4gh h7as heys idwsj uwh1</span>
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-8">
									<Image
										src='/qr-code.png'
										alt='qr-code'
										width={100}
										height={100}
									/>
									<div className="space-y-2">
										<Bs3CircleFill className="text-gray-600" />
										<p className="">
											Enter the 6-digit verification code that has been generated in the app.
										</p>
										<div className="flex space-x-2 mt-3">
											{[...Array(6)].map((_, index) => (
												<input
													key={index}
													type="text"
													maxLength={1}
													className="w-10 h-10 bg-gray-800 text-center text-xl rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
												/>
											))}
										</div>
									</div>
								</div>

								<button
									className="ml-32 w-32 bg-gray-700 text-gray-400 py-2 rounded-md font-semibold mt-4 hover:bg-gray-600 transition-colors"
									disabled
								>
									Activate
								</button>
							</div>
						</div>
					</div>

					<div className="pb-60">
						<h2 className="text-xl font-semibold mb-2">Appearance Settings</h2>
						<p className="text-custom-gray mb-2">
							Set up verification methods to be able to restore access to your account in another browser or on another device
						</p>

						<div className="flex items-center justify-between border border-gray-700 p-4 rounded-lg">
							<div className="flex items-center space-x-3">
								<FaCheckCircle className="text-green-500 text-lg" />
								<span className="text-white font-medium">Theme</span>
							</div>
							<button aria-label="Edit Account Alias">
								<FaRegEdit className="text-gray-400 hover:text-gray-200 transition-colors text-lg" />
							</button>
						</div>
						<div className="flex items-center justify-between border border-gray-700 p-4 rounded-lg mt-2">
							<div className="flex items-center space-x-3">
								<FaCheckCircle className="text-green-500 text-lg" />
								<span className="text-white font-medium">Turn off Notification</span>
							</div>
							<button aria-label="Edit Account Alias">
								<BsToggleOn className="text-gray-400 hover:text-gray-200 transition-colors text-lg" />
							</button>
						</div>
						<div className="flex items-center justify-between border border-gray-700 p-4 rounded-lg mt-2">
							<div className="flex items-center space-x-3">
								<FaCheckCircle className="text-green-500 text-lg" />
								<span className="text-white font-medium">Turn off Alerts</span>
							</div>
							<button aria-label="Edit Account Alias">
								<BsToggleOff className="text-gray-400 hover:text-gray-200 transition-colors text-lg" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}