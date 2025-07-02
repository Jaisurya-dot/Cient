import React from 'react'
import TestimonialSection from '../component/Testimonal'

import StatsSection from '../component/Progress'

const Testimonal = () => {
  return (
    <div>







      <div className="flex flex-col md:flex-row items-center justify-center py-8 bg-[#f8f9fb]">
        {/* Left line and purple block */}
        <div className="flex items-center flex-1 max-w-[180px] md:max-w-[300px] w-full gap-2 mb-4 md:mb-0">
          <div className="h-0.5 bg-[#23184b] flex-1"></div>
          <div className="h-4 bg-[#6d4cff] w-12 md:w-20 rounded-bl-2xl rounded-tr-2xl"></div>
        </div>
        {/* Center heading */}
        <h2 className="mx-0 md:mx-6 text-3xl md:text-5xl font-extrabold text-[#23184b] text-center mb-4 md:mb-0">
          Testimonial
        </h2>
        {/* Right purple block and line */}
        <div className="flex items-center flex-1 max-w-[180px] md:max-w-[300px] w-full gap-2">
          <div className="h-4 bg-[#6d4cff] w-12 md:w-20 rounded-bl-2xl rounded-tr-2xl"></div>
          <div className="h-0.5 bg-[#23184b] flex-1"></div>
        </div>
      </div>




      <section className="bg-base-300 flex justify-center p-4 md:p-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center max-w-5xl w-full">
          <img
            src="hero.jpeg"
            alt=""
            className="w-full md:w-80 h-60 min-lg:h-120 min-lg:w-100 md:h-80 object-cover rounded-2xl"
          />
          <div className="flex flex-col justify-center w-full md:w-[32rem]">
            <div className="flex flex-col gap-5">
              <h1 className="text-[#1ebeb0] text-3xl md:text-4xl">
                Get to <span className="font-bold">know us better</span>
              </h1>
              <p>
                Sino sourcing trade plays a crucial role in connecting global businesses with Chinese manufacturers, enabling efficient procurement of goods at competitive prices. It involves navigating complex supply chains, ensuring quality control, and managing logistics to optimize trade outcomes.
              </p>
              <p>
                The growth of Sino sourcing trade has been driven by China's vast manufacturing capabilities and cost advantages, making it a preferred destination for sourcing a wide array of products across industries.
              </p>
              <p>
                Successful Sino sourcing trade requires understanding market trends, building strong relationships with suppliers, and leveraging technology to streamline communication and transactions.
              </p>

            </div>
          </div>
        </div>
      </section>


      <TestimonialSection />
      <StatsSection />

      {/* Call-to-Action Section */}
      <div className="h-60 bg-sky-950 flex flex-col items-center justify-center px-4">
        <h3 className="text-center text-white text-2xl md:text-4xl font-semibold">
          Ready to Reduce your Sourcing Costs?
        </h3>
        <a
          href="#contact"
          className="mt-6 btn border-t-neutral-800 bg-white text-sky-950 px-6 py-2 rounded shadow hover:bg-sky-900 hover:text-white transition"
        >
          Contact us
        </a>
      </div>

    </div>
  )
}

export default Testimonal
