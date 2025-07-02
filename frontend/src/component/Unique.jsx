// components/UniqueSection.jsx
import { FaTruckMoving, FaHandshake, FaMapMarkerAlt, FaEye, FaHeart, FaUserCog } from "react-icons/fa";
import { useLanguage } from "../context/LanguageProvider";



export default function UniqueSection() {

    const { t } = useLanguage();





    const uniqueFeatures = [
        {
            icon: <FaTruckMoving size={40} className="text-cyan-700" />,
            title: t('Unique_EndToEnd_Title'),
            desc: "Comprehensive assistance from sourcing to delivery."
        },
        {
            icon: <FaHandshake size={40} className="text-cyan-700" />,
            title: t('Unique_TrustedSupplier_Title'),
            desc: "Reliable partnerships with verified Chinese suppliers."
        },
        {
            icon: <FaMapMarkerAlt size={40} className="text-cyan-700" />,
            title: t('Unique_LocalExpertise_Title'),
            desc: "Deep understanding of Chinese and Indian markets."
        },
        {
            icon: <FaEye size={40} className="text-cyan-700" />,
            title: t('Unique_TransparentProcess_Title'),
            desc: "Clear, honest communication at every stage."
        },
        {
            icon: <FaHeart size={40} className="text-cyan-700" />,
            title: t('Unique_FocusRelationships_Title'),
            desc: "Long-term partnerships built on trust and care."
        },
        {
            icon: <FaUserCog size={40} className="text-cyan-700" />,
            title: t('Unique_CustomSolutions_Title'),
            desc: "Tailored sourcing strategies for your unique needs."
        }
    ];

    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-black text-center mb-8">{t('Unique_Header')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {uniqueFeatures.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            {feature.icon}
                            <h3 className="font-semibold text-lg mt-4 mb-2">{feature.title}</h3>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
