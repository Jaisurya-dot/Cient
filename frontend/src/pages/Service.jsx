 import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiShield, FiBarChart2, FiHeadphones, FiZap, FiAward
} from "react-icons/fi";

import SourcingSection from "../component/SourcingSection";
import ContactSection from "../component/Contact";
import FAQSection from "../component/FAQ";
import AddressSection from "../component/Address";
import Hero from "../component/Hero";
import { useLanguage } from "../context/LanguageProvider";

// Translation dictionary
const translations = {
  en: {
    heroHeading: "Simplifying Trade for Your Business Success",
    heroParagraph: "Sino India Jeda Trading helps Indian businesses source reliably and cost-effectively from China, leveraging deep local expertise and a strong supplier network.",
    heroButton: "Get Quote",
    service: "Service",
    featuresHeading: "Why Choose Us For Your Business?",
    features: [
      {
        icon: <FiShield className="text-indigo-600 text-3xl mb-2" />,
        title: "Risk-Free Procurement",
        desc: "Strict quality checks, audits, and secure payment terms minimize your sourcing risks."
      },
      {
        icon: <FiBarChart2 className="text-green-600 text-3xl mb-2" />,
        title: "Market Intelligence",
        desc: "Get real-time pricing, market trends, and actionable insights for smarter sourcing."
      },
      {
        icon: <FiHeadphones className="text-pink-600 text-3xl mb-2" />,
        title: "24/7 Customer Support",
        desc: "Our multilingual team is available around the clock to answer queries and resolve issues."
      },
      {
        icon: <FiZap className="text-yellow-500 text-3xl mb-2" />,
        title: "Fast Turnaround",
        desc: "Accelerate your supply chain with our streamlined sourcing, negotiation, and shipping."
      },
      {
        icon: <FiAward className="text-blue-600 text-3xl mb-2" />,
        title: "Award-Winning Service",
        desc: "Recognized for excellence in sourcing, compliance, and customer satisfaction."
      }
    ],
    sourcingSections: [
      {
        heading: "Comprehensive Supplier Verification",
        paragraph1: "Thorough supplier assessments ensure compliance, capability, and risk reduction, delivering tailored sourcing solutions in India.",
        imageSrc: "aerial-view-cargo-ship-cargo-container-harbor_335224-1380.avif",
        imageAlt: "Supplier verification process",
        bgClass: "bg-gray-50",
        reverseLayout: false,
        // button: "Learn More"
      },
      {
        heading: "Reliable Production & Delivery Assurance",
        paragraph1: "We evaluate suppliers' scalability and reliability to ensure a robust, responsive supply chain tailored to your needs.",
        imageSrc: "https://img.freepik.com/free-vector/international-transportation-regulation-illustration_335657-484.jpg?uid=R113708060&ga=GA1.1.574525859.1722267109&semt=ais_hybrid&w=740",
        imageAlt: "Production and delivery assurance",
        bgClass: "bg-gray-200",
        reverseLayout: true,
        // button: "Learn More"
      },
      {
        heading: "End-to-End Quality Control",
        paragraph1: "We conduct multi-stage inspections to ensure every product meets your standards, delivering consistent quality from source to shipment.",
        imageSrc: "https://img.freepik.com/premium-photo/technician-writing-clipboard-meat-factory_107420-54254.jpg?uid=R113708060&ga=GA1.1.574525859.1722267109&semt=ais_hybrid&w=740",
        imageAlt: "Quality control inspection",
        bgClass: "bg-white",
        reverseLayout: false,
        // button: "Discover Quality"
      },
      {
        heading: "Cost Optimization & Negotiation",
        paragraph1: "Our sourcing experts secure the best value by negotiating pricing and terms, helping you reduce costs while maintaining quality.",
        imageSrc: "https://img.freepik.com/free-vector/gradient-b2b-illustration_23-2149333189.jpg?uid=R113708060&ga=GA1.1.574525859.1722267109&semt=ais_hybrid&w=740",
        imageAlt: "Cost optimization and negotiation",
        bgClass: "bg-gray-50",
        reverseLayout: true,
        // button: "Optimize Costs"
      }
    ]
  },
  zh: {
    heroHeading: "简化印中贸易，助力您的商业成功",
    heroParagraph: "Sino India Jeda Trading 帮助印度企业可靠且高效地从中国采购，凭借深厚的本地专业知识和强大的供应商网络。",
    heroButton: "获取报价",
    service: "服务",
    featuresHeading: "为什么选择我们？",
    features: [
      {
        icon: <FiShield className="text-indigo-600 text-3xl mb-2" />,
        title: "无风险采购",
        desc: "严格的质量检查、审核和安全的付款条款最大限度降低您的采购风险。"
      },
      {
        icon: <FiBarChart2 className="text-green-600 text-3xl mb-2" />,
        title: "市场情报",
        desc: "获取实时价格、市场趋势和可操作的洞察，助您更聪明地采购。"
      },
      {
        icon: <FiHeadphones className="text-pink-600 text-3xl mb-2" />,
        title: "全天候客户支持",
        desc: "我们的多语言团队全天候为您解答疑问并解决问题。"
      },
      {
        icon: <FiZap className="text-yellow-500 text-3xl mb-2" />,
        title: "快速响应",
        desc: "通过我们高效的采购、谈判和运输流程，加速您的供应链。"
      },
      {
        icon: <FiAward className="text-blue-600 text-3xl mb-2" />,
        title: "屡获殊荣的服务",
        desc: "在采购、合规和客户满意度方面屡获殊荣。"
      }
    ],
    sourcingSections: [
      {
        heading: "全面供应商审核",
        paragraph1: "全面的供应商评估确保合规、能力和风险降低，为印度提供量身定制的采购解决方案。",
        imageSrc: "aerial-view-cargo-ship-cargo-container-harbor_335224-1380.avif",
        imageAlt: "供应商审核流程",
        bgClass: "bg-gray-50",
        reverseLayout: false,
        button: "了解更多"
      },
      {
        heading: "可靠的生产与交付保障",
        paragraph1: "我们评估供应商的可扩展性和可靠性，确保为您量身定制的强大响应式供应链。",
        imageSrc: "https://img.freepik.com/free-vector/international-transportation-regulation-illustration_335657-484.jpg?uid=R113708060&ga=GA1.1.574525859.1722267109&semt=ais_hybrid&w=740",
        imageAlt: "生产与交付保障",
        bgClass: "bg-gray-200",
        reverseLayout: true,
        button: "了解更多"
      },
      {
        heading: "全流程质量控制",
        paragraph1: "我们进行多阶段检查，确保每一件产品都符合您的标准，从源头到发货始终如一。",
        imageSrc: "https://img.freepik.com/premium-photo/technician-writing-clipboard-meat-factory_107420-54254.jpg?uid=R113708060&ga=GA1.1.574525859.1722267109&semt=ais_hybrid&w=740",
        imageAlt: "质量控制检查",
        bgClass: "bg-white",
        reverseLayout: false,
        button: "探索品质"
      },
      {
        heading: "成本优化与谈判",
        paragraph1: "我们的采购专家通过谈判价格和条款，为您争取最大价值，帮助您在保证质量的同时降低成本。",
        imageSrc: "https://img.freepik.com/free-vector/gradient-b2b-illustration_23-2149333189.jpg?uid=R113708060&ga=GA1.1.574525859.1722267109&semt=ais_hybrid&w=740",
        imageAlt: "成本优化与谈判",
        bgClass: "bg-gray-50",
        reverseLayout: true,
        button: "优化成本"
      }
    ]
  }
};

export default function Service() {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white">
      <Hero
        heading={t.heroHeading}
        paragraph={t.heroParagraph}
        buttonText={t.heroButton}
        Image="logistics.avif"
      />

      <div className="flex flex-col md:flex-row items-center justify-center py-8 bg-[#f8f9fb]">
        <div className="flex items-center flex-1 max-w-[180px] md:max-w-[300px] w-full gap-2 mb-4 md:mb-0">
          <div className="h-0.5 bg-[#23184b] flex-1"></div>
          <div className="h-4 bg-[#6d4cff] w-12 md:w-20 rounded-bl-2xl rounded-tr-2xl"></div>
        </div>
        <h2 className="mx-0 md:mx-6 text-3xl md:text-5xl font-extrabold text-[#23184b] text-center mb-4 md:mb-0">
          {t.service}
        </h2>
        <div className="flex items-center flex-1 max-w-[180px] md:max-w-[300px] w-full gap-2">
          <div className="h-4 bg-[#6d4cff] w-12 md:w-20 rounded-bl-2xl rounded-tr-2xl"></div>
          <div className="h-0.5 bg-[#23184b] flex-1"></div>
        </div>
      </div>

      {/* About Service Sections */}
      {t.sourcingSections.map((section, idx) => (
        <SourcingSection key={idx} {...section} />
      ))}

      <section className="bg-white py-16" id="features">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-sky-900 mb-10"
            data-aos="fade-up"
          >
            {t.featuresHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.features.map((f, i) => (
              <div
                key={f.title}
                className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-md p-8 text-center transition-transform hover:-translate-y-2 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={i * 120}
              >
                {f.icon}
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AddressSection />
      <FAQSection />
      {/* <ContactSection /> */}
    </div>
  );
}
