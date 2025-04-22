'use client';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';

export const LanguageSwitchDropdown = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('header');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
  ];

  const switchLanguage = (newLocale: string) => {
    setIsOpen(false); // Fermer le dropdown avant de naviguer

    // Remplace uniquement la partie locale
    const pathWithoutLocale = pathname.replace(/^\/(fr|en)/, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    setTimeout(() => {
      router.replace(newPath, { scroll: false });

    }, 100); // petit délai pour laisser l'animation finir
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 border border-white/15 rounded-full bg-white/10 backdrop-blur text-sm hover:bg-white/20 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="size-4" />
        <span>{languages.find(lang => lang.code === locale)?.label}</span>
        <ChevronDown className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence mode="wait" initial={false}>
        {isOpen && (
          <motion.ul
            key="dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 right-0 bg-gray-900 border border-white/15 rounded-lg shadow-lg z-50"
          >
            {languages.map(lang => (
              <li key={lang.code}>
                <button
                  onClick={() => switchLanguage(lang.code)}
                  className="w-full px-4 py-2 text-sm hover:bg-white/10 transition-colors"
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
