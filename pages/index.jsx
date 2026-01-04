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
  X,ShoppingCart, Factory, Coffee, HeartPulse 
} from "lucide-react";
import HowItWorks from "../components/HowItWorks";
import TestimonialsSection from "@/components/Testimonials";

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
<section className="relative bg-linear-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-32 px-6 overflow-hidden flex items-center justify-center min-h-screen">
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
  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-10" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 z-10" />

  {/* Content */}
  <div className="max-w-7xl text-center relative z-20">
    <div className="mb-8">
      <span className="inline-block px-4 py-2 bg-blue-500/30 border border-blue-300 rounded-full text-sm font-bold uppercase tracking-wider">
        Premier 3PL Provider
      </span>
    </div>
  <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
  Complex <span className="text-blue-300">3PL Logistics.</span> <br /> Made Simple.
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
        onClick={() => scrollToSection("what-is-3pl")}
        className="border-2 border-white text-white px-8 py-3.5 rounded font-bold text-lg hover:bg-white/10 transition-colors"
      >
        Learn About 3PL
      </button>
    </div>
  </div>
</section>




{/* WHAT IS 3PL SECTION */}
<section
  id="what-is-3pl"
  className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
>
  {/* Background decoration */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <div>
        <div className="inline-block mb-4">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
            Understanding 3PL
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
          What is <span className="text-blue-600">3PL?</span>
        </h2>
        
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Third-party logistics (3PL) is the outsourcing of logistics
          operations to a specialized provider. At P2V, we manage your
          entire supply chain from receiving inventory to delivering
          products to customers.
        </p>
        
        <p className="text-gray-600 leading-relaxed mb-10">
          Rather than managing warehousing, transportation, and
          fulfillment yourself, you partner with P2V. This allows your
          team to focus on what you do best: growing your business and
          serving customers.
        </p>
        
        <div className="space-y-5">
          <div className="flex gap-4 items-start group">
            <div className="shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Reduce Operational Burden</h4>
              <p className="text-gray-600 text-sm">Outsource complex logistics tasks and eliminate overhead</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start group">
            <div className="shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Improve Fulfillment Accuracy</h4>
              <p className="text-gray-600 text-sm">Precision processes that minimize errors and maximize efficiency</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start group">
            <div className="shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Focus on Core Business</h4>
              <p className="text-gray-600 text-sm">Let P2V handle the logistics while you drive growth</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Grid */}
<div className="grid grid-cols-2 gap-6 auto-rows-fr">
  {/* Card 01 */}
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group h-full">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
      <span className="text-2xl font-black text-blue-600">01</span>
    </div>
    <h3 className="font-bold text-gray-900 text-lg mb-2">
      Receiving
    </h3>
    <p className="text-sm text-gray-600 leading-relaxed">
      Inventory intake and thorough inspection processes
    </p>
  </div>

  {/* Card 02 */}
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group h-full translate-y-6">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
      <span className="text-2xl font-black text-blue-600">02</span>
    </div>
    <h3 className="font-bold text-gray-900 text-lg mb-2">
      Warehousing
    </h3>
    <p className="text-sm text-gray-600 leading-relaxed">
      Secure, climate-controlled storage solutions
    </p>
  </div>

  {/* Card 03 */}
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group h-full">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
      <span className="text-2xl font-black text-blue-600">03</span>
    </div>
    <h3 className="font-bold text-gray-900 text-lg mb-2">
      Pick & Pack
    </h3>
    <p className="text-sm text-gray-600 leading-relaxed">
      Accurate order preparation with quality control
    </p>
  </div>

  {/* Card 04 */}
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group h-full translate-y-6">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
      <span className="text-2xl font-black text-blue-600">04</span>
    </div>
    <h3 className="font-bold text-gray-900 text-lg mb-2">
      Shipping
    </h3>
    <p className="text-sm text-gray-600 leading-relaxed">
      Fast, coordinated delivery to your customers
    </p>
  </div>
</div>

    </div>
  </div>
</section>

   
    <HowItWorks/>

   
      <section
        id="benefits"
        className="py-24 bg-linear-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-blue-900 mb-4">
              Why Choose 3PL with P2V?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partner with P2V and unlock key advantages for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Save Time & Money */}
            <div className="bg-white rounded-xl p-10 border border-gray-200 hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Save Time & Money
              </h3>
              <p className="text-gray-700 mb-4">
                Reduce operational costs by outsourcing complex logistics. Gain
                access to carrier networks and negotiated rates that would be
                difficult to secure independently. Focus your team on
                revenue-generating activities.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle
                    size={20}
                    className="text-green-600 shrink-0"
                  />{" "}
                  Lower warehousing costs
                </li>
                <li className="flex gap-2">
                  <CheckCircle
                    size={20}
                    className="text-green-600 shrink-0"
                  />{" "}
                  Reduced capital investment
                </li>
                <li className="flex gap-2">
                  <CheckCircle
                    size={20}
                    className="text-green-600 shrink-0"
                  />{" "}
                  Improved cash flow
                </li>
              </ul>
            </div>

            {/* Expertise & Networks */}
            <div className="bg-white rounded-xl p-10 border border-gray-200 hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Access Expertise & Networks
              </h3>
              <p className="text-gray-700 mb-4">
                Tap into P2V&apos;s deep industry knowledge and established carrier
                relationships. Our team brings years of logistics experience and
                best practices refined across multiple client partnerships.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle
                    size={20}
                    className="text-green-600 shrink-0"
                  />{" "}
                  Industry-specific insights
                </li>
                <li className="flex gap-2">
                  <CheckCircle
                    size={20}
                    className="text-green-600 shrink-0"
                  />{" "}
                  Carrier partnerships
                </li>
                <li className="flex gap-2">
                  <CheckCircle
                    size={20}
                    className="text-green-600 shrink-0"
                  />{" "}
                  Advanced technology
                </li>
              </ul>
            </div>

            {/* Streamline Workflows */}
            <div className="bg-white rounded-xl p-10 border border-gray-200 hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Package className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Streamline Fulfillment Workflows
              </h3>
              <p className="text-gray-700 mb-4">
                Eliminate manual processes and paper-based order management. Our
                integrated technology platform centralizes inventory, orders,
                and shipments for seamless execution.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle
                    size={20}
                    className="text-green-600 shrink-0"
                  />{" "}
                  Automated order processing
                </li>
                <li className="flex gap-2">
                  <CheckCircle
                    size={20}
                    className="text-green-600 shrink-0"
                  />{" "}
                  Real-time inventory sync
                </li>
                <li className="flex gap-2">
                  <CheckCircle
                    size={20}
                    className="text-green-600 shrink-0"
                  />{" "}
                  System integrations
                </li>
              </ul>
            </div>

            {/* Improve Satisfaction */}
            <div className="bg-white rounded-xl p-10 border border-gray-200 hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Improve Customer Satisfaction
              </h3>
              <p className="text-gray-700 mb-4">
                Faster, more accurate fulfillment leads to happier customers.
                With P2V handling logistics, orders arrive on time and in
                perfect condition, every time.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle
                    size={20}
                    className="text-green-600 shrink-0"
                  />{" "}
                  Faster delivery times
                </li>
                <li className="flex gap-2">
                  <CheckCircle
                    size={20}
                    className="text-green-600 shrink-0"
                  />{" "}
                  Higher fulfillment accuracy
                </li>
                <li className="flex gap-2">
                  <CheckCircle
                    size={20}
                    className="text-green-600 shrink-0"
                  />{" "}
                  Professional handling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* P2V VALUE PROPOSITION */}
    <section
  className="relative py-20 text-white bg-cover bg-center"
  style={{ backgroundImage: "url('/topography.svg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-900/95" />

  <div className="relative max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-black mb-12">What Sets P2V Apart</h2>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Left content */}
      <div className="space-y-6">
        {[
          {
            title: "3PL Focus with Operational Clarity",
            desc: "We specialize exclusively in 3PL services, bringing deep expertise and proven processes.",
          },
          {
            title: "Strategic Partnership Approach",
            desc: "We operate as an extension of your business, aligned to long-term outcomes.",
          },
          {
            title: "Highly Responsive Support",
            desc: "Direct access to experienced operators with hands-on execution.",
          },
          {
            title: "Industry-Specific Handling",
            desc: "Sector-aligned workflows with compliance and best practices baked in.",
          },
        ].map((item, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <CheckCircle size={24} className="text-blue-900" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-blue-100">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right quote card */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-10 flex flex-col justify-center border border-white/10">
        <p className="text-xl leading-relaxed text-blue-100 mb-6">
          &quot;P2V combines logistics science with business pragmatism. We do not just
          move freight. We align operations with margins, growth targets, and
          customer expectations.&quot;
        </p>
        <p className="font-bold text-blue-300">P2V Leadership Team</p>
      </div>
    </div>
  </div>
</section>


      {/* Services WE SUPPORT */}
 <section id="Services" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-6">
      
      <h2 className="text-4xl font-black text-blue-900 mb-4">
        Industries We Serve
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
 Sector-specific supply chain strategies built around your operational needs and constraints.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      {/* Retail Distribution */}
      <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
          <ShoppingCart className="text-blue-600 w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Retail Distribution</h3>
        <p className="text-gray-600 leading-relaxed">
          From e-commerce fulfillment to wholesale distribution, we handle high-volume orders with precision. Scale confidently with our multi-channel solutions designed for retail velocity.
        </p>
      </div>

      {/* Manufacturing Supply */}
      <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
          <Factory className="text-blue-600 w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Supply</h3>
        <p className="text-gray-600 leading-relaxed">
          Support your production line with just-in-time delivery and optimized supply chain management. We keep your operations running smoothly with reliable component warehousing and parts distribution.
        </p>
      </div>

      {/* Event & Project Logistics */}
      <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
          <Package className="text-blue-600 w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Event & Project Logistics</h3>
        <p className="text-gray-600 leading-relaxed">
          Execute flawless events with our specialized logistics for tradeshows, exhibitions, and product launches. We thrive on high-intensity timelines and complex coordination requirements.
        </p>
      </div>

      {/* Seasonal Operations */}
      <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
          <TrendingUp className="text-blue-600 w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Seasonal Operations</h3>
        <p className="text-gray-600 leading-relaxed">
          Navigate peak seasons with confidence through our flexible capacity and surge handling capabilities. Our scalable solutions adapt to your demand fluctuations without compromising quality.
        </p>
      </div>

      {/* Food & Beverage */}
      <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
          <Coffee className="text-blue-600 w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Food & Beverage</h3>
        <p className="text-gray-600 leading-relaxed">
          Maintain product integrity with our temperature-controlled facilities and compliance-focused handling. We understand the unique requirements of food and beverage logistics from storage to delivery.
        </p>
      </div>

      {/* Health & Wellness */}
      <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
          <HeartPulse className="text-blue-600 w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Health & Wellness</h3>
        <p className="text-gray-600 leading-relaxed">
          Navigate complex regulations with confidence through our compliant handling of supplements, health products, and wellness items. Quality inspection and secure protocols are built into every process.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* TESTIMONIALS */}
     <TestimonialsSection/>

      {/* CTA SECTION */}
      <section className="py-24 bg-linear-to-r from-blue-900 to-blue-800 text-white">
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
                    onClick={() => scrollToSection("what-is-3pl")}
                    className="hover:text-blue-400 transition"
                  >
                   About Us
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
            <p>
              &copy; 2026 P2V Logistics. 
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
