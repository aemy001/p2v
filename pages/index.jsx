import React, { useState } from "react";
import { CheckCircle, Anchor } from "lucide-react";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import VAS from "@/components/VAS";
import Footer from "@/components/Footer";
import WhatIs3PL from "@/components/WhatIs3pl";

export default function PVLHome() {
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
      <section className="relative text-white py-32 px-6 overflow-hidden flex items-center justify-center min-h-screen">
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

        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-black/30 via-black/20 to-black/40 z-5 pointer-events-none" />

        <div className="absolute top-0 right-0 w-96 h-96 bg-blue1/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 z-10" />

        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-black/50 via-black/10 to-black/50 z-15 pointer-events-none mix-blend-multiply" />

        <div className="max-w-7xl text-center relative z-20">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-500/30 border border-blue-300 backdrop-blur-xs rounded-full text-sm font-bold uppercase tracking-wider">
              Premier 3PL Provider
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
            Complex <span className="text-blue-300">3PL Logistics,</span> <br />
            Made Simple.
          </h1>
          <p className="max-w-3xl text-xl text-white leading-relaxed mb-10 mx-auto">
            Helping businesses streamline logistics with precision and
            expertise. We handle warehousing, transportation, fulfillment, and
            returns so you can focus on growth.
          </p>
          <div className="flex items-center justify-center flex-col sm:flex-row gap-4">
            <a
              href="mailto:#"
              className="bg-blue-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors inline-block text-center"
            >
              Contact Us
            </a>
            <button
              onClick={() => scrollToSection("science")}
              className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Our Methodology
            </button>
          </div>
        </div>
      </section>

      <WhatIs3PL />

      {/* <HowItWorks /> */}
      <section className="py-30 bg-[#f8fafc]  relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-50 " />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-2">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6 tracking-tight">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We treat the journey from manufacturer to market as a precise
              science, eliminating friction at every touchpoint.
            </p>
          </div>

          <div className="flex justify-center overflow-hidden">
            <img
              src="/howwework.png"
              alt="Price Value Logistics logistics workflow showing step by step process from manufacturer to market"
              className="w-full max-w-7xl object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section
        id="science"
        className="py-24 bg-gray-900 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
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
                  src="/ctabg.jpeg"
                  alt="Logistics Data Flow and Warehouse Architecture"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-xl hover:bg-gray-800 hover:border-blue-500/50 transition duration-300">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                <svg
                  id="Outline"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 64 64"
                  width="40px"
                  height="40px"
                  className="fill-current"
                >
                  <path d="M33,33h-8c-.55273,0-1,.44775-1,1v4c0,.55225.44727,1,1,1h8c.55273,0,1-.44775,1-1v-4c0-.55225-.44727-1-1-1ZM32,37h-6v-2h6v2Z" />
                  <path d="M52,29.29999v-7.29999c0-.16003-.03998-.31-.10999-.45001l-3-6c-.17004-.34003-.51001-.54999-.89001-.54999h-23.06c-.5-4.48999-4.32001-8-8.94-8-4.96002,0-9,4.03998-9,9,0,5.12,5.23999,12.65997,7.34998,15.5-.81.52997-1.34998,1.45001-1.34998,2.5,0,1.64996,1.34998,3,3,3s3-1.35004,3-3c0-1.04999-.53998-1.97003-1.34998-2.5.58997-.81,1.44-1.98999,2.34998-3.38v13.88c0,.54999.45001,1,1,1h24.31c1.73999,3.07996,3.84003,5.53998,3.92999,5.64996.19.22003.47003.35004.76001.35004s.57001-.13.76001-.35004c.25-.29999,6.23999-7.33997,6.23999-12.64996,0-3.15002-2.07001-5.85004-5-6.70001ZM47.38,17l2,4h-7.66003l-1.32996-4h6.98999ZM32,22.15997l1.71997-5.15997h4.56006l1.71997,5.15997v4.35999l-3.63-1.44995c-.12-.05005-.23999-.07001-.37-.07001s-.25.01996-.37.07001l-3.63,1.44995v-4.35999ZM24.92999,17h6.67999l-1.32996,4h-6.45001c.56-1.38.95001-2.73999,1.09998-4ZM16,35c-.54999,0-1-.45001-1-1s.45001-1,1-1,1,.45001,1,1-.45001,1-1,1ZM16,30.34998c-1.96997-2.64996-7-9.83997-7-14.34998,0-3.85999,3.14001-7,7-7s7,3.14001,7,7c0,4.51001-5.03003,11.70001-7,14.34998ZM22,41v-16.20001c.33002-.59003.64001-1.19.94-1.79999h7.06v5c0,.32996.16998.64001.44.82996.27002.18005.63.22003.92999.10004l4.63-1.85004,4.63,1.85004c.12.04999.23999.07001.37.07001.20001,0,.39001-.06.56-.17004.27002-.18994.44-.5.44-.82996v-5h8v6c-3.85999,0-7,3.14001-7,7,0,1.44.44,3.12,1.28998,5h-22.28998ZM50,46.39996c-.82001-1.04999-2.14001-2.85999-3.21997-4.87-1.18005-2.20001-1.78003-4.06-1.78003-5.52997,0-2.76001,2.23999-5,5-5,.28003,0,.56.01996.84003.07996,2.40997.40002,4.15997,2.47003,4.15997,4.92004,0,3.54999-3.44,8.39001-5,10.39996Z" />
                  <path d="M47,36c0,1.6543,1.3457,3,3,3s3-1.3457,3-3-1.3457-3-3-3-3,1.3457-3,3ZM51,36c0,.55127-.44824,1-1,1s-1-.44873-1-1,.44824-1,1-1,1,.44873,1,1Z" />
                  <path d="M50,51c-1.6543,0-3,1.3457-3,3s1.3457,3,3,3,3-1.3457,3-3-1.3457-3-3-3ZM50,55c-.55176,0-1-.44873-1-1s.44824-1,1-1,1,.44873,1,1-.44824,1-1,1Z" />
                  <path d="M21,16c0-2.75684-2.24316-5-5-5s-5,2.24316-5,5,2.24316,5,5,5,5-2.24316,5-5ZM13,16c0-1.6543,1.3457-3,3-3s3,1.3457,3,3-1.3457,3-3,3-3-1.3457-3-3Z" />
                  <path d="M16,43c.55273,0,1-.44775,1-1v-2c0-.55225-.44727-1-1-1s-1,.44775-1,1v2c0,.55225.44727,1,1,1Z" />
                  <path d="M15,48c0,.55225.44727,1,1,1s1-.44775,1-1v-2c0-.55225-.44727-1-1-1s-1,.44775-1,1v2Z" />
                  <path d="M44,53h-2c-.55273,0-1,.44775-1,1s.44727,1,1,1h2c.55273,0,1-.44775,1-1s-.44727-1-1-1Z" />
                  <path d="M38,53h-2c-.55273,0-1,.44775-1,1s.44727,1,1,1h2c.55273,0,1-.44775,1-1s-.44727-1-1-1Z" />
                  <path d="M32,53h-2c-.55273,0-1,.44775-1,1s.44727,1,1,1h2c.55273,0,1-.44775,1-1s-.44727-1-1-1Z" />
                  <path d="M26,53h-2c-.55273,0-1,.44775-1,1s.44727,1,1,1h2c.55273,0,1-.44775,1-1s-.44727-1-1-1Z" />
                  <path d="M20,53h-3v-1c0-.55225-.44727-1-1-1s-1,.44775-1,1v2c0,.55225.44727,1,1,1h4c.55273,0,1-.44775,1-1s-.44727-1-1-1Z" />
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 64 64"
                  width="40px"
                  height="40px"
                  className="fill-current"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 64 64"
                  width="40px"
                  height="40px"
                  className="fill-current"
                >
                  <g>
                    <g id="Outline">
                      <g>
                        <path d="M56.83002,35.45001l-6-9c-.17999-.28003-.5-.45001-.83002-.45001h-10v-4c0-1.65002-1.34998-3-3-3h-15.81l-1.71002-.67999,2.36995-3.78997c.4054-.6483-.09198-1.53004-.84993-1.53004h-6c-.39001,0-.73999.21997-.90997.57996l-2.54004,5.42004h-1.54999c-1.65002,0-3,1.34998-3,3v23c0,1.64996,1.34998,3,3,3h3.14001c.45001,1.71997,2,3,3.85999,3s3.40997-1.28003,3.85999-3h5.28003c.45001,1.71997,2,3,3.85999,3s3.40997-1.28003,3.85999-3h10.28003c.45001,1.71997,2,3,3.85999,3s3.40997-1.28003,3.85999-3h3.14001c1.09998,0,2-.90002,2-2v-10c0-.20001-.06-.39001-.16998-.54999ZM15.64001,15h3.56s-2.0449,3.26185-2.05002,3.27001c-.32852.52413-.08888,1.232.48001,1.45997l2.71997,1.09003-4.31995,5.17999.93994-3.76001c.12006-.47998-.12994-.97998-.59998-1.16998l-3.02002-1.20001,2.29004-4.87ZM17,49c-1.09998,0-2-.90002-2-2,0-1.10004.90002-2,2-2s2,.89996,2,2c0,1.09998-.90002,2-2,2ZM30,49c-1.09998,0-2-.90002-2-2,0-1.10004.90002-2,2-2s2,.89996,2,2c0,1.09998-.90002,2-2,2ZM38,46h-4.14001c-.45001-1.72003-2-3-3.85999-3s-3.40997,1.27997-3.85999,3h-5.28003c-.45001-1.72003-2-3-3.85999-3s-3.40997,1.27997-3.85999,3h-3.14001c-.54999,0-1-.45001-1-1v-4h29v5ZM38,39H9v-17c0-.54999.45001-1,1-1h1.21997c.11005.14001.24005.26001.41003.32996l3.19,1.27002-1.78998,7.16003c-.11005.44995.09998.91998.52014,1.1301.41258.20601.92152.1079,1.21985-.25009l8-9.60004c.01001-.01001.01001-.02997.01996-.03998h14.21002c.54999,0,1,.45001,1,1v17ZM48,49c-1.09998,0-2-.90002-2-2,0-1.10004.90002-2,2-2s2,.89996,2,2c0,1.09998-.90002,2-2,2ZM55,39h-2c-.54999,0-1,.45001-1,1s.45001,1,1,1h2v5h-3.14001c-.45001-1.72003-2-3-3.85999-3s-3.40997,1.27997-3.85999,3h-4.14001v-18h9.46002l5.53998,8.29999v2.70001Z" />
                        <path d="M48,30h-5c-.55225,0-1,.44727-1,1v5c0,.55273.44775,1,1,1h8c.36035,0,.69287-.19336.87012-.50684.17773-.31445.17285-.69922-.0127-1.00781l-3-5c-.18066-.30078-.50635-.48535-.85742-.48535ZM44,35v-3h3.43359l1.80029,3h-5.23389Z" />
                        <path d="M29.70703,23.29297c-.39062-.39062-1.02344-.39062-1.41406,0s-.39062,1.02344,0,1.41406l5.29297,5.29297-5.29297,5.29297c-.39062.39062-.39062,1.02344.00005,1.41411.38716.38711,1.02685.38712,1.41402-.00005.00011-.00011,6-6,6-6,.39062-.39062.39062-1.02344,0-1.41406l-6-6Z" />
                        <path d="M27,31h-9c-.55225,0-1,.44727-1,1s.44775,1,1,1h9c.55225,0,1-.44727,1-1s-.44775-1-1-1Z" />
                        <path d="M24,35h-9c-.55225,0-1,.44727-1,1s.44775,1,1,1h9c.55225,0,1-.44727,1-1s-.44775-1-1-1Z" />
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

      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/topography.svg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/95" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              What Sets Price Value Logistics Apart
            </h2>
            <p className="text-blue-200 text-lg">
              Purpose-built 3PL execution backed by operational discipline and
              commercial clarity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
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
                  className="bg-white/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition"
                >
                  <div className="w-12 h-12 rounded-xl  bg-blue-900/50 flex items-center justify-center mb-4">
                    <CheckCircle size={22} className="text-white" />
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
              <div
                className="absolute inset-0 bg-cover bg-left"
                style={{ backgroundImage: "url('/people.webp')" }}
              />

              <div className="absolute inset-0 bg-slate-900/70" />
              <div className="relative h-full bg-blue/10  rounded-2xl p-12 border border-white/10 flex flex-col justify-between">
                <p className="text-3xl leading-relaxed text-white">
                  “Price Value Logistics combines logistics science with
                  business pragmatism. We do not just move freight. We align
                  operations with margins, growth targets, and customer
                  expectations.”
                </p>

                <div>
                  <p className="font-bold text-white">
                    Price Value Logistics Leadership Team
                  </p>
                  <p className="text-blue-300 text-sm">
                    Operations and Strategy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <TestimonialsSection /> */}

      {/* CTA SECTION */}
      <section className="relative py-24 isolate overflow-hidden">
        <img
          src="/cta_home.webp"
          alt="Logistics Warehouse"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-linear-to-r from-gray-950/80 to-blue-900/50" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
            Ready to Optimize Your Logistics?
          </h2>

          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let Price Value Logistics handle your 3PL needs. Direct contact,
            strategic partnerships, and proven results that drive your business
            forward.
          </p>

          <a
            href="mailto:#"
            className="inline-flex items-center justify-center bg-white text-blue-900 px-10 py-4 rounded-lg font-bold text-lg shadow-lg shadow-blue-900/20 hover:bg-blue-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
          >
            Get in Touch with Price Value Logistics
            <svg
              className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
