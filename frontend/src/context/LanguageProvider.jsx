import React, { createContext, useState, useContext } from "react";

// Example translations object
const translations = {
    en: {


        // hero section content
        Header_Title: 'Sino India Jeda Trading',
        Hero_Paragraph: "Bridging businesses with trusted Chinese suppliers. Reliable sourcing, transparent processes, and end-to-end support for your global growth.",
        About_Us: 'About Us',
        About_Paragraph1: "Sino India Jeda Trading is your global sourcing partner connecting businesses to opportunities  across the world. We specialize in finding, vetting, and delivering products from China and beyond, ensuring quality and reliability every step of the way",
        About_Paragraph2: 'Global reach. Local expertise. Sourcing made simple.',
        Product: "Product",
        Product_Paragraph1: "From supplier verification to logistics and delivery, our team in Beijing and India ensures a seamless sourcing experience for every client.",
        Product_Paragraph2: "Benefit from real-time updates, quality checks, and transparent communication at every stage.",
        Service: 'Service',
        Service_Paragraph1: 'Whether you need bulk imports or niche products, we tailor our sourcing strategies to fit your business goals.',
        Service_Paragraph2: "Experience the advantage of a dedicated sourcing partner committed to your growth.",




        // FAQ  section content
        faq: [
            {
                question: "What services does Sino India Jeda Trading provide?",
                answer:
                    "We offer end-to-end China sourcing solutions for Indian businesses, including supplier verification, negotiation, quality checks, warehousing, shipping, and logistics.",
            },
            {
                question: "How do I request a quote or start sourcing?",
                answer:
                    "You can fill out our online RFQ form, contact us via WhatsApp, or email us directly. Our team will respond promptly to discuss your requirements.",
            },
            {
                question: "Can you help with quality control and inspections?",
                answer:
                    "Yes, we conduct thorough quality checks and inspections at every step to ensure you receive products that meet your standards.",
            },
            {
                question: "Do you offer shipping and customs clearance?",
                answer:
                    "Absolutely! We manage shipping, customs clearance, and door-to-door delivery to your location in India.",
            },
            {
                question: "Is there a minimum order quantity?",
                answer:
                    "Minimum order quantities depend on the product and supplier. Contact us with your requirements, and we’ll advise you accordingly.",
            },
        ],

        testimonials: [
            {
                text: "Sino India Jeda Trading transformed our sourcing process with their reliable and transparent service. Their expertise helped us reduce costs and improve product quality significantly. Highly recommended for any business looking to source from China."
            },
            {
                text: "The team at Sino India Jeda Trading provided exceptional support throughout our bulk import project. Their on-ground presence in Beijing ensured smooth communication and timely delivery. A trusted partner for international sourcing."
            },
            {
                text: "Thanks to Sino India Jeda Trading, we were able to source high-quality custom machinery parts with confidence. Their thorough supplier verification and quality control processes gave us peace of mind."
            }
        ],


        About_Hero_Heading: "About Sino India Jeda Trading",
        About_Hero_Paragraph: "Founded in Beijing, our company bridges the gap between Indian businesses and China’s vast market. With a dedicated team of trade experts and a trusted supplier network, we deliver transparent, reliable, and efficient sourcing solutions tailored to your needs.",
        About_Hero_Button: "Learn More About Us",

        About_Section_Heading: "About",
        About_Story_Heading: "Our Story",
        About_Story_Paragraph1: "Founded in Beijing, Sino India Jeda Trading set out to connect Indian businesses with China’s vast opportunities.",
        About_Story_Paragraph2: "Our expert team overcomes language barriers, trust gaps, logistics, and quality challenges—making sourcing from China seamless for Indian companies.",
        About_Mission_Heading: "Our Mission",
        About_Mission_Paragraph1: "We simplify India–China trade with tailored sourcing solutions, trusted partnerships, and end-to-end support—from your first inquiry to final delivery.",
        About_Mission_Paragraph2: "Our transparent, accountable, and efficient approach empowers your business to grow globally while minimizing risks and costs.",
        About_Section_Button: "Click",

        Quote_Heading: "Have a product in mind?",
        Quote_Subheading: "Get a free quote.",
        Quote_Description: "<em class='not-italic font-medium'>No upfront costs, no obligations</em> — just a free quote and answers to any questions that you might have.",
        Quote_GetQuote: "Get a quote!",
        Quote_LearnMore: "Learn more",



        Unique_EndToEnd_Title: "End-to-End Support",
        Unique_TrustedSupplier_Title: "Trusted Supplier Network",
        Unique_LocalExpertise_Title: "Local Expertise",
        Unique_TransparentProcess_Title: "Transparent Process",
        Unique_FocusRelationships_Title: "Focus on Relationships",
        Unique_CustomSolutions_Title: "Custom Solutions for Indian Businesses",
        Unique_Header: "What Makes Us Unique",




        InfoCard_VerifiedNetwork_Title: "Verified Network",
        InfoCard_VerifiedNetwork_Desc: "We’ve built a robust network of thoroughly vetted Chinese suppliers. Every partner is verified for quality, reliability, and compliance—so you can source with confidence.",
        InfoCard_ExpertGuidance_Title: "Expert Guidance",
        InfoCard_ExpertGuidance_Desc: "Our experienced team in Beijing and India guides you through every step—from product selection and supplier negotiation to quality control and logistics.",
        InfoCard_EndToEndSolutions_Title: "End-to-End Solutions",
        InfoCard_EndToEndSolutions_Desc: "From initial inquiry to final delivery, we handle sourcing, quality checks, shipping, and after-sales support—making your import journey smooth and stress-free.",

        Still_have_Header1: "Still, have questions?",
        Still_have_Header: " Can’t find the answer you’re looking for? Please chat to our friendly team.",
        Get_touch: "  Get in touch",

        discoverProductRange: "Discover Our Product Range",
        accessCuratedSelection: "Access a curated selection of electronics, machinery, textiles, home goods, and more—sourced from trusted Chinese manufacturers to power your business growth.",
        exploreProducts: "Explore Products",
        product: "Product",
        productSourcingHeading: "Product Sourcing",
        productSourcingPara1: "Source One delivers transparent, global product sourcing—ensuring the best prices, quality, and timely delivery. Services are customized for international businesses sourcing from anywhere in the world.",
        productSourcingPara2: "Ideal for companies in global trade, enabling access to top suppliers and markets worldwide.",
        readyToReduce: "Ready to Reduce your Sourcing Costs?",
        contactUs: "Contact us",






    },
    zh: {
        Header_Title: '中印捷达贸易',
        Hero_Paragraph: "我们为印度企业与中国可信赖的供应商搭建桥梁。提供可靠采购、透明流程和全方位支持，助力您的全球业务增长。",
        About_Us: '关于我们',
        About_Paragraph1: "中印捷达贸易是您的全球采购合作伙伴，不仅连接印度与中国，更连接世界各地的商机。我们专注于寻找、审核并交付来自中国及其他地区的产品，确保每一步的质量与可靠性。",
        About_Paragraph2: '全球资源，本地服务，让采购变得更简单。',
        Product: "产品",
        Product_Paragraph1: "从供应商审核到物流交付，我们位于北京和印度的团队为每一位客户提供无缝的采购体验。",
        Product_Paragraph2: "全程实时更新，质量把控，沟通透明，让您无后顾之忧。",
        Service: '服务',
        Service_Paragraph1: '无论是大宗进口还是小众产品，我们都能根据您的业务目标量身定制采购方案。',
        Service_Paragraph2: "体验专属采购伙伴为您成长保驾护航的优势。",
        faq: [
            {
                question: "中印捷达贸易提供哪些服务？",
                answer:
                    "我们为印度企业提供端到端的中国采购解决方案，包括供应商审核、谈判、质量检查、仓储、运输和物流。",
            },
            {
                question: "如何申请报价或开始采购？",
                answer:
                    "您可以填写我们的在线RFQ表格，通过WhatsApp联系我们，或直接发送电子邮件。我们的团队会及时与您联系，讨论您的需求。",
            },
            {
                question: "你们能协助质量控制和验货吗？",
                answer:
                    "可以，我们在每个环节都进行严格的质量检查和验货，确保您收到符合标准的产品。",
            },
            {
                question: "你们提供运输和清关服务吗？",
                answer:
                    "当然！我们负责运输、清关以及门到门送货到您在印度的地址。",
            },
            {
                question: "有最低起订量要求吗？",
                answer:
                    "最低起订量取决于具体产品和供应商。请告知您的需求，我们会为您提供建议。",
            },
        ],
        About_Hero_Heading: "关于中印捷达贸易",
        About_Hero_Paragraph: "公司成立于北京，致力于为印度企业与中国市场之间搭建桥梁。我们拥有专业的贸易团队和可信赖的供应商网络，为您量身定制透明、可靠、高效的采购解决方案。",
        About_Hero_Button: "了解更多关于我们",
        About_Section_Heading: "关于我们",
        About_Story_Heading: "我们的故事",
        About_Story_Paragraph1: "中印捷达贸易成立于北京，旨在连接印度企业与中国广阔的商机。",
        About_Story_Paragraph2: "我们的专业团队克服语言障碍、信任鸿沟、物流与质量挑战，让印度企业轻松实现中国采购。",
        About_Mission_Heading: "我们的使命",
        About_Mission_Paragraph1: "我们通过量身定制的采购方案、值得信赖的合作伙伴和端到端支持，简化印中贸易，从首次咨询到最终交付全程护航。",
        About_Mission_Paragraph2: "我们的透明、负责和高效方法助力您的业务全球增长，同时降低风险和成本。",
        About_Section_Button: "点击",


        Quote_Heading: "有产品需求？",
        Quote_Subheading: "免费获取报价。",
        Quote_Description: "无需预付，无需承诺</em> —— 只需免费报价并解答您的所有疑问。",
        Quote_GetQuote: "获取报价！",
        Quote_LearnMore: "了解更多",


        Unique_EndToEnd_Title: "端到端支持",
        Unique_TrustedSupplier_Title: "可信赖的供应商网络",
        Unique_LocalExpertise_Title: "本地专业知识",
        Unique_TransparentProcess_Title: "透明流程",
        Unique_FocusRelationships_Title: "注重关系",
        Unique_CustomSolutions_Title: "为印度企业定制解决方案",
        Unique_Header: "我们的独特之处",


        InfoCard_VerifiedNetwork_Title: "认证网络",
        InfoCard_VerifiedNetwork_Desc: "我们建立了一个经过彻底审核的中国供应商强大网络。每个合作伙伴都经过质量、可靠性和合规性的验证，让您放心采购。",
        InfoCard_ExpertGuidance_Title: "专家指导",
        InfoCard_ExpertGuidance_Desc: "我们在北京和印度的经验丰富团队指导您完成每一步——从产品选择和供应商谈判到质量控制和物流。",
        InfoCard_EndToEndSolutions_Title: "端到端解决方案",
        InfoCard_EndToEndSolutions_Desc: "从初步询价到最终交付，我们处理采购、质量检查、运输和售后支持——让您的进口之旅顺畅无忧。",

        Still_have_Header1: "还有疑问吗？",
        Still_have_Header: "没有找到您想要的答案？欢迎与我们的团队在线沟通。",
        Get_touch: "联系我们",



        discoverProductRange: "探索我们的产品系列",
        accessCuratedSelection: "获取来自中国可信制造商的电子产品、机械、纺织品、家居用品等精选产品，助力您的业务增长。",
        exploreProducts: "探索产品",
        product: "产品",
        productSourcingHeading: "产品采购",
        productSourcingPara1: "Source One 提供透明的全球产品采购，确保最佳价格、质量和及时交付。服务可根据国际企业需求定制，适用于全球采购。",
        productSourcingPara2: "非常适合从事全球贸易的公司，助力您获取全球顶级供应商和市场。",
        readyToReduce: "准备降低您的采购成本？",
        contactUs: "联系我们",
    }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");

    const t = (key) => {
        return translations[language][key] || translations["en"][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
    return context;
};
