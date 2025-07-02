import React from 'react'
import QuoteSection from '../component/Quote'
import SourcingSection from '../component/SourcingSection'
import UniqueSection from '../component/Unique'
import InfoCards from '../component/InfoCard'
import Hero from '../component/Hero'
import { useLanguage } from '../context/LanguageProvider'
import { Link } from 'react-router-dom'


const About = () => {

  const { t } = useLanguage();
  return (
    <div>
      <div className="font-sans text-gray-800 bg-white">
        {/* Hero Section with Parallax */}


        <Hero
          heading={t('The Premier Manufacturing and Product Sourcing Agency in China')}
          paragraph={t('About_Hero_Paragraph')}
          // buttonText={t('About_Hero_Button')}
          Image="transport-logistics-products_23-2151541830.avif"
        />
      </div>
      <div className="flex items-center justify-center py-8 bg-[#f8f9fb]">
        <div className="flex items-center flex-1 max-w-[300px] gap-2">
          <div className="h-0.5 bg-[#23184b] flex-1"></div>
          <div className="h-4 bg-[#6d4cff] w-20 rounded-bl-2xl rounded-tr-2xl"></div>
        </div>
        <h2 className="mx-6 text-5xl font-extrabold text-[#23184b]">{t('About_Section_Heading')}</h2>
        <div className="flex items-center flex-1 max-w-[300px] gap-2">
          <div className="h-4 bg-[#6d4cff] w-20 rounded-bl-2xl rounded-tr-2xl"></div>
          <div className="h-0.5 bg-[#23184b] flex-1"></div>
        </div>
      </div>

      <SourcingSection
        heading={t('About_Mission_Heading')}
        paragraph1={t('About_Mission_Paragraph1')}
        paragraph2={t('About_Mission_Paragraph2')}
        imageSrc="building-dreamy-setting.jpg"
        imageAlt="Sourcing process"
        bgClass="bg-gray-200"
        reverseLayout={false}
      // button={t('About_Section_Button')}
      />



      <SourcingSection
        heading={t('About_Mission_Heading')}
        paragraph1={t('About_Mission_Paragraph1')}
        paragraph2={t('About_Mission_Paragraph2')}
        imageSrc="technological.avif"
        imageAlt="Sourcing process"
        bgClass="bg-gray-200"
        reverseLayout={true}
      // button={t('About_Section_Button')}
      />

      <QuoteSection />
      <UniqueSection />
      <h1 className='text-4xl font-bold text-center '>Our Service </h1>
      <InfoCards />
      <section className="bg-base-300 py-16 flex flex-col items-center">
        {/* Heading with lines */}
        <div className="flex items-center w-full justify-center mb-4">
          {/* Left line and purple block */}
          <div className="flex items-center flex-1 max-w-[300px] gap-2">
            <div className="h-0.5 bg-[#23184b] flex-1"></div>
            <div className="h-4 bg-[#835be2] w-20 rounded-bl-2xl rounded-tr-2xl"></div>
          </div>
          {/* Heading */}
          <h2 className="mx-6 text-xl md:text-5xl font-bold text-[#2d2352] text-center">
            {t('Still_have_Header1')}
          </h2>
          {/* Right purple block and line */}
          <div className="flex items-center flex-1 max-w-[300px] gap-2">
            <div className="h-4 bg-[#835be2] w-20 rounded-bl-2xl rounded-tr-2xl"></div>
            <div className="h-0.5 bg-[#23184b] flex-1"></div>
          </div>
        </div>
        {/* Subtext */}
        <p className="text-[#2d2352] text-opacity-80 text-lg mb-8 text-center">
          {t('Still_have_Header')}
        </p>
        {/* Button */}
        <button className="bg-[#a084e8] hover:bg-[#8661c5] text-white font-semibold px-10 py-4 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md text-lg transition-all duration-200">
          <Link to='/Contact'>{t('Get_touch')}</Link>
        </button>
      </section>



    </div>






  )
}

export default About