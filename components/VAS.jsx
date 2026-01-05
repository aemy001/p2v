import React from 'react';
import { Layers, ClipboardCheck, Microscope, RotateCcw, BoxSelect, Construction } from 'lucide-react';

const ValueAddedServices = () => {
  const services = [
    {
      icon: <Layers className="text-blue1" size={28} />,
      title: "Kitting & Assembly",
      description: "Transformation of individual components into finished Parent SKUs. Precision bundling for subscription boxes and B2B promotional sets."
    },
    {
      icon: <ClipboardCheck className="text-blue1" size={28} />,
      title: "Compliance Labeling",
      description: "UCC-128 and retail-specific barcoding. We ensure your inventory meets the strict routing guides of major big-box retailers to eliminate chargebacks."
    },
    {
      icon: <Construction className="text-blue1" size={28} />,
      title: "Trade Show Pre-Staging",
      description: "White-glove event logistics. We inspect, clean, and pre-assemble booth components to ensure a zero-defect setup at your next industry event."
    },
    {
      icon: <Microscope className="text-blue1" size={28} />,
      title: "QA/QI Inspection",
      description: "In-depth technical audits. We act as your eyes at the port of entry, performing functional testing and defect screening before products hit the market."
    },
    {
      icon: <BoxSelect className="text-blue1" size={28} />,
      title: "DIM Weight Optimization",
      description: "The science of packaging. We engineer custom boxing solutions to reduce wasted volume and lower your shipping costs through dimensional weight logic."
    },
    {
      icon: <RotateCcw className="text-blue1" size={28} />,
      title: "Reverse Logistics",
      description: "Advanced return management. From grading and refurbishing to restocking, we recover the maximum value from your returned inventory."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-900  text-sm font-bold tracking-[0.2em] uppercase mb-4">
             Beyond Warehousing
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Value-Added <span className="text-blue1">Services.</span>
            </h3>
          </div>
          <p className="text-gray-500 font-medium max-w-sm border-l-2 border-blue1 pl-6">
            P2V does not just store boxes; we refine your supply chain through 
            technical services that increase product value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-3xl overflow-hidden shadow-2xl">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-10 hover:bg-blue-50 transition-colors duration-500 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueAddedServices;