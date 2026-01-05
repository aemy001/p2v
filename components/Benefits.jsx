import React from 'react';
import { TrendingUp, Users, Zap, ShieldCheck, CheckCircle, BarChart3 } from 'lucide-react';
import Image from 'next/image';

const Benefits = () => {
    return (
        <section id="benefits" className="py-24 bg-linear-to-b from-blue-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
                        Why Choose 3PL with P2V?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We’ve replaced VC-driven growth with founder-led stability. By applying 
                        rigorous operational logic, we turn your logistics into a long-term advantage.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    <div className=" flex flex-col items-center ">
                        <Image src="/benefits.webp" width={600} height={400} className='rounded-lg shadow-lg' alt='benefits' />
                    </div>

                    {/* Right Column: The Benefits Grid */}
                    <div className="grid grid-cols-1 gap-6">

                        {/* Founder-Owned & Aligned */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex gap-6 items-start">
                                <div className="bg-blue1 w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                                    <Users className="text-white" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">
                                        Founder-Led Integrity
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        P2V is 100% founder-owned. We don&apos;t answer to venture capitalists pushing for growth at all costs—we answer to you and your long-term success.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {["Zero VC Interference", "Incentive Alignment", "Well-Capitalized", "Long-term Stability"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-blue2 uppercase">
                                                <CheckCircle size={14} className="text-green-500" /> {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Strategic Scale Logic */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex gap-6 items-start">
                                <div className="bg-blue1 w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                                    <Zap className="text-white" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">
                                        Strategic Scale Advantage
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        More locations usually mean more complexity. We choose massive scale in strategic hubs to ensure your inventory stays concentrated and moves faster.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {["Simplified Inventory", "B2B Velocity Hubs", "Lower Overhead", "National Transit Reach"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-blue2 uppercase">
                                                <CheckCircle size={14} className="text-green-500" /> {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Real Expertise & Guarantees */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex gap-6 items-start">
                                <div className="bg-blue1 w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                                    <ShieldCheck className="text-white" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">
                                        Floor-Proven Guarantees
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        Our success team started on the warehouse floor. We back that expertise with bold promises: zero shrinkage and 100% order accuracy, period.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {["Zero Shrinkage", "100% Accuracy", "Omnichannel Experts", "Direct Line to Floor"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-blue2 uppercase">
                                                <CheckCircle size={14} className="text-green-500" /> {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;