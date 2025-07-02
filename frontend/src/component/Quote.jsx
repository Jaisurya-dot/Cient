import { useInView, motion } from "framer-motion";
import React from "react";
import { useLanguage } from "../context/LanguageProvider";
import { Link } from "react-router-dom";


const images = [
  "still-life-wireless-cyberpunk-headphones_23-2151072226.avif",
  "rendering-smart-home-device_23-2151039302.avif",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",

];

const QuoteSection = () => {


  const { t } = useLanguage();
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.section
      className="w-full bg-gray-50 py-16 lg:py-24"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="flex-1 flex flex-col justify-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-sky-950 mb-6 leading-tight">
                {t('Quote_Heading')}<br />
                <span className="text-indigo-600">{t('Quote_Subheading')}</span>
              </h2>
              <motion.p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                variants={itemVariants}
                dangerouslySetInnerHTML={{ __html: t('Quote_Description') }}
              />
              <motion.div
                className="flex gap-4"
                variants={itemVariants}
              >
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                  <Link to='/Contact'> {t('Quote_GetQuote')}</Link>
                </button>
                <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors">
                  <Link to='/Products'>   {t('Quote_LearnMore')}</Link>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>


          {/* Image Gallery */}
          <motion.div
            className="flex-1 w-full"
            variants={containerVariants}
          >
            <motion.div
              className="grid grid-cols-2 gap-4 md:gap-6"
              variants={containerVariants}
            >
              {images.map((src, i) => (
                <motion.div
                  key={i}
                  className="relative group overflow-hidden rounded-xl shadow-lg aspect-square"
                  variants={imageVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={src}
                    alt={`Product ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section >
  );
};

export default QuoteSection;
