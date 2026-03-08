import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  ShieldCheck,
  ArrowRight,
  Truck,
} from "lucide-react";
import Footer from "@/components/Footer";
import Image from "next/image";


const Contact = () => {
  const contactMethods = [
    {
      title: "Sales & Inquiries",
      description: "For new partnerships and enterprise solutions.",
      email: "sales@pvl.com",
      phone: "+1 (888) 555-0123",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      title: "Operations Support",
      description: "Real-time assistance for active shipments.",
      email: "ops@pvl.com",
      phone: "+1 (888) 555-0124",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Headquarters",
      description: "Come visit our main logistics hub.",
      address: "123 Logistics Blvd, Supply City, SC 29405",
      icon: <MapPin className="w-6 h-6" />,
    },
  ];

  return (
    <div className="bg-white font-sans text-slate-900">
      {/* 1. Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60 z-5 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-br from-black/30 via-black/10 to-black/40 z-10 pointer-events-none mix-blend-multiply" />
          <img 
          src="/img_contact.webp"
          alt="Logistics Support Team" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="container max-w-4xl text-center mx-auto px-6 relative z-20 text-white">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Contact <span className="text-blue-300">Us</span>
            </h1>
            <p className="text-xl text-slate-100 leading-relaxed">
              Ready to streamline your supply chain? Our team is on standby to
              provide enterprise-grade support.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Methods Grid */}
      <section className="py-24 container mx-auto px-6   relative z-30">
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl hover:shadow-2xl hover:border-blue-100 transition-all group"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue1 transition-colors">
                <div className="text-blue1 group-hover:text-white transition-colors">
                  {method.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {method.title}
              </h3>
              <p className="text-slate-500 mb-6 text-sm">
                {method.description}
              </p>

              {/* <div className="space-y-2">
                {method.email && (
                  <p className="font-semibold text-blue1 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> {method.email}
                  </p>
                )}
                {method.phone && (
                  <p className="font-semibold text-blue1 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> {method.phone}
                  </p>
                )}
                {method.address && (
                  <p className="font-semibold text-blue1 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> 123 Logistics Blvd
                  </p>
                )}
              </div> */}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-blue1 font-bold text-sm tracking-[0.3em] uppercase mb-4">
                  Our Reach
                </h2>
                <h3 className="text-4xl font-bold text-slate-900 leading-snug">
                  Strategic Hubs Across <br />
                  <span className="text-blue1"> America</span>.
                </h3>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                We operate a unified network of distribution centers designed to
                minimize transit times and maximize inventory security.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-blue1 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Operating Hours
                    </h4>
                    <p className="text-sm text-slate-500">
                      Mon - Fri: 08:00 - 18:00 EST
                    </p>
                    <p className="text-sm text-slate-500">
                      24/7 Security Monitoring
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-blue1 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Nationwide Coverage
                    </h4>
                    <p className="text-sm text-slate-500">Import Handling</p>
                    <p className="text-sm text-slate-500">
                      Customs Brokerage Support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Visual */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-full max-w-7xl">
                {/* <LogisticsMap /> */}
                <img src="/us-map.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Simple Call to Action */}
      <section className="py-24 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Ready to optimize your flow?
          </h2>
          <p className="text-lg text-slate-600">
            Reach out to our dedicated logistics experts. We don&apos;t use
            chatbots you&apos;ll speak to a real human ready to solve complex
            B2B challenges.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue1 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all shadow-xl shadow-blue1/20 flex items-center justify-center gap-3">
              Call Support <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
