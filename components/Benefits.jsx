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
                                    <Users className="text-white" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">
                                        Founder-Led Integrity
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        P2V is 100% founder-owned. We don&apos;t answer to venture capitalists pushing for growth at all costs we answer to you and your long-term success.
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
                               
<svg id="Outline" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 64 64" width="40px" height="40px" className="fill-white">
  <path d="M14,11c-1.6543,0-3,1.3457-3,3s1.3457,3,3,3,3-1.3457,3-3-1.3457-3-3-3ZM14,15c-.55127,0-1-.44873-1-1s.44873-1,1-1,1,.44873,1,1-.44873,1-1,1Z"/>
  <path d="M50,37c-3.85999,0-7,3.14001-7,7,0,1.58997.53998,3.32996,1.29999,5h-9.47998c-.31-.85004-.97003-1.51001-1.82001-1.82001v-5.17999h8c.54999,0,1-.45001,1-1v-18c0-.54999-.45001-1-1-1h-8v-5.17999c1.15997-.42004,2-1.52002,2-2.82001,0-1.65002-1.34998-3-3-3-1.29999,0-2.40002.83997-2.82001,2h-8.26001c-.48999-3.39001-3.39996-6-6.91998-6-3.85999,0-7,3.14001-7,7,0,5.31,5.98999,12.34998,6.23999,12.64996.19.22003.47003.35004.76001.35004s.57001-.13.76001-.35004c.23999-.27997,5.52002-6.5,6.16998-11.64996h8.25c.31.84998.97003,1.51001,1.82001,1.82001v5.17999h-8c-.54999,0-1,.45001-1,1v18c0,.54999.45001,1,1,1h8v5.17999c-1.15997.41998-2,1.52002-2,2.82001,0,1.64996,1.34998,3,3,3,1.29999,0,2.40002-.84003,2.82001-2h10.5c1.71002,3.04999,3.77002,5.47998,3.91998,5.64996.19.22003.47003.35004.76001.35004s.57001-.13.76001-.35004c.25-.29999,6.23999-7.33997,6.23999-12.64996,0-3.85999-3.14001-7-7-7ZM14,24.39996c-1.56-2.00995-5-6.84998-5-10.39996,0-2.76001,2.23999-5,5-5s5,2.23999,5,5c0,3.54999-3.44,8.39001-5,10.39996ZM32,13c.54999,0,1,.45001,1,1s-.45001,1-1,1-1-.45001-1-1,.45001-1,1-1ZM29,24h6v3.38l-2.54999-1.27002c-.14001-.07001-.29999-.10999-.45001-.10999s-.31.03998-.45001.10999l-2.54999,1.27002v-3.38ZM24,40v-16h3v5c0,.34998.17999.66998.46997.84998.30005.17999.67004.20001.98004.04004l3.54999-1.77002,3.54999,1.77002c.14001.06995.29999.10999.45001.10999.17999,0,.37-.04999.53003-.15002.28998-.17999.46997-.5.46997-.84998v-5h3v16h-16ZM32,51c-.54999,0-1-.45001-1-1s.45001-1,1-1,1,.45001,1,1-.45001,1-1,1ZM50,54.39996c-1.56-2.00995-5-6.84998-5-10.39996,0-2.76001,2.23999-5,5-5s5,2.23999,5,5c0,3.54999-3.44,8.39001-5,10.39996Z"/>
  <path d="M50,41c-1.6543,0-3,1.3457-3,3s1.3457,3,3,3,3-1.3457,3-3-1.3457-3-3-3ZM50,45c-.55127,0-1-.44873-1-1s.44873-1,1-1,1,.44873,1,1-.44873,1-1,1Z"/>
  <path d="M31,36h-4c-.55225,0-1,.44775-1,1s.44775,1,1,1h4c.55225,0,1-.44775,1-1s-.44775-1-1-1Z"/>
</svg>
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
                                
<svg id="Outline" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 64 64" width="40px" height="40px" className="fill-white">
  <path d="M56,46v-19c0-.54999-.45001-1-1-1h-9v-1c0-.54999-.45001-1-1-1s-1,.45001-1,1v14.82996l-5.14001-4.40997-7.91998-22.75c-.14001-.40002-.51001-.66998-.94-.66998H14c-.54999,0-1,.45001-1,1v4h-3c-.54999,0-1,.45001-1,1v9h-1c-.54999,0-1,.45001-1,1v19c0,.54999.45001,1,1,1h3.69c1.12,2.35999,3.52997,4,6.31,4s5.19-1.64001,6.31-4h6.78998c.47003,2.27997,2.49005,4,4.90002,4s4.42999-1.72003,4.90002-4h15.09998c.54999,0,1-.45001,1-1s-.45001-1-1-1ZM15,14h14.28998l7.30005,21h-9.59003v-4c0-.27002-.10999-.52002-.28998-.71002l-3-3c-.19-.17999-.44-.28998-.71002-.28998h-8v-13ZM11,19h2v8h-2v-8ZM18,50c-2.76001,0-5-2.23999-5-5s2.23999-5,5-5,5,2.23999,5,5-2.23999,5-5,5ZM36,50c-1.65002,0-3-1.35004-3-3s1.34998-3,3-3,3,1.34998,3,3-1.34998,3-3,3ZM44,46h-3.09998c-.47003-2.28003-2.49005-4-4.90002-4s-4.42999,1.71997-4.90002,4h-6.17999c.04999-.33002.08002-.66003.08002-1,0-3.85999-3.14001-7-7-7s-7,3.14001-7,7c0,.33997.03003.66998.08002,1h-2.08002v-17h13.59003l2.40997,2.40997v4.59003c0,.54999.45001,1,1,1h11.63l6.37,5.45996v3.54004ZM54,46h-8v-8h8v8ZM54,36h-8v-8h8v8Z"/>
  <path d="M13,31c-.55273,0-1,.44775-1,1v2c0,.55225.44727,1,1,1s1-.44775,1-1v-2c0-.55225-.44727-1-1-1Z"/>
  <path d="M17,31c-.55273,0-1,.44775-1,1v2c0,.55225.44727,1,1,1s1-.44775,1-1v-2c0-.55225-.44727-1-1-1Z"/>
  <path d="M21,31c-.55273,0-1,.44775-1,1v2c0,.55225.44727,1,1,1s1-.44775,1-1v-2c0-.55225-.44727-1-1-1Z"/>
  <path d="M18,42c-1.6543,0-3,1.3457-3,3s1.3457,3,3,3,3-1.3457,3-3-1.3457-3-3-3ZM18,46c-.55176,0-1-.44873-1-1s.44824-1,1-1,1,.44873,1,1-.44824,1-1,1Z"/>
</svg>
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