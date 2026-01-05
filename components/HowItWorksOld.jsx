import React from 'react';
import { Package, Warehouse, Truck, TrendingUp, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Package size={32} />,
      title: "Receiving",
      items: ["Inventory intake", "Quality inspection", "SKU assignment"]
    },
    {
      icon: <Warehouse size={32} />,
      title: "Warehousing",
      items: ["Climate-controlled", "Organized storage", "Real-time tracking"]
    },
    {
      icon: <Package size={32} />,
      title: "Fulfillment Operations",
      items: ["Accurate order selection", "Secure palletizing", "Quality checks"]
    },
    {
      icon: <Truck size={32} />,
      title: "Shipping",
      items: ["Carrier partnerships", "Rate optimization", "Tracking provided"]
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Returns",
      items: ["Reverse logistics", "Restocking", "Disposition management"]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
            How P2V Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures efficient handling of your
            inventory from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-0.5 bg-blue-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group flex flex-col items-center">
                {/* Step Circle */}
                <div className="w-20 h-20 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-blue1 shadow-sm group-hover:shadow-md group-hover:border-blue-500 transition-all duration-300 mb-6 relative">
                  {step.icon}
                  {/* Step Number Badge */}
                  <span className="absolute -top-2 -right-2 bg-blue1 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
                    {index + 1}
                  </span>
                </div>

                {/* Content Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full flex-grow group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-bold text-gray-900 mb-4 text-center text-lg">
                    {step.title}
                  </h3>
                  <ul className="space-y-3">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <span className="mr-2 text-blue-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Mobile Arrow (Visible only on small screens between cards) */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden my-4 text-blue-300">
                    <ArrowRight className="rotate-90" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;