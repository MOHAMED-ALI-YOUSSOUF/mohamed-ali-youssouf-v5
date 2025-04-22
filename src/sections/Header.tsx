'use client';
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';
import { LanguageSwitchDropdown } from "@/components/LanguageSwitchDropdown";
import { useLocale } from 'next-intl';
import LocaleSwitcher from "@/components/LocaleSwitcher";
export const Header = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const isHome = pathname === `/${locale}`;
  const t = useTranslations('header');
  




  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10 ">
      <div className="relative">

    
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href={`/${locale}#`} className="nav-item">{t('home')}</a>

        {isHome ? (
          <a href={`/${locale}#projects`} className="nav-item">{t('projects')}</a>
        ) : (
          <a href={`/${locale}/projects`} className="nav-item">{t('projects')}</a>
        )}

        <a href={`/${locale}#about`} className="nav-item">{t('about')}</a>
        <a href={`/${locale}#contact`} className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">{t('contact')}</a>
    
      <div className="hidden md:block">

        <LanguageSwitchDropdown />
        </div>
     </nav>
      <div className="absolute right-0 top-12 md:hidden">

        <LanguageSwitchDropdown />
      </div>
        </div>
    </div>
  );
};