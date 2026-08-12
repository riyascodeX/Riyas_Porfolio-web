import React from 'react';

import stackImage from '../assets/about/riyas-avatar.png';
import sqlImage from '../assets/about/sql.png';
import pythonImage from '../assets/about/python.png';
import azureImage from '../assets/about/azure.png';
import powerbiImage from '../assets/about/powerbi.png';
import { aboutContent } from '../data/portfolioData';

const About = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-6 py-20 md:px-12 lg:px-20">

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">

        {/* ================= LEFT SIDE: ID BADGE ================= */}
        <div className="flex w-full shrink-0 flex-col items-center md:w-[350px] md:mt-0 mt-12">

          <div
            data-aos="drop-bounce"
            className="relative flex w-full justify-center"
          >

            {/* Lanyard String */}
            <div className="absolute -top-32 left-1/2 z-0 h-40 w-3 -translate-x-1/2 transform bg-black shadow-inner"></div>

            {/* Lanyard Clip */}
            <div className="absolute -top-6 left-1/2 z-10 h-12 w-6 -translate-x-1/2 transform rounded border border-gray-400 bg-gray-300 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            {/* Badge Card */}
            <div className="relative z-20 w-full max-w-[280px] -rotate-3 transform rounded-2xl bg-gray-900 p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:rotate-0">

              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 flex h-6 w-16 -translate-x-1/2 transform items-center justify-center rounded-t-xl bg-gray-900">

                <div className="h-2 w-8 rounded-full bg-black/30 shadow-inner"></div>

              </div>

              {/* Profile Image */}
              <div className="aspect-[3/4] w-full overflow-hidden rounded-xl border-2 border-transparent bg-gray-800">

                <img
                  src={stackImage}
                  alt="Riyas - Analytics Engineer"
                  className="h-full w-full object-cover object-top"
                />

              </div>

            </div>

          </div>

        </div>


        {/* ================= RIGHT SIDE: INFO ================= */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="relative z-20 mt-8 flex-1 text-black md:mt-0"
        >

          {/* About Heading */}
          <h2 className="mb-4 text-4xl font-black text-black md:text-5xl">
            {aboutContent.heading}
          </h2>

          {/* About Bio */}
          <p
            className="mb-12 max-w-3xl text-lg font-bold leading-relaxed text-black"
            dangerouslySetInnerHTML={{
              __html: aboutContent.bio,
            }}
          />


          {/* ================= TECHNICAL SKILLS ================= */}
          <div className="mt-8">

            <h3 className="mb-6 text-xl font-bold text-black">
              Technical Skills
            </h3>


            {/* Skills Row */}
            <div className="flex flex-wrap items-start gap-8">


              {/* ================= SQL ================= */}
              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
              >

                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.25)]">

                  <img
                    src={sqlImage}
                    alt="SQL"
                    className="h-full w-full object-contain"
                  />

                </div>

                <p className="mt-2 text-center font-bold text-black">
                  SQL
                </p>

              </div>


              {/* ================= PYTHON ================= */}
              <div
                data-aos="zoom-in"
                data-aos-delay="400"
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
              >

                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.25)]">

                  <img
                    src={pythonImage}
                    alt="Python"
                    className="h-full w-full object-contain"
                  />

                </div>

                <p className="mt-2 text-center font-bold text-black">
                  Python
                </p>

              </div>


              {/* ================= AZURE ================= */}
              <div
                data-aos="zoom-in"
                data-aos-delay="500"
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
              >

                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.25)]">

                  <img
                    src={azureImage}
                    alt="Microsoft Azure"
                    className="h-full w-full object-contain"
                  />

                </div>

                <p className="mt-2 text-center font-bold text-black">
                  Azure
                </p>

              </div>


              {/* ================= POWER BI ================= */}
              <div
                data-aos="zoom-in"
                data-aos-delay="600"
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
              >

                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.25)]">

                  <img
                    src={powerbiImage}
                    alt="Power BI"
                    className="h-full w-full object-contain"
                  />

                </div>

                <p className="mt-2 text-center font-bold text-black">
                  Power BI
                </p>

              </div>


            </div>

          </div>

        </div>

      </div>


      {/* ================= TORN PAPER DIVIDER ================= */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-30 w-full translate-y-1 transform">

        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-12 w-full fill-white md:h-20"
        >

          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
          />

        </svg>

      </div>


      {/* ================= DECORATIVE STAR 1 ================= */}
      <div className="absolute right-10 top-10 animate-pulse text-black opacity-30 md:right-20">

        <svg
          className="h-16 w-16"
          fill="currentColor"
          viewBox="0 0 24 24"
        >

          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />

        </svg>

      </div>


      {/* ================= DECORATIVE STAR 2 ================= */}
      <div
        className="absolute bottom-32 left-4 animate-pulse text-black opacity-30 md:left-20"
        style={{ animationDelay: '1s' }}
      >

        <svg
          className="h-20 w-20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >

          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />

        </svg>

      </div>

    </section>
  );
};

export default About;
