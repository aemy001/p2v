import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  // NOTE: Ideally, these colors and fonts should be added to your tailwind.config.js
  // colors: { surface: '#f8fafc', blue1: '#1e40af', blue2: '#3b82f6' }
  // fontFamily: { poppins: ['Poppins', 'sans-serif'], montserrat: ['Montserrat', 'sans-serif'] }
  
  const steps = [
    {
      id: "01",
      title: "Manufacturer",
      // Image: Factory / Industrial Production (3D Style)
      image: "https://img.freepik.com/free-psd/3d-illustration-factory-building_23-2149375176.jpg?w=740&t=st=1705560000~exp=1705560600~hmac=placeholder", 
      // Fallback valid URL for demo
      fallbackImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
      items: ["Domestic Inbound", "Import Receiving", "Supply Chain Entry"]
    },
    {
      id: "02",
      title: "Packaging (VAS)",
      // Image: Cardboard Box / Packing (Clean Studio)
      fallbackImage: "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=1000&auto=format&fit=crop",
      items: ["Kitting & Assembly", "Value-Added Services", "Compliance Labeling"]
    },
    {
      id: "03",
      title: "3PL Warehousing",
      // Image: Warehouse Interior / Shelves
      fallbackImage: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1000&auto=format&fit=crop",
      items: ["Strategic Storage", "Inventory Science", "Inventory Audit"]
    },
    {
      id: "04",
      title: "Transporter",
      // Image: Delivery Truck (Toy/Model style looks very 3D)
      fallbackImage: "https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1000&auto=format&fit=crop",
      items: ["LTL/FTL Ground", "Carrier Optimization", "Domestic Routing"]
    },
    {
      id: "05",
      title: "The Market",
      // Image: Shopping Cart / Store
      fallbackImage: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop",
      items: ["B2B Distribution", "Retail Fulfillment", "End-User Delivery"]
    }
  ];

  return (
    // Applied surface color #f8fafc
    <section id="how-it-works" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Decoration - Using blue1 and blue2 for gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1e40af] opacity-20" />
      
      {/* Subtle Grid Background - Using blue1 for dots */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(#1e40af 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          {/* Main Heading: Montserrat, blue1 */}
          <h2 className="text-4xl md:text-5xl font-black font-['Montserrat'] text-[#1e40af] mb-6 tracking-tight">
            The PVL Workflow
          </h2>
          {/* Body Text: Poppins */}
          <p className="text-xl font-['Poppins'] text-gray-600 max-w-2xl mx-auto">
            From manufacturing to the market, we&apos;ve engineered a frictionless journey for your products.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Dashed Line - Using blue2 with opacity */}
          <div className="hidden md:block absolute top-[60px] left-[10%] w-[80%] h-1 border-t-2 border-dashed border-[#3b82f6]/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group flex flex-col items-center">
                
                {/* 3D Image Container */}
                {/* Border uses surface color to blend in */}
                <div className="w-32 h-32 md:w-36 md:h-36 bg-white rounded-full shadow-lg border-4 border-[#f8fafc] flex items-center justify-center relative z-10 mb-8 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden">
                   {/* Background Circle tint using blue1 */}
                   <div className="absolute inset-0 bg-[#1e40af] opacity-5"></div>
                   
                   {/* THE IMAGE */}
                   <img 
                    src={step.fallbackImage} 
                    alt={step.title}
                    className="w-full h-full object-cover p-1 rounded-full group-hover:scale-110 transition-transform duration-700"
                   />
                   
                   {/* Number Badge - Using blue2 */}
                   <div className="absolute bottom-0 bg-[#3b82f6] text-white text-xs font-bold px-3 py-0.5 rounded-t-lg shadow-sm font-['Montserrat']">
                     {step.id}
                   </div>
                </div>

                {/* Card Content */}
                {/* Hover border uses blue2 with opacity */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full flex-grow group-hover:shadow-xl group-hover:border-[#3b82f6]/20 transition-all duration-300 relative text-center">
                  
                  {/* Hover Line Top - Using blue2 */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#3b82f6] transition-all duration-300 group-hover:w-full rounded-t-2xl" />

                  {/* Card Title: Montserrat, blue1 (on hover blue2) */}
                  <h3 className="font-extrabold font-['Montserrat'] text-gray-900 mb-4 text-lg leading-tight group-hover:text-[#3b82f6] transition-colors">
                    {step.title}
                  </h3>
                  
                  {/* Divider - Hover uses blue2 with opacity */}
                  <div className="h-px w-12 bg-gray-200 mx-auto mb-4 group-hover:w-24 group-hover:bg-[#3b82f6]/50 transition-all duration-500" />
                  
                  {/* List Items: Poppins */}
                  <ul className="space-y-2 text-left inline-block font-['Poppins']">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {/* Arrow Icon - Using blue2 */}
                        <ArrowRight className="mr-2 text-[#3b82f6] shrink-0 mt-0.5" size={12} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Mobile Arrow - Using blue2 with opacity */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden my-6 text-[#3b82f6]/50 animate-bounce">
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