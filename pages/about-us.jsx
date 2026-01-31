import React from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Zap, 
  Eye, 
  ChevronRight, 
  Warehouse, 
  Box, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import TestimonialsSection from '../components/Testimonials';
import Footer from '@/components/Footer';
const About = () => {
  // Sections Data
  const values = [
    {
      title: "Precision in Every Pallet",
      description: "In our world, 99.9% accuracy isn't a goal. it's the baseline. We are obsessed with the details from container intake to final B2B distribution.",
      icon: <CheckCircle2 className="w-6 h-6 text-blue-900" />
    },
    {
      title: "Radical Transparency",
      description: "We operate as a 'Glass House.' Whether it's good news or a logistical challenge, we provide total honesty through real-time data integration.",
      icon: <Eye className="w-6 h-6 text-blue-900" />
    },
    {
      title: "Enterprise Agility",
      description: "We reject the bureaucracy that slows down the industry. We provide the scale of a giant with the responsiveness of a dedicated partner.",
      icon: <Zap className="w-6 h-6 text-blue-900" />
    },
    {
      title: "Asset Stewardship",
      description: "Our facilities are sanctuaries for your inventory. Clean, secure, and technologically advanced, we treat your assets as our own.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-900" />
    }
  ];

  return (
    <div className="bg-white font-sans text-slate-900">
   <section className="relative h-[50vh] flex items-center overflow-hidden">
  <div className="absolute inset-0 bg-slate-900/40 z-5 pointer-events-none" />
  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/40 z-10 pointer-events-none mix-blend-multiply" />
  <img 
    src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop" 
    alt="High-end Warehouse Interior" 
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  <div className="container max-w-4xl text-center mx-auto px-6 relative z-20 text-white">
    <div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        About <span className="text-blue-300">Us</span>
      </h1>
      <p className="text-xl text-slate-100 leading-relaxed">
        Specializing in the high-stakes world of B2B import-to-domestic warehousing. 
        We provide the enterprise-level infrastructure your supply chain demands.
      </p>
    </div>
  </div>
</section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-blue-900 font-bold text-sm tracking-[0.3em] uppercase">Our Story</h2>
            <h3 className="text-4xl font-bold text-slate-900 leading-snug">
              Built to Break the <br /> 
              <span className='text-blue-900'>Bureaucracy</span> of Logistics.
            </h3>
            <div className="space-y-4 text-lg text-slate-600   leading-relaxed">
              <p>
                The logistics industry is polarized: massive legacy conglomerates with zero speed, or small shops lacking the technology to scale. We bridge that gap.
              </p>
              <p>
                Born from a frustration with the slow-moving machinery of traditional 3PLs, we built a partner that combines the <strong>infrastructure of an enterprise giant</strong> with the  agility of a boutique firm.
              </p>
              <p>
                For businesses importing into the USA, the warehouse is the sanctuary for their investment. We don&apos;t just store goods; we steward your growth through meticulous domestic distribution.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              // src="/science2.jpeg" 
              src="/image-two.jpg"
              alt="High Bay Racking" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-blue-900 p-3 rounded-lg text-white">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 64 64" width="40px" height="40px" className="fill-current">
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
                <div>
                  <p className="text-2xl font-bold text-blue-900">500k+</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Sq. Ft. Managed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Mission Section */}
      <section className="relative py-36 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Logistics Hub" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="w-20 h-px bg-blue-500 mx-auto mb-10"></div>
          <h2 className="text-blue-300 font-bold text-sm tracking-[0.4em] uppercase mb-10">Our Mission</h2>
          <blockquote className="max-w-5xl mx-auto">
            <p className="text-4xl md:text-6xl   italic leading-[1.15] mb-12">
              &quot;To be the invisible engine of our clients&apos; growth, turning the complexity of US distribution into a silent competitive advantage.&quot;
            </p>
            <cite className="text-sm font-bold block not-italic uppercase tracking-[0.3em] text-slate-400">
              — Purpose Built for B2B Excellence
            </cite>
          </blockquote>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center text-center items-center mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-slate-900 font-bold text-xs tracking-[0.4em] uppercase mb-4">The CORE Pillars</h2>
            <h3 className="text-4xl font-bold text-blue-900">What it means to partner with us.</h3>
          </div> 
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-900 transition-colors">
                {React.cloneElement(value.icon, { className: "w-7 h-7 group-hover:text-white transition-colors" })}
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">{value.title}</h4>
              <p className="text-slate-600   leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      
  {/* <TestimonialsSection /> */}
      {/* 5. NEW & IMPROVED ENTERPRISE CTA */}
      <section className="py-24 container mx-auto px-6">
        <div className="relative bg-slate-900 rounded-xl overflow-hidden min-h-[500px] flex items-center">
          {/* Background Image - Warehouse Floor */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=2071&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-30" 
              alt="Warehouse Facility" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
          </div>

          <div className="relative z-10 w-full grid lg:grid-cols-2 gap-12 p-8 md:p-20 items-center">
            <div className="space-y-8">
              
              
              <h2 className="text-white text-4xl md:text-6xl font-bold leading-[1.1]">
                Scale Your Domestic <br />
                <span className="text-blue-300">Distribution Engine.</span>
              </h2>
              
              <p className="text-slate-300 text-lg md:text-xl   max-w-lg leading-relaxed">
                Stop fighting legacy logistics. Partner with a 3PL that views warehousing as a high-precision discipline. Ready for high-grade B2B results?
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="bg-blue1 text-white px-8 py-4 rounded-lg  font-bold hover:bg-blue2 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 group">
                  Start Your Solution <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                  <Warehouse size={18} className="text-blue-300" /> View Our Services
                </button> 
              </div>
            </div>

            {/* Visual Social Proof / Stats Box */}
            <div className="hidden lg:grid grid-cols-2 gap-6">
              {[
                { label: "Inventory Accuracy", value: "99.98%" },
                { label: "Avg. Turnaround", value: "< 18hrs" },
                { label: "B2B Shipments", value: "1.2K+" },
                { label: "Secure Sq Ft", value: "500k+" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-2xl">
                  <p className="text-blue-300 text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<Footer/>
    </div>
  );
};

export default About;