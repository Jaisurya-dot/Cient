import { FaArrowRight } from "react-icons/fa";
import SourcingSection from '../component/SourcingSection';
import TestimonialsSection from '../component/Testimonal';
import StatsSection from '../component/Progress';
import FAQSection from '../component/FAQ';
import { useLanguage } from '../context/LanguageProvider';
import { Link } from "react-router-dom";


const Home = () => {
    // Button handlers
    const handleStartSourcing = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };
    const handleLearnMore = () => {
        document.getElementById('why-choose')?.scrollIntoView({ behavior: 'smooth' });
    };

    // Internationalization
    const { t } = useLanguage();

    return (
        <>
            {/* Hero Background */}
            <div className="relative w-full min-h-[70vh] md:min-h-screen overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('logistics-means-transport-together-with-technological-futuristic-holograms_23-2151662944 (1).avif')`,
                        backgroundAttachment: "fixed",
                    }}
                    aria-hidden="true"
                />
                {/* Grid overlay */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern
                                id="grid"
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 40 0 L 0 0 0 40"
                                    fill="none"
                                    stroke="#fff"
                                    strokeWidth="0.5"
                                    opacity="0.10"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
                {/* Hero Section */}
                <section className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] md:min-h-screen text-center px-4 py-12 sm:py-16 md:py-24">
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 sm:p-8 max-w-3xl mx-auto shadow-lg">
                        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow">
                            {t('Header_Title')}
                        </h1>
                        <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-8">
                            {t('Hero_Paragraph')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
                            <button
                                className="w-full sm:w-auto bg-white/30 hover:bg-white/40 text-white font-semibold px-6 py-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white/60"
                                onClick={handleStartSourcing}
                            >
                                {t('Start_Sourcing') || 'Start Sourcing'}
                            </button>
                            <Link to='/About'>
                                <button
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white/60"
                                    onClick={handleLearnMore}
                                >
                                    {t('Learn_More') || 'Learn More'} <FaArrowRight />
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            {/* Main Content Sections */}
            <div className="space-y-12 md:space-y-16">
                <SourcingSection
                    heading={t('About_Us') || "About Us"}
                    paragraph1={t('About_Paragraph1') || "Source One is your one-stop product sourcing in India solution center. We have total transparency in our sourcing services to ensure that our clients get the best price, top quality, and timely delivery of products sourced in India."}
                    paragraph2={t('About_Paragraph2') || "Enjoy customized product engineering and sourcing services in India suited to your unique needs and expectations."}
                    imageSrc="https://img.freepik.com/free-photo/silhouette-confident-businesspeople_1098-1768.jpg?uid=R113708060&ga=GA1.1.574525859.1722267109&semt=ais_hybrid&w=740"
                    imageAlt="Sourcing process"
                    bgClass="bg-gray-50"
                    reverseLayout={false}
                    button={t('Get_Started') || 'Get Started'}
                    link={'/About'}
                />
                <SourcingSection
                    heading={t('Product') || "Product"}
                    paragraph1={t('Product_Paragraph1') || "From supplier verification to logistics and delivery, our team in Beijing and India ensures a seamless sourcing experience for every client."}
                    paragraph2={t('Product_Paragraph2') || "Benefit from real-time updates, quality checks, and transparent communication at every stage."}
                    imageSrc="https://media.istockphoto.com/id/1181690920/photo/cheerful-sales-woman-showing-a-design-on-tablet-to-mid-adult-couple-looking-for-furniture-at.jpg?b=1&s=612x612&w=0&k=20&c=td3IO6BiWmx95s-tPMBh_s1wfB2g8k1N_IPNlouMYOM="
                    imageAlt="End-to-End Support"
                    bgClass="bg-gray-200"
                    reverseLayout={true}
                    button={'Product'}
                    link={'/Products'}
                />
                <SourcingSection
                    heading={t('Service') || "Service"}
                    paragraph1={t('Service_Paragraph1') || "Whether you need bulk imports or niche products, we tailor our sourcing strategies to fit your business goals."}
                    paragraph2={t('Service_Paragraph2') || "Experience the advantage of a dedicated sourcing partner committed to your growth."}
                    imageSrc="https://media.istockphoto.com/id/1451079337/photo/customer-review-good-rating-concept-hand-pressing-user-and-five-star-icon-on-visual-screen.jpg?b=1&s=612x612&w=0&k=20&c=Bm3-C6lju2XqoMr1lGtvOrcboOb4iOm6-tm1zIIwEII="
                    imageAlt="Custom Sourcing Solutions"
                    bgClass="bg-gray-50"
                    reverseLayout={false}
                    button={t('Contact_Us') || 'Contact Us'}
                    link={'/Service'}
                />

                <StatsSection />
                <TestimonialsSection />
                <FAQSection />
                {/* <ContactSection /> */}
            </div>
        </>
    );
};

export default Home;
