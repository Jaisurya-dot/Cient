import { FaHandshake, FaLightbulb, FaShippingFast } from "react-icons/fa";
import { useLanguage } from "../context/LanguageProvider";

function InfoCards() {



  const { t } = useLanguage()
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch bg-[#f8f9fb] p-8">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-sm p-8 flex-1 min-w-[280px] max-w-sm">
        <div className="bg-[#8d5cff] w-12 h-12 flex items-center justify-center rounded-xl mb-6">
          <FaHandshake className="text-white text-2xl" />
        </div>
        <h3 className="font-bold text-xl text-[#23214b] mb-3">{t('InfoCard_VerifiedNetwork_Title')}</h3>
        <p className="text-[#23214b] text-opacity-70 leading-relaxed text-base">

          {t('InfoCard_VerifiedNetwork_Desc')}
        </p>
      </div>
      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow-sm p-8 flex-1 min-w-[280px] max-w-sm">
        <div className="bg-[#8d5cff] w-12 h-12 flex items-center justify-center rounded-xl mb-6">
          <FaLightbulb className="text-white text-2xl" />
        </div>
        <h3 className="font-bold text-xl text-[#23214b] mb-3">{t('InfoCard_ExpertGuidance_Title')}</h3>
        <p className="text-[#23214b] text-opacity-70 leading-relaxed text-base">
          {t('InfoCard_ExpertGuidance_Desc')}
        </p>
      </div>
      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow-sm p-8 flex-1 min-w-[280px] max-w-sm">
        <div className="bg-[#8d5cff] w-12 h-12 flex items-center justify-center rounded-xl mb-6">
          <FaShippingFast className="text-white text-2xl" />
        </div>
        <h3 className="font-bold text-xl text-[#23214b] mb-3">{t('InfoCard_EndToEndSolutions_Title')}</h3>
        <p className="text-[#23214b] text-opacity-70 leading-relaxed text-base">
          {t('InfoCard_EndToEndSolutions_Desc')}
        </p>
      </div>
    </div>
  );
}

export default InfoCards;
