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
import Benefits from "@/components/Benefits";
import VAS from "@/components/VAS";

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
            Complex <span className="text-blue-300">3PL Logistics,</span> <br />{" "}
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
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#1e3a8a 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

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
                Third-party logistics (3PL) is the strategic outsourcing of
                supply chain operations. At P2V, we treat this as a{" "}
                <span className="font-bold text-blue-900">
                  formula for efficiency
                </span>
                , we manage your entire supply chain from receiving inventory to
                delivering products to end markets or retail channels.
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

            {/* Right Grid: The 4 Pillars of P2V   */}
            <div className="grid grid-cols-2 gap-6 auto-rows-fr">
              {/* Card 01: Receiving */}
              <div
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group h-full 
 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50/50 rounded-bl-full flex items-center justify-center">
                  <span className="text-sm   font-bold text-blue-300 group-hover:text-blue1 transition-colors">
                    01
                  </span>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue1 group-hover:text-white transition-all duration-300">
                  <svg
                    id="Outline"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 64 64"
                    width="40px"
                    height="40px"
                    className="group-hover:fill-white transition-colors"
                  >
                    <path d="M56.77002,42.37l-8.77002-10.72998v-3.64001c0-.54999-.45001-1-1-1h-6v-3c0-.54999-.45001-1-1-1h-5.28003l.24005-1.54004c.13995-.85999-.11005-1.72998-.67999-2.39996-.58002-.66998-1.42004-1.06-2.31006-1.06h-7.81995v-7c0-2.21002-1.82001-4-4.05005-4-1.10999,0-2.01996.89996-2.01996,2v5c0,1.88-1.33002,3.44-3.11005,3.87-.06-.48999-.45996-.87-.96997-.87h-6c-.54999,0-1,.45001-1,1v14c0,.54999.45001,1,1,1h3v12c-.54999,0-1,.45001-1,1v3c-.54999,0-1,.45001-1,1v4c0,.54999.45001,1,1,1h4.56c.69,1.19,1.97003,2,3.44,2s2.75-.81,3.44-2h3.12c.69,1.19,1.97003,2,3.44,2s2.75-.81,3.44-2h13.12c.69,1.19,1.97003,2,3.44,2s2.75-.81,3.44-2h4.56c.54999,0,1-.45001,1-1v-11c0-.23004-.08002-.45001-.22998-.63ZM53.89001,42h-7.89001v-9h.53003l7.35999,9ZM41,29h5v2h-5v-2ZM15,19.90997c2.88-.46997,5.08002-2.94,5.08002-5.90997l.01996-5c1.13,0,2.05005.89996,2.05005,2v8c0,.54999.44995,1,1,1h8.81995c.30005,0,.59003.13.79004.35999.19.21997.27002.5.22998.78998l-1.27997,8.15002c-.15002.98999-1,1.70001-2.02002,1.70001h-9.35999l-1.82001-.90002c-.14001-.06-.29004-.09998-.44-.09998h-3.07001v-10.09003ZM15,32h2.83002l1.82996.89996c.14001.06.29004.10004.44.10004h9.59003c2.01001,0,3.69-1.42999,4-3.39001l.71997-4.60999h4.59003v20H13v-12h1c.54999,0,1-.45001,1-1ZM9,31v-12h4v12h-4ZM14,53h-3v-2h3.56c-.34998.58997-.56,1.26996-.56,2ZM18,55c-1.09998,0-2-.90002-2-2,0-1.10004.90002-2,2-2s2,.89996,2,2c0,1.09998-.90002,2-2,2ZM24,53h-2c0-.73004-.21002-1.41003-.56-2h3.12c-.34998.58997-.56,1.26996-.56,2ZM28,55c-1.09998,0-2-.90002-2-2,0-1.10004.90002-2,2-2s2,.89996,2,2c0,1.09998-.90002,2-2,2ZM12,49v-2h27v2H12ZM44,53h-12c0-.73004-.21002-1.41003-.56-2h13.12c-.34998.58997-.56,1.26996-.56,2ZM48,55c-1.09998,0-2-.90002-2-2,0-1.10004.90002-2,2-2s2,.89996,2,2c0,1.09998-.90002,2-2,2ZM55,53h-3c0-.73004-.21002-1.41003-.56-2h3.56v2ZM55,49h-14v-16h3v10c0,.54999.45001,1,1,1h10v5Z" />
                    <path d="M26,41h-10c-.55273,0-1,.44727-1,1s.44727,1,1,1h10c.55273,0,1-.44727,1-1s-.44727-1-1-1Z" />
                    <path d="M16,39h6c.55273,0,1-.44727,1-1s-.44727-1-1-1h-6c-.55273,0-1,.44727-1,1s.44727,1,1,1Z" />
                  </svg>
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
                  <span className="text-sm   font-bold text-blue-300 group-hover:text-blue1 transition-colors">
                    02
                  </span>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue1 group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 64 64"
                    width="40px"
                    height="40px"
                    className="group-hover:fill-white transition-colors"
                  >
                    <g>
                      <g id="Outline">
                        <g>
                          <path d="M55.63,22.92875c.30829.12231.65259.07953.92999-.10004.27002-.18994.44-.5.44-.82996v-4.40002c0-.40997-.25-.77002-.63-.92999l-24-9.59998c-.23999-.09003-.5-.09003-.73999,0L7.63,16.66874c-.38.15997-.63.52002-.63.92999v4.40002c0,.32996.16998.64001.44.82996.27002.18005.62.22003.92999.10004l.63-.25v28.32001c-1.09998,0-2,.89996-2,2v2c0,1.09998.90002,2,2,2h46c1.09998,0,2-.90002,2-2v-2c0-1.10004-.90002-2-2-2v-28.32001s.62872.24951.63.25ZM55,54.99876H9v-2h46v2ZM44,31.99876h-12c-.54999,0-1,.45001-1,1v8h-11c-.54999,0-1,.45001-1,1v9h-2v-21h30v21h-2v-18c0-.54999-.45001-1-1-1ZM33,40.99876v-7h10v7h-10ZM43,42.99876v8h-10v-8h10ZM31,42.99876v8h-10v-8h10ZM15,27.99876v-2h34v2H15ZM49,29.99876h1c.54999,0,1-.45001,1-1v-4c0-.54999-.45001-1-1-1H14c-.54999,0-1,.45001-1,1v4c0,.54999.45001,1,1,1h1v21h-4v-29.12l21-8.40002,21,8.40002v29.12h-4v-21ZM32.37,11.46873c-.12-.04999-.23999-.07001-.37-.07001s-.25.02002-.37.07001l-22.63,9.04999v-2.23999l23-9.20001,23,9.20001v2.23999l-22.63-9.04999Z" />
                          <path d="M32,15.99876c-1.6543,0-3,1.3457-3,3s1.3457,3,3,3,3-1.3457,3-3-1.3457-3-3-3ZM32,19.99876c-.55176,0-1-.44873-1-1s.44824-1,1-1,1,.44873,1,1-.44824,1-1,1Z" />
                        </g>
                      </g>
                    </g>
                  </svg>
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
                  <span className="text-sm   font-bold text-blue-300 group-hover:text-blue1 transition-colors">
                    03
                  </span>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue1 group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 64 64"
                    width="40px"
                    height="40px"
                    className="group-hover:fill-white transition-colors"
                  >
                    <g>
                      <g id="Outline">
                        <g>
                          <path d="M57,39.5v-21c0-.38-.21002-.72003-.54999-.89001l-21-10.5c-.28003-.15002-.62-.15002-.90002,0l-21,10.5c-.33997.16998-.54999.51001-.54999.89001v21c0,.38.21002.71997.54999.89001,0,0,21,10.5,21.00002,10.50001.28529.14252.60492.14241.90001,0l3.62-1.81006c.53998,4.46002,4.33002,7.92004,8.92999,7.92004,4.96002,0,9-4.04004,9-9,0-2.54999-1.07001-4.85004-2.78003-6.48999l2.23004-1.12c.33997-.16003.54999-.51001.54999-.89001ZM45.26001,14.25l-18.71002,9.35999c-.01001,0-.02997.02002-.03998.03003l-1.77002-.89001,18.76001-9.38,1.76001.88ZM26,25.62v3.76001l-2-1v-3.76001l2,1ZM35,9.12l6.26001,3.13-18.71002,9.35999c-.01001,0-.02997.02002-.03998.03003l-6.27002-3.14001,18.76001-9.38ZM34,48.38l-19-9.5v-18.76001l7,3.5v5.38c0,.38.21002.71997.54999.89001l4,2c.29585.14793.68081.14701.98004-.04004.28998-.17999.46997-.5.46997-.84998v-4.38l6,3v18.76001ZM35,27.88l-6.26001-3.13,18.76001-9.38,6.26001,3.13-18.76001,9.38ZM55,48c0,3.85999-3.14001,7-7,7s-7-3.14001-7-7,3.14001-7,7-7,7,3.14001,7,7ZM55,38.88l-2.58002,1.28998c-1.31-.73999-2.81-1.16998-4.41998-1.16998-4.57001,0-8.34003,3.41998-8.91998,7.83997l-3.08002,1.54004v-18.76001l19-9.5v18.76001Z" />
                          <path d="M11,9h14c.55273,0,1-.44727,1-1s-.44727-1-1-1h-14c-.55273,0-1,.44727-1,1s.44727,1,1,1Z" />
                          <path d="M8,13h7c.55273,0,1-.44727,1-1s-.44727-1-1-1h-7c-.55273,0-1,.44727-1,1s.44727,1,1,1Z" />
                          <path d="M25,55h-14c-.55273,0-1,.44727-1,1s.44727,1,1,1h14c.55273,0,1-.44727,1-1s-.44727-1-1-1Z" />
                          <path d="M27,51H8c-.55273,0-1,.44727-1,1s.44727,1,1,1h19c.55273,0,1-.44727,1-1s-.44727-1-1-1Z" />
                          <path d="M10,48c0,.55273.44727,1,1,1h9c.55273,0,1-.44727,1-1s-.44727-1-1-1h-9c-.55273,0-1,.44727-1,1Z" />
                          <path d="M8,45h7c.55273,0,1-.44727,1-1s-.44727-1-1-1h-7c-.55273,0-1,.44727-1,1s.44727,1,1,1Z" />
                          <path d="M51.29297,44.79297l-4.29297,4.29297-2.29297-2.29297c-.39062-.39062-1.02344-.39062-1.41406,0s-.39062,1.02344,0,1.41406l3,3c.19531.19531.45117.29297.70703.29297s.51172-.09766.70703-.29297l5-5c.39062-.39062.39062-1.02344,0-1.41406s-1.02344-.39062-1.41406,0Z" />
                        </g>
                      </g>
                    </g>
                  </svg>
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
                  <span className="text-sm   font-bold text-blue-300 group-hover:text-blue1 transition-colors">
                    04
                  </span>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue1 group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 64 64"
                    width="40px"
                    height="40px"
                    className="group-hover:fill-white transition-colors"
                  >
                    <g>
                      <g id="Outline">
                        <g>
                          <path d="M56.83002,43.45001l-6-9c-.17999-.28003-.5-.45001-.83002-.45001h-8c0-1.65002-1.34998-3-3-3h-2V14c0-.10999-.02002-.21002-.04999-.32001l-1.54999-4.63c-.40002-1.22998-1.55005-2.04999-2.84003-2.04999H11.44c-1.28998,0-2.44.82001-2.84003,2.04999l-1.54999,4.63c-.02997.10999-.04999.21002-.04999.32001v22c0,1.64996,1.34998,3,3,3h8v12c0,1.64996,1.34998,3,3,3h2.14001c.45001,1.71997,2,3,3.85999,3s3.40997-1.28003,3.85999-3h13.28003c.45001,1.71997,2,3,3.85999,3s3.40997-1.28003,3.85999-3h3.14001c1.09998,0,2-.90002,2-2v-8c0-.20001-.06-.39001-.16998-.54999ZM32.56,9c.42999,0,.81.26996.95001.67999l1.09998,3.32001h-6.89001l-1.32996-4h6.16998ZM19.71997,9h4.56006l1.32996,4h-7.21997l1.32996-4ZM18,15h8v6.22998l-3.48999-2.08997c-.15002-.09003-.33002-.14001-.51001-.14001s-.35999.04999-.51001.14001l-3.48999,2.08997v-6.22998ZM10.48999,9.67999c.14001-.41003.52002-.67999.95001-.67999h6.16998l-1.32996,4h-6.89001l1.09998-3.32001ZM10,37c-.54999,0-1-.45001-1-1V15h7v8c0,.35999.19.69.51001.87.31.17999.70001.16998,1-.01001l4.48999-2.69s4.48895,2.68939,4.48999,2.69c.30676.18378.68982.18445,1,.01001.32001-.17999.51001-.51001.51001-.87v-8h7v21c0,.54999-.45001,1-1,1H10ZM27,55c-1.09998,0-2-.90002-2-2,0-1.10004.90002-2,2-2s2,.89996,2,2c0,1.09998-.90002,2-2,2ZM40,52h-9.14001c-.45001-1.72003-2-3-3.85999-3s-3.40997,1.27997-3.85999,3h-2.14001c-.54999,0-1-.45001-1-1v-12h14c1.65002,0,3-1.35004,3-3v-3h2c.54999,0,1,.45001,1,1v18ZM48,55c-1.09998,0-2-.90002-2-2,0-1.10004.90002-2,2-2s2,.89996,2,2c0,1.09998-.90002,2-2,2ZM55,47h-2c-.54999,0-1,.45001-1,1s.45001,1,1,1h2v3h-3.14001c-.45001-1.72003-2-3-3.85999-3s-3.40997,1.27997-3.85999,3h-2.14001v-16h7.46002l5.53998,8.29999v2.70001Z" />
                          <path d="M48,38h-3c-.55225,0-1,.44775-1,1v5c0,.55225.44775,1,1,1h6c.36035,0,.69287-.19385.87012-.50732.17773-.31348.17285-.69824-.0127-1.00732l-3-5c-.18066-.30127-.50635-.48535-.85742-.48535ZM46,43v-3h1.43359l1.80029,3h-3.23389Z" />
                          <path d="M32,33h-6c-.55225,0-1,.44775-1,1s.44775,1,1,1h6c.55225,0,1-.44775,1-1s-.44775-1-1-1Z" />
                          <path d="M32,29h-6c-.55225,0-1,.44775-1,1s.44775,1,1,1h6c.55225,0,1-.44775,1-1s-.44775-1-1-1Z" />
                        </g>
                      </g>
                    </g>
                  </svg>
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
      <section
        id="science"
        className="py-24 bg-gray-900 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Text Side */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                The Science of <br />
                <span className="text-blue-400">Logistics</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                At Price Value Logistics, we don&apos;t just move freight; we
                engineer outcomes. We view the supply chain as a complex
                equation where{" "}
                <span className="text-white font-bold">
                  Precision + Velocity = Value.
                </span>
              </p>
              <p className="text-gray-400 leading-relaxed">
                By treating logistics as a science, we eliminate the variables
                of human error and replace them with calculated, repeatable
                workflows designed for the US Market.
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

          {/* The 3 Pillars of Logistics Science */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Pillar 1 */}
            <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-xl hover:bg-gray-800 hover:border-blue-500/50 transition duration-300">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                <svg id="Outline" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 64 64" width="40px" height="40px" className="fill-current" >
  <path d="M33,33h-8c-.55273,0-1,.44775-1,1v4c0,.55225.44727,1,1,1h8c.55273,0,1-.44775,1-1v-4c0-.55225-.44727-1-1-1ZM32,37h-6v-2h6v2Z"/>
  <path d="M52,29.29999v-7.29999c0-.16003-.03998-.31-.10999-.45001l-3-6c-.17004-.34003-.51001-.54999-.89001-.54999h-23.06c-.5-4.48999-4.32001-8-8.94-8-4.96002,0-9,4.03998-9,9,0,5.12,5.23999,12.65997,7.34998,15.5-.81.52997-1.34998,1.45001-1.34998,2.5,0,1.64996,1.34998,3,3,3s3-1.35004,3-3c0-1.04999-.53998-1.97003-1.34998-2.5.58997-.81,1.44-1.98999,2.34998-3.38v13.88c0,.54999.45001,1,1,1h24.31c1.73999,3.07996,3.84003,5.53998,3.92999,5.64996.19.22003.47003.35004.76001.35004s.57001-.13.76001-.35004c.25-.29999,6.23999-7.33997,6.23999-12.64996,0-3.15002-2.07001-5.85004-5-6.70001ZM47.38,17l2,4h-7.66003l-1.32996-4h6.98999ZM32,22.15997l1.71997-5.15997h4.56006l1.71997,5.15997v4.35999l-3.63-1.44995c-.12-.05005-.23999-.07001-.37-.07001s-.25.01996-.37.07001l-3.63,1.44995v-4.35999ZM24.92999,17h6.67999l-1.32996,4h-6.45001c.56-1.38.95001-2.73999,1.09998-4ZM16,35c-.54999,0-1-.45001-1-1s.45001-1,1-1,1,.45001,1,1-.45001,1-1,1ZM16,30.34998c-1.96997-2.64996-7-9.83997-7-14.34998,0-3.85999,3.14001-7,7-7s7,3.14001,7,7c0,4.51001-5.03003,11.70001-7,14.34998ZM22,41v-16.20001c.33002-.59003.64001-1.19.94-1.79999h7.06v5c0,.32996.16998.64001.44.82996.27002.18005.63.22003.92999.10004l4.63-1.85004,4.63,1.85004c.12.04999.23999.07001.37.07001.20001,0,.39001-.06.56-.17004.27002-.18994.44-.5.44-.82996v-5h8v6c-3.85999,0-7,3.14001-7,7,0,1.44.44,3.12,1.28998,5h-22.28998ZM50,46.39996c-.82001-1.04999-2.14001-2.85999-3.21997-4.87-1.18005-2.20001-1.78003-4.06-1.78003-5.52997,0-2.76001,2.23999-5,5-5,.28003,0,.56.01996.84003.07996,2.40997.40002,4.15997,2.47003,4.15997,4.92004,0,3.54999-3.44,8.39001-5,10.39996Z"/>
  <path d="M47,36c0,1.6543,1.3457,3,3,3s3-1.3457,3-3-1.3457-3-3-3-3,1.3457-3,3ZM51,36c0,.55127-.44824,1-1,1s-1-.44873-1-1,.44824-1,1-1,1,.44873,1,1Z"/>
  <path d="M50,51c-1.6543,0-3,1.3457-3,3s1.3457,3,3,3,3-1.3457,3-3-1.3457-3-3-3ZM50,55c-.55176,0-1-.44873-1-1s.44824-1,1-1,1,.44873,1,1-.44824,1-1,1Z"/>
  <path d="M21,16c0-2.75684-2.24316-5-5-5s-5,2.24316-5,5,2.24316,5,5,5,5-2.24316,5-5ZM13,16c0-1.6543,1.3457-3,3-3s3,1.3457,3,3-1.3457,3-3,3-3-1.3457-3-3Z"/>
  <path d="M16,43c.55273,0,1-.44775,1-1v-2c0-.55225-.44727-1-1-1s-1,.44775-1,1v2c0,.55225.44727,1,1,1Z"/>
  <path d="M15,48c0,.55225.44727,1,1,1s1-.44775,1-1v-2c0-.55225-.44727-1-1-1s-1,.44775-1,1v2Z"/>
  <path d="M44,53h-2c-.55273,0-1,.44775-1,1s.44727,1,1,1h2c.55273,0,1-.44775,1-1s-.44727-1-1-1Z"/>
  <path d="M38,53h-2c-.55273,0-1,.44775-1,1s.44727,1,1,1h2c.55273,0,1-.44775,1-1s-.44727-1-1-1Z"/>
  <path d="M32,53h-2c-.55273,0-1,.44775-1,1s.44727,1,1,1h2c.55273,0,1-.44775,1-1s-.44727-1-1-1Z"/>
  <path d="M26,53h-2c-.55273,0-1,.44775-1,1s.44727,1,1,1h2c.55273,0,1-.44775,1-1s-.44727-1-1-1Z"/>
  <path d="M20,53h-3v-1c0-.55225-.44727-1-1-1s-1,.44775-1,1v2c0,.55225.44727,1,1,1h4c.55273,0,1-.44775,1-1s-.44727-1-1-1Z"/>
</svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Inbound & Routing Intelligence
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We evaluate inbound schedules and domestic routing data before
                freight reaches the dock, reducing dwell time and preventing
                downstream congestion.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-xl hover:bg-gray-800 hover:border-blue-500/50 transition duration-300">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 text-blue-400">
               <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 64 64" width="40px" height="40px" className="fill-current">
  <g>
    <g id="Outline">
      <g>
        <path d="M55.63,22.92875c.30829.12231.65259.07953.92999-.10004.27002-.18994.44-.5.44-.82996v-4.40002c0-.40997-.25-.77002-.63-.92999l-24-9.59998c-.23999-.09003-.5-.09003-.73999,0L7.63,16.66874c-.38.15997-.63.52002-.63.92999v4.40002c0,.32996.16998.64001.44.82996.27002.18005.62.22003.92999.10004l.63-.25v28.32001c-1.09998,0-2,.89996-2,2v2c0,1.09998.90002,2,2,2h46c1.09998,0,2-.90002,2-2v-2c0-1.10004-.90002-2-2-2v-28.32001s.62872.24951.63.25ZM55,54.99876H9v-2h46v2ZM44,31.99876h-12c-.54999,0-1,.45001-1,1v8h-11c-.54999,0-1,.45001-1,1v9h-2v-21h30v21h-2v-18c0-.54999-.45001-1-1-1ZM33,40.99876v-7h10v7h-10ZM43,42.99876v8h-10v-8h10ZM31,42.99876v8h-10v-8h10ZM15,27.99876v-2h34v2H15ZM49,29.99876h1c.54999,0,1-.45001,1-1v-4c0-.54999-.45001-1-1-1H14c-.54999,0-1,.45001-1,1v4c0,.54999.45001,1,1,1h1v21h-4v-29.12l21-8.40002,21,8.40002v29.12h-4v-21ZM32.37,11.46873c-.12-.04999-.23999-.07001-.37-.07001s-.25.02002-.37.07001l-22.63,9.04999v-2.23999l23-9.20001,23,9.20001v2.23999l-22.63-9.04999Z"/>
        <path d="M32,15.99876c-1.6543,0-3,1.3457-3,3s1.3457,3,3,3,3-1.3457,3-3-1.3457-3-3-3ZM32,19.99876c-.55176,0-1-.44873-1-1s.44824-1,1-1,1,.44873,1,1-.44824,1-1,1Z"/>
      </g>
    </g>
  </g>
</svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Warehouse Structure & Density
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our warehouse layouts are engineered to balance storage density
                with accessibility, keeping long-term contract logistics
                efficient and scalable.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-xl hover:bg-gray-800 hover:border-blue-500/50 transition duration-300">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 text-blue-400">
             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 64 64" width="40px" height="40px" className="fill-current">
  <g>
    <g id="Outline">
      <g>
        <path d="M56.83002,35.45001l-6-9c-.17999-.28003-.5-.45001-.83002-.45001h-10v-4c0-1.65002-1.34998-3-3-3h-15.81l-1.71002-.67999,2.36995-3.78997c.4054-.6483-.09198-1.53004-.84993-1.53004h-6c-.39001,0-.73999.21997-.90997.57996l-2.54004,5.42004h-1.54999c-1.65002,0-3,1.34998-3,3v23c0,1.64996,1.34998,3,3,3h3.14001c.45001,1.71997,2,3,3.85999,3s3.40997-1.28003,3.85999-3h5.28003c.45001,1.71997,2,3,3.85999,3s3.40997-1.28003,3.85999-3h10.28003c.45001,1.71997,2,3,3.85999,3s3.40997-1.28003,3.85999-3h3.14001c1.09998,0,2-.90002,2-2v-10c0-.20001-.06-.39001-.16998-.54999ZM15.64001,15h3.56s-2.0449,3.26185-2.05002,3.27001c-.32852.52413-.08888,1.232.48001,1.45997l2.71997,1.09003-4.31995,5.17999.93994-3.76001c.12006-.47998-.12994-.97998-.59998-1.16998l-3.02002-1.20001,2.29004-4.87ZM17,49c-1.09998,0-2-.90002-2-2,0-1.10004.90002-2,2-2s2,.89996,2,2c0,1.09998-.90002,2-2,2ZM30,49c-1.09998,0-2-.90002-2-2,0-1.10004.90002-2,2-2s2,.89996,2,2c0,1.09998-.90002,2-2,2ZM38,46h-4.14001c-.45001-1.72003-2-3-3.85999-3s-3.40997,1.27997-3.85999,3h-5.28003c-.45001-1.72003-2-3-3.85999-3s-3.40997,1.27997-3.85999,3h-3.14001c-.54999,0-1-.45001-1-1v-4h29v5ZM38,39H9v-17c0-.54999.45001-1,1-1h1.21997c.11005.14001.24005.26001.41003.32996l3.19,1.27002-1.78998,7.16003c-.11005.44995.09998.91998.52014,1.1301.41258.20601.92152.1079,1.21985-.25009l8-9.60004c.01001-.01001.01001-.02997.01996-.03998h14.21002c.54999,0,1,.45001,1,1v17ZM48,49c-1.09998,0-2-.90002-2-2,0-1.10004.90002-2,2-2s2,.89996,2,2c0,1.09998-.90002,2-2,2ZM55,39h-2c-.54999,0-1,.45001-1,1s.45001,1,1,1h2v5h-3.14001c-.45001-1.72003-2-3-3.85999-3s-3.40997,1.27997-3.85999,3h-4.14001v-18h9.46002l5.53998,8.29999v2.70001Z"/>
        <path d="M48,30h-5c-.55225,0-1,.44727-1,1v5c0,.55273.44775,1,1,1h8c.36035,0,.69287-.19336.87012-.50684.17773-.31445.17285-.69922-.0127-1.00781l-3-5c-.18066-.30078-.50635-.48535-.85742-.48535ZM44,35v-3h3.43359l1.80029,3h-5.23389Z"/>
        <path d="M29.70703,23.29297c-.39062-.39062-1.02344-.39062-1.41406,0s-.39062,1.02344,0,1.41406l5.29297,5.29297-5.29297,5.29297c-.39062.39062-.39062,1.02344.00005,1.41411.38716.38711,1.02685.38712,1.41402-.00005.00011-.00011,6-6,6-6,.39062-.39062.39062-1.02344,0-1.41406l-6-6Z"/>
        <path d="M27,31h-9c-.55225,0-1,.44727-1,1s.44775,1,1,1h9c.55225,0,1-.44727,1-1s-.44775-1-1-1Z"/>
        <path d="M24,35h-9c-.55225,0-1,.44727-1,1s.44775,1,1,1h9c.55225,0,1-.44727,1-1s-.44775-1-1-1Z"/>
      </g>
    </g>
  </g>
</svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Execution Speed & Throughput
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We measure performance in seconds. From short-term project
                surges to daily B2B fulfillment, our operations are tuned for
                consistent, repeatable speed.
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
                We specialize in the <strong>American Supply Chain</strong>. We
                provide expert inbound support for imports arriving at US ports
                and comprehensive domestic ground transport.
                <span className="block mt-2 text-sm text-blue-300 opacity-80 italic">
                  Note: We do not handle exports, allowing us to focus 100% on
                  optimizing US-based operations.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <VAS />
      <Benefits />

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
            <div className="relative h-120 rounded-2xl overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/Nationwide.jpg')" }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-slate-900/70" />

              {/* Glass Card */}
              <div className="relative h-full bg-blue/10  rounded-2xl p-12 border border-white/10 flex flex-col justify-between">
                <p className="text-3xl leading-relaxed text-blue-100">
                  “P2V combines logistics science with business pragmatism. We
                  do not just move freight. We align operations with margins,
                  growth targets, and customer expectations.”
                </p>

                <div>
                  <p className="font-bold text-white">P2V Leadership Team</p>
                  <p className="text-blue-300 text-sm">
                    Operations and Strategy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
