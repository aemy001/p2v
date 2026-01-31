import React from "react";
import { Package, CheckCircle, ArrowUpRight } from "lucide-react";
import {InboundIllustration, StorageIllustration, FulfillmentIllustration, TruckIllustration} from "./Icons"

const WhatIs3PL = () => { 
 

  const features = [
    {
      id: "01",
      title: "Inbound Intake",
      desc: "Port-to-Warehouse Receiving",
      icon: <InboundIllustration />,
    },
    {
      id: "02",
      title: "Smart Storage",
      desc: "Climate Controlled Racking",
      icon: <StorageIllustration />,
    },
    {
      id: "03",
      title: "Order Fulfillment",
      desc: "Pick, Pack & Ship Execution",
      icon: <FulfillmentIllustration />,
    },
    {
      id: "04",
      title: "Ground Velocity",
      desc: "Nationwide Distribution",
      icon: <TruckIllustration />,
    },
  ];

  return (
    <section
      id="what-is-3pl"
      className="py-40 bg-white relative overflow-hidden"
    > 
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#1e3a8a 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
              What is <span className="text-blue1">3PL?</span>
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Third-party logistics (3PL) is the strategic outsourcing of
              supply chain operations. At Price Value Logistics, we treat this as a{" "}
              <span className="font-bold text-blue-900">
                formula for efficiency
              </span>
              , we manage your entire supply chain from receiving inventory to
              delivering products to end markets or retail channels.
            </p>

            <p className="text-gray-600 leading-relaxed mb-10">
              Rather than managing warehousing, transportation, and
              fulfillment yourself, you partner with Price Value Logistics. This allows your
              team to focus on what you do best: growing your business and
              serving customers across the USA.
            </p>

            <div className="space-y-5">
              <div className="flex gap-4 items-start group">
                <div className="shrink-0 w-12 h-12 bg-blue1 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
                  <Package className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 uppercase text-sm tracking-tight">
                    Reduce Operational Burden
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Outsource complex logistics tasks and eliminate overhead
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="shrink-0 w-12 h-12 bg-blue1 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
                  <Package className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 uppercase text-sm tracking-tight">
                    Domestic Specialization
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Optimized ground-only logistics for the US market. No
                    rail, no exports just pure domestic speed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="shrink-0 w-12 h-12 bg-blue1 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
                  <Package className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 uppercase text-sm tracking-tight">
                    Import Advisement & Handling
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Expert support for inbound port shipments and customs
                    assistance for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid: SVG Illustrations */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl p-6 bg-linear-to-br from-blue-50 to-white border border-blue-100 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-500 h-64 flex flex-col justify-between overflow-hidden ${
                  index === 1 || index === 3 ? "lg:translate-y-12" : ""
                }`} 
              >
                {/* SVG Container */}
                <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 opacity-90 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500">
                    {feature.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-blue-600 font-bold text-sm border border-blue-50">
                        {feature.id}
                    </div>
                    <h3 className="text-blue-900 font-bold text-lg leading-tight mb-1">
                        {feature.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide max-w-[80%]">
                        {feature.desc}
                    </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIs3PL;