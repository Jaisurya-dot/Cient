 import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Mock language context for demo
const useLanguage = () => {
  const [language, setLanguage] = useState('en');
  return { language, setLanguage };
};

// Enhanced Star component with animation
const Star = ({ filled = true, delay = 0 }) => (
  <svg 
    className={`w-5 h-5 inline transition-all duration-300 ${
      filled ? 'text-yellow-400 scale-100' : 'text-gray-300 scale-95'
    }`}
    fill="currentColor" 
    viewBox="0 0 20 20"
    style={{ animationDelay: `${delay}ms` }}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.285-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
  </svg>
);

// StarRating component with hover effect
const StarRating = ({ rating }) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  
  return (
    <div className="flex items-center gap-1 mb-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star 
          key={star} 
          filled={star <= (hoveredRating || rating)}
          delay={star * 100}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600 font-medium">({rating}.0)</span>
    </div>
  );
};

// Enhanced testimonials with more realistic data
const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    name: {
      en: "Acme Corporation",
      zh: "Acme Corporation"
    },
    position: {
      en: "Procurement Director",
      zh: "采购总监"
    },
    stars: 5,
    text: {
      en: "Sino India Jeda Trading transformed our sourcing process with their reliable and transparent service. Their expertise helped us reduce costs by 30% while improving product quality significantly. The team's attention to detail and commitment to excellence is unmatched.",
      zh: "中印捷达贸易以其可靠透明的服务彻底改变了我们的采购流程。他们的专业知识帮助我们降低了30%的成本，同时显著提升了产品质量。团队对细节的关注和对卓越的承诺无与伦比。"
    },
    project: {
      en: "Electronics Components Sourcing",
      zh: "电子元件采购"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
    userImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
    name: {
      en: "Global Tech Solutions",
      zh: "Global Tech Solutions"
    },
    position: {
      en: "Supply Chain Manager",
      zh: "供应链经理"
    },
    stars: 5,
    text: {
      en: "The team at Sino India Jeda Trading provided exceptional support throughout our bulk import project. Their on-ground presence in Beijing ensured smooth communication and timely delivery. A trusted partner that consistently exceeds expectations.",
      zh: "中印捷达贸易团队在我们大宗进口项目中提供了卓越的支持。他们在北京的本地团队确保了沟通顺畅和及时交付。是一个值得信赖的合作伙伴，始终超越期望。"
    },
    project: {
      en: "Manufacturing Equipment Import",
      zh: "制造设备进口"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    name: {
      en: "Innovate Manufacturing",
      zh: "Innovate Manufacturing"
    },
    position: {
      en: "Operations Manager",
      zh: "运营经理"
    },
    stars: 5,
    text: {
      en: "Thanks to Sino India Jeda Trading, we were able to source high-quality custom machinery parts with complete confidence. Their thorough supplier verification and multi-stage quality control processes gave us peace of mind and guaranteed results.",
      zh: "多亏了中印捷达贸易，我们能够放心采购高质量的定制机械零件。他们严格的供应商审核和多阶段质量控制流程让我们非常安心，并保证了结果。"
    },
    project: {
      en: "Custom Machinery Parts",
      zh: "定制机械零件"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop",
    userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    name: {
      en: "Sunrise Retail Group",
      zh: "Sunrise Retail Group"
    },
    position: {
      en: "Purchasing Director",
      zh: "采购总监"
    },
    stars: 5,
    text: {
      en: "Working with Sino India Jeda Trading has been a game-changer for our retail operations. Their deep market knowledge and extensive supplier network helped us launch three new product lines ahead of schedule and under budget.",
      zh: "与中印捷达贸易合作改变了我们零售业务的游戏规则。他们深厚的市场知识和广泛的供应商网络帮助我们提前并在预算内推出了三个新产品线。"
    },
    project: {
      en: "Consumer Goods Sourcing",
      zh: "消费品采购"
    }
  }
];

const sectionTitle = {
  en: <>What our <span className="text-[#1ebeb0] font-bold">clients say</span></>,
  zh: <>客户<span className="text-[#1ebeb0] font-bold">评价</span></>
};

const TestimonialSection = () => {
  const { language, setLanguage } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCards, setVisibleCards] = useState(3);

  // Responsive card count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
        {sectionTitle[language]}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        {language === 'en' 
          ? "Discover how we've helped businesses worldwide achieve their sourcing goals with confidence and success."
          : "了解我们如何帮助全球企业充满信心地实现采购目标。"
        }
        </p>
        
        {/* Language Toggle */}
        <div className="mt-6 flex justify-center">
        <div className="bg-white rounded-full p-1 shadow-md">
          <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'en' 
            ? 'bg-[#1ebeb0] text-white shadow-md' 
            : 'text-gray-600 hover:text-[#1ebeb0]'
          }`}
          >
          EN
          </button>
          <button
          onClick={() => setLanguage('zh')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'zh' 
            ? 'bg-[#1ebeb0] text-white shadow-md' 
            : 'text-gray-600 hover:text-[#1ebeb0]'
          }`}
          >
          中文
          </button>
        </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#1ebeb0] hover:bg-[#1ebeb0] hover:text-white -translate-x-6"
        >
        <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#1ebeb0] hover:bg-[#1ebeb0] hover:text-white translate-x-6"
        >
        <ChevronRight className="w-6 h-6" />
        </button>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-8">
        {getVisibleTestimonials().map((testimonial, index) => (
          <div
          key={`${currentIndex}-${index}`}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-fadeIn"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          >
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <img 
            src={testimonial.image} 
            alt={testimonial.project[language]}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
            <div className="text-sm font-medium bg-[#1ebeb0] px-3 py-1 rounded-full">
              {testimonial.project[language]}
            </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Client Info */}
            <div className="flex items-center mb-4">
            <img 
              src={testimonial.userImage} 
              alt={testimonial.name[language]}
              className="w-12 h-12 rounded-full border-4 border-white shadow-md -mt-8 z-10 relative"
            />
            <div className="ml-3">
              <h4 className="font-semibold text-gray-800">{testimonial.name[language]}</h4>
              <p className="text-sm text-[#1ebeb0] font-medium">{testimonial.position[language]}</p>
            </div>
            </div>

            {/* Rating */}
            <StarRating rating={testimonial.stars} />

            {/* Quote */}
            <div className="relative">
            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#1ebeb0] opacity-20" />
            <p className="text-gray-700 leading-relaxed italic pl-6">
              "{testimonial.text[language]}"
            </p>
            </div>
          </div>
          </div>
        ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
          key={index}
          onClick={() => {
            setCurrentIndex(index);
            setIsAutoPlaying(false);
          }}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentIndex 
            ? 'bg-[#1ebeb0] w-8' 
            : 'bg-gray-300 hover:bg-gray-400'
          }`}
          />
        ))}
        </div>
      </div>

      {/* Removed Stats Section */}
      </div>

      <style jsx>{`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.6s ease-out;
      }
      `}</style>
    </section>
    );
};

export default TestimonialSection;