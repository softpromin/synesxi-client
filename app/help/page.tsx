'use client';

import { useState } from 'react';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

import TopBar from "@/components/TopBar";

export default function Help() {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isFocused, setIsFocused] = useState(false);

    const faqs = [
        { question: "Question 1", answer: "This is the answer to question 1." },
        { question: "Question 2", answer: "This is the answer to question 2." },
        { question: "Question 3", answer: "This is the answer to question 3." },
        { question: "Question 4", answer: "This is the answer to question 4." },
        { question: "Question 5", answer: "This is the answer to question 5." },
        { question: "Question 6", answer: "This is the answer to question 6." },
    ];

    const filteredFaqs = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleExpand = (index: any) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div>
            <TopBar />

            <div className="text-white flex flex-col">
                <h1 className="text-3xl font-semibold mt-10">Hi, we are happy to be of help</h1>
                <p className="mt-2">Your synexi buddy is here to help you find answers</p>
            </div>

            <div className="bg-card-body text-white p-6 pb-32 rounded-md shadow-lg mt-8">
                <div
                    className={`flex items-center mb-6 pl-4 border-2 rounded-md p-1 ${isFocused ? 'border-purple-500' : 'border-transparent'
                        }`}
                >
                    <FiSearch className="text-gray-400 mr-2 text-lg" />
                    <input
                        type="text"
                        placeholder="Describe your issue"
                        className="w-full bg-card-body text-gray-300 py-2 px-4 rounded-md focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)} // Set focus state
                        onBlur={() => setIsFocused(false)} // Remove focus state
                    />
                </div>

                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>

                <div className="space-y-2">
                    {filteredFaqs.map((faq, index) => (
                        <div key={index} className="rounded-md border border-gray-700">
                            <button
                                onClick={() => toggleExpand(index)}
                                className="w-full flex items-center justify-between py-4 px-6 text-left"
                            >
                                <span className="font-medium">{faq.question}</span>
                                <FiChevronDown
                                    className={`transform ${expandedIndex === index ? 'rotate-180' : 'rotate-0'
                                        } text-gray-400`}
                                />
                            </button>
                            {expandedIndex === index && (
                                <div className="px-6 pb-4 text-gray-400">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}