import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from '@/i18n/useTranslation';

export default function ServiceAreasSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 glass-section-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
          {t.serviceAreas.heading}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card glass-hover p-6">
            <h3 className="font-bold text-xl text-cyan-800 dark:text-cyan-300 mb-4">{t.serviceAreas.eastCentral}</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-200 font-medium">
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> નિકોલ</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> નરોડા</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> હંસપુરા</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> નાના ચિલોડા</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> બાપુનગર</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> વસ્ત્રાલ</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> કાઠવાડા</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> કુબેરનગર</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> ઓઢવ</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> મણિનગર</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> કૃષ્ણનગર</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> શાહીબાગ</li>
            </ul>
          </div>

          <div className="glass-card glass-hover p-6">
            <h3 className="font-bold text-xl text-cyan-800 dark:text-cyan-300 mb-4">{t.serviceAreas.west}</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-200 font-medium">
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> સેટેલાઇટ</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> બોપલ</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> પ્રહલાદનગર</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> ગોતા</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> થલતેજ</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> સાયન્સ સીટી</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> વૈષ્ણોદેવી</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> બોડકડેવ</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> સાબરમતી</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> ચાંદખેડા</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> રાણીપ</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> નવરંગપુરા</li>
            </ul>
          </div>

          <div className="glass-card glass-hover p-6">
            <h3 className="font-bold text-xl text-cyan-800 dark:text-cyan-300 mb-4">{t.serviceAreas.gandhinagar}</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-200 font-medium">
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> સેક્ટર ૧ થી ૩૦</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> સરગાસણ</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> કુડાસણ</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> રાયસણ</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> ઈન્ફોસિટી</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> ગિફ્ટ સિટી</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> મોટેરા</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> અડાલજ</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> પેથાપુર</li>
              <li className="flex items-center gap-1.5"><FaMapMarkerAlt className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" /> વાવોલ</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center glass-panel p-6">
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
            {t.serviceAreas.footerText}
          </p>
          <p className="text-gray-700 dark:text-gray-200 text-xs">
            {t.serviceAreas.footerEnglish}
          </p>
        </div>
      </div>
    </section>
  );
}
