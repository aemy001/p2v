import React from 'react';
import Slider from 'react-slick';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Their import advisory team was invaluable during our international expansion. They made customs compliance simple and got our products into the new market two weeks ahead of schedule.",
      author: "Sarah Chen",
      role: "Founder, Global Import Co.",
      stars: 5,
    },
    {
      id: 2,
      quote: "Since switching to P2V for warehousing, our inventory accuracy has hit 99.9%. The real-time visibility portal gives us complete peace of mind during peak season spikes.",
      author: "Mark Thompson",
      role: "Ops Director, Velocity Retail",
      stars: 4,
    },
    {
      id: 3,
      quote: "P2V optimized our shipping routes and carrier selection, reducing our overall logistics spend by 18% in the first quarter alone. The ROI was immediate.",
      author: "David Rivera",
      role: "Supply Chain Mgr, Apex Mfg.",
      stars: 5,
    },
  ];
  const settings = {
    dots: true,
    arrows: false, 
    infinite: true,
    speed: 800,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)", 
    responsive: [
      {
        breakpoint: 1024,  
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: dots => (
        <div style={{ bottom: "-40px" }}>
            <ul className="flex justify-center gap-2"> {dots} </ul>
        </div>
    ),
    customPaging: i => (
        <div className="w-3 h-3 rounded-full bg-blue-200 hover:bg-blue1 transition-all duration-300 dot-trigger"></div>
    )
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative"> 
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none">
            <Quote size={400} className="text-blue-900" />
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-4">
          Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proven logistics success stories from our partners across the nation.
          </p>
        </div>

        {/* Slider Container */}
        <div className=" relative z-10 [&_.slick-active_.dot-trigger]:bg-blue1 [&_.slick-active_.dot-trigger]:w-6">
          <Slider {...settings}>
            {testimonials.map((item) => (
              // Important: Add padding to the wrapper div so shadows don't get cut off by overflow:hidden
              <div key={item.id} className="px-4 py-8 h-full cursor-grab">
                <div className="bg-white rounded-2xl p-8 md:p-10 border-l-[6px] border-blue-900 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-20px_rgba(30,58,138,0.2)] transition-all duration-300 relative flex flex-col h-full">
                  
                  {/* Subtle background quote icon inside the card */}
                  <Quote className="absolute top-6 right-8 text-blue-50 rotate-12" size={80} />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-xl italic text-gray-700 mb-8 leading-relaxed relative z-10 flex-grow">
                    &quot;{item.quote}&quot;
                  </blockquote>

                  {/* Author Info */}
                  <div className="relative z-10 flex items-center">
                      {/* Optional: Add an avatar placeholder if you have images later */}
                      {/* <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue1 font-bold mr-4">{item.author.charAt(0)}</div> */}
                      <div>
                        <p className="font-bold text-gray-900 text-lg">
                        {item.author}
                        </p>
                        <p className="text-blue1 text-sm font-medium">
                        {item.role}
                        </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;