import React, { useRef, useEffect, useState } from "react";
import Features from "../component/Features";
import SourcingSection from "../component/SourcingSection";
import ProductSourcingSection from "../component/ProductProgess";
import QuoteSection from "../component/Quote";
import Hero from "../component/Hero";
import { useLanguage } from "../context/LanguageProvider";
import { Link } from "react-router-dom";
 

function useFadeUpOnScroll() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}











const Products = () => {
  const { t } = useLanguage();

  useFadeUpOnScroll();
  return (
    <div className="w-full bg-white">
      <Hero
        heading={t('discoverProductRange')}
        paragraph={t('accessCuratedSelection')}
        buttonText={t('exploreProducts')}
        Image="explore-from-scrabble-blocks.jpg"
      />

      <div className="flex flex-col md:flex-row items-center justify-center py-8 bg-[#f8f9fb]">
        {/* ... */}
        <h2 className="mx-0 md:mx-6 text-3xl md:text-5xl font-extrabold text-[#23184b] text-center mb-4 md:mb-0">
          {t('product')}
        </h2>
        {/* ... */}
      </div>
      <QuoteSection />

      <Features />
      <SourcingSection
        heading={t('productSourcingHeading')}
        paragraph1={t('productSourcingPara1')}
        paragraph2={t('productSourcingPara2')}
        imageSrc="product-quality-concept-illustration_114360-7401.avif"
        imageAlt="Sourcing process"
        bgClass="bg-gray-50"
        reverseLayout={false}
        button="Click"
      />

      <ProductSourcingSection />

      <div className="h-60 bg-sky-950 flex flex-col items-center justify-center px-4">
        <h3 className="text-center text-white text-2xl md:text-4xl font-semibold">
          {t('readyToReduce')}
        </h3>
        <Link
          to="/Contact"
          className="mt-6 btn border-t-neutral-800 bg-white text-sky-950 px-6 py-2 rounded shadow"
        >
          {t('contactUs')}
        </Link>
      </div>
    </div>
  )
}

export default Products
