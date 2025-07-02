 import React, { useState } from "react";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaBuilding,
  FaComment, FaCheckCircle, FaChevronDown
} from "react-icons/fa";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContactStore } from "../store/contactstore.js";
import { useLanguage } from "../context/LanguageProvider";

const translations = {
  en: {
    company: "Sino India Jeda Trading Pvt Ltd",
    tagline: "Your trusted partner for China-India trade.",
    email: "info@sinoindiajeda.com",
    phone: "+91-1234567890",
    address: "123, Business Park, New Delhi, India",
    viewMap: "View on Google Maps",
    whyChooseUsTitle: "Why Choose Us?",
    whyChooseUs: [
      "Expertise in China sourcing",
      "Transparent process",
      "Strong supplier network",
      "End-to-end logistics",
      "Dedicated support"
    ],
    namePlaceholder: "Full name",
    phonePlaceholder: "Your phone number",
    emailPlaceholder: "Your email address",
    companyPlaceholder: "Your company",
    messagePlaceholder: "Message / inquiry",
    contactUs: "Contact us",
    success: "Your inquiry has been submitted!",
    fail: "Submission failed. Please try again.",
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "How do I start sourcing from China?",
        answer: "Submit your inquiry using the form. Our team will contact you to understand your needs and guide you through the process."
      },
      {
        question: "What products can you help source?",
        answer: "We can help you source a wide range of products, from electronics to textiles. Contact us with your requirements."
      },
      {
        question: "How long does shipping take?",
        answer: "Shipping times depend on the product and shipping method. Typically, it ranges from 2 to 6 weeks."
      }
    ]
  },
  zh: {
    company: "中印捷达贸易有限公司",
    tagline: "您值得信赖的中印贸易合作伙伴。",
    email: "info@sinoindiajeda.com",
    phone: "+91-1234567890",
    address: "印度新德里商业园123号",
    viewMap: "在谷歌地图上查看",
    whyChooseUsTitle: "为什么选择我们？",
    whyChooseUs: [
      "中国采购专家",
      "透明的流程",
      "强大的供应商网络",
      "端到端物流",
      "专属客户支持"
    ],
    namePlaceholder: "姓名",
    phonePlaceholder: "联系电话",
    emailPlaceholder: "电子邮箱",
    companyPlaceholder: "公司名称",
    messagePlaceholder: "留言 / 咨询内容",
    contactUs: "联系我们",
    success: "您的咨询已提交！",
    fail: "提交失败，请重试。",
    faqsTitle: "常见问题",
    faqs: [
      {
        question: "如何开始中国采购？",
        answer: "请通过表单提交您的咨询，我们的团队会与您联系，了解您的需求并为您提供指导。"
      },
      {
        question: "你们可以帮助采购哪些产品？",
        answer: "我们可以帮助您采购从电子产品到纺织品等多种产品，请联系我们说明您的需求。"
      },
      {
        question: "运输需要多长时间？",
        answer: "运输时间取决于产品和运输方式，通常为2至6周。"
      }
    ]
  }
};

export default function ContactPage() {
  const { language } = useLanguage(); // "en" or "zh"
  const t = translations[language];

  const { createProduct } = useContactStore();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const [faqOpen, setFaqOpen] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Map company to product for API compatibility
    const result = await createProduct({ ...form, product: form.company });

    if (result.success) {
      toast.success(result.message || t.success, { transition: Slide });
      setForm({
        name: "",
        phone: "",
        email: "",
        company: "",
        message: "",
      });
    } else {
      toast.error(result.message || t.fail, { transition: Slide });
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-100 relative overflow-hidden">
      <ToastContainer position="bottom-center" autoClose={4000} transition={Slide} />
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-30 -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 translate-x-48 translate-y-48"></div>
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Column - Info & Map */}
        <div className="lg:w-1/2 flex flex-col justify-center gap-8">
          <div className="text-center lg:text-left mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              {t.company}
            </h2>
            <p className="text-gray-600 mb-4">{t.tagline}</p>
            <div className="flex justify-center lg:justify-start space-x-4 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-white text-lg" />
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <FaPhone className="text-white text-lg" />
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
            </div>
            <div className="text-gray-700 flex flex-col gap-2 items-center lg:items-start">
              <span>
                <FaEnvelope className="inline mr-2 text-blue-500" />
                {t.email}
              </span>
              <span>
                <FaPhone className="inline mr-2 text-orange-500" />
                {t.phone}
              </span>
              <span>
                <FaMapMarkerAlt className="inline mr-2 text-gray-600" />
                {t.address}
              </span>
              <a
                href="https://goo.gl/maps/2sQeP1q7k1k1k1k1A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2"
              >
                {t.viewMap}
              </a>
            </div>
            <div className="mt-4 rounded-xl overflow-hidden shadow">
              <iframe
                title={t.company + " Location"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.8609997024794!2d116.40739431524216!3d39.90419977942113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f052d8459a3ab7%3A0x61a4e5ab37cd660e!2sBeijing%2C%20China!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="120"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl shadow p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">{t.whyChooseUsTitle}</h3>
            <ul className="space-y-2">
              {t.whyChooseUs.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right Column - Contact Form */}
        <div className="lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 space-y-4"
          >
            <div className="flex gap-3">
              {/* Name Field */}
              <div className="relative flex-1">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FaUser className="text-gray-400 text-sm" />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t.namePlaceholder}
                />
              </div>
              {/* Phone Field */}
              <div className="relative flex-1">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FaPhone className="text-gray-400 text-sm" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t.phonePlaceholder}
                />
              </div>
            </div>
            <div className="flex gap-3">
              {/* Email Field */}
              <div className="relative flex-1">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FaEnvelope className="text-gray-400 text-sm" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t.emailPlaceholder}
                />
              </div>
              {/* Company Field */}
              <div className="relative flex-1">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FaBuilding className="text-gray-400 text-sm" />
                </div>
                <input
                  type="text"
                  name="company"
                  required
                  value={form.company}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t.companyPlaceholder}
                />
              </div>
            </div>
            {/* Message Field */}
            <div className="relative">
              <div className="absolute left-3 top-4">
                <FaComment className="text-gray-400 text-sm" />
              </div>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={4}
                placeholder={t.messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white font-semibold py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              {t.contactUs}
            </button>
          </form>
          {/* FAQ Section */}
          <section className="max-w-2xl mx-auto my-12 px-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.faqsTitle}</h3>
            <div className="space-y-4">
              {t.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow border border-gray-200"
                >
                  <button
                    className="flex items-center justify-between w-full px-6 py-4 text-left font-semibold text-gray-700 focus:outline-none"
                    onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                    aria-expanded={faqOpen === idx}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span>{faq.question}</span>
                    <FaChevronDown
                      className={`ml-2 transform transition-transform duration-300 ${faqOpen === idx ? "rotate-180 text-blue-600" : "text-gray-400"}`}
                    />
                  </button>
                  <div
                    id={`faq-answer-${idx}`}
                    className={`overflow-hidden transition-all duration-300 px-6 ${faqOpen === idx ? "max-h-40 py-2" : "max-h-0 py-0"}`}
                    aria-hidden={faqOpen !== idx}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
