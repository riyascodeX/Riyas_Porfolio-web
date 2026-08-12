import React from 'react';
import { certificates } from '../data/portfolioData';

const CertificateCard = ({ cert, aosDelay }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(255,255,255,0.08)] transition-all duration-500"
  >
    <div className="flex items-start justify-between gap-4 mb-5">
      <div className="w-12 h-12 rounded-xl bg-[#ff2a2a] flex items-center justify-center shrink-0">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>

      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
        Certificate
      </span>
    </div>

    <h3 className="text-xl font-black text-black mb-2 tracking-tight">
      {cert.name}
    </h3>

    {cert.issuer && (
      <p className="text-sm font-semibold text-gray-500 mb-2">
        {cert.issuer}
      </p>
    )}

    {cert.description && (
      <p className="text-sm leading-relaxed text-gray-500">
        {cert.description}
      </p>
    )}
  </div>
);

const Certificates = () => {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 md:py-32 px-6 overflow-hidden">

      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#0a0a0a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">

        {/* Header */}
        <div
          data-aos="fade-up"
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Certifications
          </h2>

          <p className="text-gray-300 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Industry-recognized certifications that validate my technical expertise.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {certificates.featured.map((cert, index) => (
            <CertificateCard
              key={cert.name}
              cert={cert}
              aosDelay={String((index + 1) * 100)}
            />
          ))}
        </div>

        {/* View All Certificates CTA */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="flex justify-center"
        >
          <a
            href={certificates.viewAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-bold text-base hover:bg-gray-100 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-[#ff2a2a]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2-2z"
              />
            </svg>

            View All Certificates

            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-16 left-6 md:left-16 text-white opacity-20 animate-pulse">
        <svg
          className="w-12 h-12"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      <div
        className="absolute bottom-20 right-8 md:right-24 text-white opacity-20 animate-pulse"
        style={{ animationDelay: '1.5s' }}
      >
        <svg
          className="w-14 h-14"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

    </section>
  );
};

export default Certificates;