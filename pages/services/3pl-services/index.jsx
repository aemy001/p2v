import React, { useState } from "react";
import {
  Warehouse,
  Truck,
  Package,
  RefreshCw,
  ShoppingCart,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Plus,
  Minus,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function Services3PL() { 
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Warehousing & Storage",
      desc: "High-bay, climate-controlled storage designed for both palletized freight and pick-bin inventory. We treat your inventory as a financial asset.",
      icon: <Warehouse size={32} />,
      features: [
        "Climate-controlled Racking",
        "High-Value Cargo Security",
        "Real-time Inventory Accuracy",
      ],
    },
    {
      title: "Omnichannel Fulfillment",
      desc: "Unified distribution for all sales channels. Whether shipping bulk wholesale to retailers or D2C to doorsteps, we execute both simultaneously.",
      icon: <ShoppingCart size={32} />,
      features: [
        "B2B Retail Compliance",
        "D2C Pick & Pack",
        "Same-Day Shipping",
      ],
    },
    {
      title: "Kitting & Assembly",
      desc: "Custom prep and bundling performed on-site. From subscription boxes to retail ticketing, your product leaves our dock shelf-ready.",
      icon: <Package size={32} />,
      features: [
        "Subscription Box Assembly",
        "Labeling & Barcoding",
        "Quality Control",
      ],
    },
    {
      title: "Returns Management",
      desc: "Efficient reverse logistics. We inspect, grade, and restock returned items quickly to maximize recovery value.",
      icon: <RefreshCw size={32} />,
      features: ["Inspection & Grading", "Rapid Restocking", "Waste Disposal"],
    },
    {
      title: "Shipping & Freight",
      desc: "Optimized transit and carrier selection. We leverage volume to secure competitive LTL and Ground rates.",
      icon: <Truck size={32} />,
      features: [
        "LTL & FTL Management",
        "Rate Optimization",
        "Carrier Negotiation",
      ],
    },
  ];

  const industries = [
    {
      name: "Consumer Electronics",
      img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800",
      desc: "Serialized tracking and high-value security cages.",
    },
    {
      name: "Home & Lifestyle",
      img: "https://images.pexels.com/photos/34577295/pexels-photo-34577295.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "Handling of bulky SKUs and multi-box shipments.",
    },
    {
      name: "Apparel & Accessories",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
      desc: "High-velocity pick and pack with returns processing.",
    },
    {
      name: "Health & Wellness",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
      desc: "Strict lot control and expiry date tracking (FIFO/FEFO).",
    },
  ];

  const faqs = [
    {
      question: "Do you have monthly order minimums?",
      answer:
        "We focus on partnering with established brands and growing B2B operations. While we don't have a rigid 'one-size-fits-all' minimum, our infrastructure is best suited for businesses with consistent volume. Contact us to discuss your specific profile.",
    },
    {
      question: "Can you handle container drayage and imports?",
      answer:
        "Yes. This is a core strength of Price Value Logistics. We coordinate drayage from the port, handle container unloading (devanning), and palletize floor-loaded freight for immediate storage or cross-docking.",
    },
    {
      question: "Do you support EDI for retail compliance?",
      answer:
        "Absolutely. We are equipped to handle EDI integration for major retailers, ensuring your wholesale orders meet strict routing guides and labeling requirements (UCC-128).",
    },
    {
      question: "I don't see a 'Get a Quote' button. How do we start?",
      answer:
        "We believe logistics requires a conversation, not an algorithm. To ensure we are the right fit for your business, we handle all inquiries directly. Email us or call to speak with an operations director.",
    },
    {
      question: "How quickly can you integrate with my store?",
      answer:
        "Our systems connect seamlessly with major platforms (Shopify, WooCommerce, Magento) and ERPs. Once terms are agreed upon, we can typically integrate and begin receiving inventory within days, not months.",
    },
  ];

  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative text-white py-32 px-6 overflow-hidden flex items-center justify-center min-h-[80vh]">
        <img
          src="/3pl_hero.webp"
          alt="Industrial Warehouse Racking"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-gray-900/90 via-gray-900/80 to-blue1/70 z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-10" />

        <div className="max-w-7xl text-center relative z-20">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm rounded-full text-sm font-bold uppercase tracking-wider text-blue-300">
              Price Value Logistics 3PL Services
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
            The Backbone of <br />
            <span className="text-blue-400">Your Supply Chain.</span>
          </h1>
          <p className="max-w-3xl text-xl text-gray-300 leading-relaxed mb-10 mx-auto">
            Comprehensive logistics handling warehousing, fulfillment, and
            distribution. We operate as an extension of your business, not just
            a service provider.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:contact@pvl.com"
              className="bg-blue1 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-all shadow-lg shadow-blue1/50"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      {/* --- INTRO: WHAT IS 3PL --- */}
      <section className="pt-24 pb-12 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            More Than Just Storage
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Third-Party Logistics (3PL) is the strategic outsourcing of your
            logistics operations. At Price Value Logistics, we take over the
            heavy lifting receiving, storage, packing, and shipping allowing you
            to focus entirely on product development and sales. We don&apos;t
            just store your inventory; we actively manage the flow of your goods
            to ensure{" "}
            <span className="text-blue1 font-bold">speed and accuracy</span>.
          </p>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION (NEW) --- */}
      <section className="pb-24 pt-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-8">
            How It Works
          </h2>
          <div className="flex justify-center items-center">
            <img
              src="/3pl-services.png"
              alt="Price Value Logistics 3PL Process: Inbound, Storage, Fulfillment"
              className="w-full max-w-6xl h-auto object-contain hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* --- SERVICE PILLARS (GRID) --- */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black/50 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Core Capabilities
            </h2>
            <p className="text-blue-200">
              Execution-focused services for the modern supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-gray-800/50 border border-gray-700 p-8 rounded-2xl hover:bg-gray-800 hover:border-blue-500/50 transition duration-300"
              >
                <div className="w-14 h-14 bg-blue1/30 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE Price Value Logistics DIFFERENCE --- */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              The Price Value Logistics Standard
            </h2>
            <p className="text-lg text-gray-600">
              Operational Excellence. No Bureaucracy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Users className="text-blue-600 mb-4 w-10 h-10" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Founder-Led Focus
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We aren&apos;t run by a board of investors. We are
                owner-operators who care about your margins as much as you do.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <ShieldCheck className="text-blue-600 mb-4 w-10 h-10" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Simplicity & Transparency
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No hidden fees or complex tiered structures. We believe in
                clear, honest communication regarding your logistics.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Zap className="text-blue-600 mb-4 w-10 h-10" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Accuracy First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize getting the order right the first time. Our floor
                teams are trained to treat every SKU with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES SERVED --- */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">
            Industries We Serve
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden aspect-[3/4]"
              >
                <img
                  src={ind.img}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {ind.name}
                  </h3>
                  <p className="text-gray-300 text-xs leading-snug">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue1/20 blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Common Questions
            </h2>
            <p className="text-gray-400">
              Answers about our operational model and engagement process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border border-gray-700 rounded-xl bg-gray-800/30 transition-all duration-300 ${openFaq === idx ? "bg-gray-800 border-blue-500/50" : "hover:bg-gray-800/50"}`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span
                    className={`font-bold text-lg ${openFaq === idx ? "text-blue-300" : "text-white"}`}
                  >
                    {faq.question}
                  </span>
                  <span className="shrink-0 ml-4">
                    {openFaq === idx ? (
                      <Minus className="text-blue-400 w-5 h-5" />
                    ) : (
                      <Plus className="text-gray-500 w-5 h-5" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${openFaq === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Logistics Warehouse"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        /> */}
        {/* <div className="absolute inset-0 -z-10 bg-linear-to-r from-gray-950/80 to-blue1/50" /> */}

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 tracking-tight">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-lg md:text-xl text-blue1 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let Price Value Logistics handle your 3PL needs. Direct contact,
            strategic partnerships, and proven results that drive your business
            forward.
          </p>
          <a
            href="mailto:contact@pvl.com"
            className="inline-flex items-center justify-center bg-blue1 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg shadow-blue1/20 hover:bg-blue-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
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
