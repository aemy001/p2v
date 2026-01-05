import React, { useState } from "react";
import {
  Truck,
  Warehouse,
  Package,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  ShoppingCart,
  Factory,
  Coffee,
  HeartPulse,
  Microscope,  
  Cpu,        
  Layers,      
  Zap,     
  Anchor,    
} from "lucide-react";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/Testimonials";
import Benefits from "@/components/Benefits"
import VAS from "@/components/VAS"

export default function P2VHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* HERO SECTION */}
      <section className="relative bg-linear-to-r from-blue-900 via-blue1 to-blue2 text-white py-32 px-6 overflow-hidden flex items-center justify-center min-h-screen">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-5" />

        {/* Background Blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue1/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 z-10" />

        {/* Content */}
        <div className="max-w-7xl text-center relative z-20">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-500/30 border border-blue-300 rounded-full text-sm font-bold uppercase tracking-wider">
              Premier 3PL Provider
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
            Complex <span className="text-blue-300">3PL Logistics.</span> <br />{" "}
            Made Simple.
          </h1>
          <p className="max-w-2xl text-xl text-blue-100 leading-relaxed mb-10 mx-auto">
            Helping businesses streamline logistics with precision and
            expertise. We handle warehousing, transportation, fulfillment, and
            returns so you can focus on growth.
          </p>
          <div className="flex items-center justify-center flex-col sm:flex-row gap-4">
            <a
              href="mailto:contact@p2vlogistics.com"
              className="bg-blue-400 text-blue-900 px-8 py-4 rounded font-bold text-lg hover:bg-white transition-colors inline-block text-center"
            >
              Contact Us
            </a>
            <button
              onClick={() => scrollToSection("science")}
              className="border-2 border-white text-white px-8 py-3.5 rounded font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Our Methodology
            </button>
          </div>
        </div>
      </section>

   

    
 {/* WHAT IS 3PL SECTION */}
<section
  id="what-is-3pl"
  className="py-24 bg-linear-to-br from-gray-50 to-white relative overflow-hidden"
>
  {/* Decorative Technical Grid Background */}
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
  
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Content: The Definition */}
      <div>
       

        <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
          What is <span className="text-blue1">3PL?</span>
        </h2>

        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Third-party logistics (3PL) is the strategic outsourcing of supply chain operations. 
          At P2V, we treat this as a <span className="font-bold text-blue-900">formula for efficiency</span>, 
          we manage your entire supply chain from receiving inventory to delivering products to end markets or retail channels.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Rather than managing warehousing, transportation, and
                fulfillment yourself, you partner with P2V. This allows your
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
                Optimized ground-only logistics for the US market. No rail, no exports—just pure domestic speed.
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
                Expert support for inbound port shipments and customs assistance for your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Grid: The 4 Pillars of P2V   */}
      <div className="grid grid-cols-2 gap-6 auto-rows-fr">
        {/* Card 01: Receiving */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group h-full 
 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50/50 rounded-bl-full flex items-center justify-center">
            <span className="text-sm   font-bold text-blue-300 group-hover:text-blue1 transition-colors">01</span>
          </div>
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue1 group-hover:text-white transition-all duration-300">
             <Package size={24} />
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">
            Inbound Intake
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed uppercase font-semibold">
            Port-to-Warehouse / Quality Assurance / SKU Assignment
          </p>
        </div>

        {/* Card 02: Warehousing */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50/50 rounded-bl-full flex items-center justify-center">
            <span className="text-sm   font-bold text-blue-300 group-hover:text-blue1 transition-colors">02</span>
          </div>
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue1 group-hover:text-white transition-all duration-300">
             <Warehouse size={24} />
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">
            Smart Storage
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed uppercase font-semibold">
            Climate Control / Long-term Contract / Short-term Project
          </p>
        </div>

        {/* Card 03: Order Processing */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50/50 rounded-bl-full flex items-center justify-center">
            <span className="text-sm   font-bold text-blue-300 group-hover:text-blue1 transition-colors">03</span>
          </div>
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue1 group-hover:text-white transition-all duration-300">
             <TrendingUp size={24} />
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">
            Order Fulfillment 
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed uppercase font-semibold">
            Kitting & Assembly / Trade Show Prep / VAS Execution
          </p>
        </div>

        {/* Card 04: Shipping */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50/50 rounded-bl-full flex items-center justify-center">
            <span className="text-sm   font-bold text-blue-300 group-hover:text-blue1 transition-colors">04</span>
          </div>
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue1 group-hover:text-white transition-all duration-300">
             <Truck size={24} />
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">
            Ground Velocity
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed uppercase font-semibold">
            LTL & FTL Distribution / B2B Last-Mile / Domestic Only
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      <HowItWorks />
  <section id="science" className="py-24 bg-gray-900 text-white relative overflow-hidden">
    
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            
            {/* Text Side */}
            <div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                The Science of <br/>
                <span className="text-blue-400">Logistics</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                At Price Value Logistics, we don&apos;t just move freight; we engineer outcomes. 
                We view the supply chain as a complex equation where <span className="text-white font-bold">Precision + Velocity = Value.</span>
              </p>
              <p className="text-gray-400 leading-relaxed">
                By treating logistics as a science, we eliminate the variables of human error 
                and replace them with calculated, repeatable workflows designed for the US Market.
              </p>
            </div>
 
            <div className="relative">
             
              <div className="absolute -inset-4 border-2 border-blue-500/20 rounded-xl"></div> 
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl border border-gray-700 aspect-video flex items-center justify-center relative group">
                <img 
                  src="/image-two.jpg" 
                  alt="Logistics Data Flow and Warehouse Architecture" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* The 3 Pillars of Science */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Pillar 1 */}
            <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-xl hover:bg-gray-800 hover:border-blue-500/50 transition duration-300">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Predictive Optimization</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We analyze routing data to identify the most efficient path for your goods before they even hit the dock.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-xl hover:bg-gray-800 hover:border-blue-500/50 transition duration-300">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Structural Integrity</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our warehouse management maximizes density and accessibility to ensure long-term Contract Logistics remain cost-effective.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-xl hover:bg-gray-800 hover:border-blue-500/50 transition duration-300">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Operational Velocity</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We measure success in seconds. Whether it&apos;s a short-term Project Logistics burst or daily B2B distribution, we are tuned for speed.
              </p>
            </div>
          </div>

          {/* Import/Domestic Callout Box */}
          <div className="bg-blue-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-blue2">
            <div className="shrink-0 bg-white/10 p-4 rounded-full">
              <Anchor size={40} className="text-blue-300" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Domestic Mastery</h3>
              <p className="text-blue-100 max-w-2xl">
                We specialize in the <strong>American Supply Chain</strong>. We provide expert inbound support for imports arriving at US ports and comprehensive domestic ground transport. 
                <span className="block mt-2 text-sm text-blue-300 opacity-80 italic">Note: We do not handle exports, allowing us to focus 100% on optimizing US-based operations.</span>
              </p>
            </div>
          </div>

        </div>
      </section>
      <VAS/>
     <Benefits/>

      {/* P2V VALUE PROPOSITION */}
  
<section
  className="relative py-24 bg-cover bg-center"
  style={{ backgroundImage: "url('/topography.svg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-900/95" />

  <div className="relative max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="max-w-3xl mb-16">
      <h2 className="text-4xl font-black text-white mb-4">
        What Sets P2V Apart
      </h2>
      <p className="text-blue-200 text-lg">
        Purpose-built 3PL execution backed by operational discipline and
        commercial clarity.
      </p>
    </div>

    {/* Content */}
    <div className="grid lg:grid-cols-2 gap-12 items-stretch">
      {/* Left Cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          {
            title: "3PL Focus with Operational Clarity",
            desc: "Exclusive focus on third-party logistics with proven operating models.",
          },
          {
            title: "Strategic Partnership Approach",
            desc: "Embedded collaboration aligned to long-term growth and margin outcomes.",
          },
          {
            title: "Highly Responsive Support",
            desc: "Direct access to senior operators, not ticket-based support layers.",
          },
          {
            title: "Industry-Specific Handling",
            desc: "Compliance-first workflows tailored by sector and cargo profile.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-400 flex items-center justify-center mb-4">
              <CheckCircle size={22} className="text-blue-900" />
            </div>

            <h3 className="text-white font-bold text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Right Statement Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/10 flex flex-col justify-between">
        <p className="text-2xl leading-relaxed text-blue-100">
          “P2V combines logistics science with business pragmatism.
          We do not just move freight. We align operations with margins,
          growth targets, and customer expectations.”
        </p>

        <div className="mt-8">
          <p className="font-bold text-white">P2V Leadership Team</p>
          <p className="text-blue-300 text-sm">Operations and Strategy</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Services WE SUPPORT */}
      {/* <section id="Services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-black text-blue-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sector-specific supply chain strategies built around your
              operational needs and constraints.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <ShoppingCart className="text-blue1 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Retail Distribution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From commercial supply chain to wholesale distribution, we
                handle high-volume orders with precision. Scale confidently with
                our multi-channel solutions designed for retail velocity.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <Factory className="text-blue1 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Manufacturing Supply
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Support your production line with just-in-time delivery and
                optimized supply chain management. We keep your operations
                running smoothly with reliable component warehousing and parts
                distribution.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <Package className="text-blue1 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Event & Project Logistics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Execute flawless events with our specialized logistics for
                tradeshows, exhibitions, and product launches. We thrive on
                high-intensity timelines and complex coordination requirements.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <TrendingUp className="text-blue1 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Seasonal Operations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Navigate peak seasons with confidence through our flexible
                capacity and surge handling capabilities. Our scalable solutions
                adapt to your demand fluctuations without compromising quality.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <Coffee className="text-blue1 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Food & Beverage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Maintain product integrity with our temperature-controlled
                facilities and compliance-focused handling. We understand the
                unique requirements of food and beverage logistics from storage
                to delivery.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <HeartPulse className="text-blue1 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Health & Wellness
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Navigate complex regulations with confidence through our
                compliant handling of supplements, health products, and wellness
                items. Quality inspection and secure protocols are built into
                every process.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* CTA SECTION */}
      <section className="py-24 bg-linear-to-r from-blue-900 to-blue1 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let P2V handle your 3PL needs. Direct contact, strategic
            partnerships, proven results.
          </p>
          <a
            href="mailto:contact@p2vlogistics.com"
            className="inline-block bg-blue-400 text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors"
          >
            Get in Touch with P2V
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-black mb-4 text-blue-400">P2V</h3>
              <p className="text-gray-400">
                Premier 3PL provider delivering logistics excellence with
                precision and expertise.
              </p>
              <p className="text-gray-500 text-sm mt-4">
                USA Domestic Logistics Only.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-200">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="hover:text-blue-400 transition"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("science")}
                    className="hover:text-blue-400 transition"
                  >
                    Methodology
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("benefits")}
                    className="hover:text-blue-400 transition"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("Services")}
                    className="hover:text-blue-400 transition"
                  >
                    Services
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-200">Contact P2V</h4>
              <p className="text-gray-400 mb-2">
                Direct communication for personalized logistics solutions.
              </p>
              <p className="text-blue-400 font-bold mb-2">
                Phone: +1 (555) 000-0000
              </p>
              <a
                href="mailto:contact@p2vlogistics.com"
                className="text-blue-400 font-bold hover:text-blue-300"
              >
                Email: contact@p2vlogistics.com
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2026 P2V Logistics.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}