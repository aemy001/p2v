import React from 'react';
import { Factory, Box, Warehouse, Truck, ShoppingCart, ArrowRight, Microscope } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Factory   size={60} />,
      title: "Manufacturer",
      items: ["Domestic Inbound", "Import Receiving", "Supply Chain Entry"]
    },
    {
      icon: <Box   size={60} />,
      title: "Packaging (VAS)",
      items: ["Kitting & Assembly", "Value-Added Services", "Compliance Labeling"]
    },
    {
      icon: <Warehouse   size={60} />,
      title: "3PL Warehousing",
      items: ["Strategic Storage", "Inventory Science", "Inventory Audit"]
    },
    {
      icon: <Truck   size={60} />,
      title: "Transporter",
      items: ["LTL/FTL Ground", "Carrier Optimization", "Domestic Routing"]
    },
    {
      icon: <ShoppingCart   size={60} />,
      title: "The Market",
      items: ["B2B Distribution", "Retail Fulfillment", "End-User Delivery"]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-900 via-blue-500 to-blue-900 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
            The P2V Logistics Flow
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We treat the journey from manufacturer to market as a precise science, 
            eliminating friction at every touchpoint.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-10 left-[10%] w-[80%] h-0.5 bg-dashed bg-blue-200 " />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group flex flex-col items-center">
   
                <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-2xl flex items-center justify-center text-blue1 shadow-sm group-hover:shadow-md group-hover:border-blue1 group-hover:rotate-3 transition-all duration-300 mb-6 relative">
                  {step.icon}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full flex-grow group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-bold text-gray-900 mb-4 text-center text-md uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <div className="h-0.5 w-8 bg-blue-500 mx-auto mb-4 opacity-40 group-hover:w-16 transition-all" />
                  <ul className="space-y-3">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start text-xs font-medium text-gray-500 uppercase">
                        <ArrowRight className="mr-2 text-blue-400 shrink-0" size={12} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Mobile Arrow (Visible only on small screens between cards) */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden my-6 text-blue-300 animate-bounce">
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