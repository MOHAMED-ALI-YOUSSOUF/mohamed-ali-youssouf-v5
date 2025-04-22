'use client';

import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';
import { useLocale, useTranslations } from 'next-intl';
// import { usePathname, useRouter } from 'next-intl/client';
import Flag from 'react-world-flags';
import { ChevronDownIcon } from 'lucide-react';

export default function LocaleSwitcher() {
  const t = useTranslations('');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  // Mapping des drapeaux en fonction des locales
  const flagMapping: { [key: string]: string } = {
    fr: 'FR', // France
    en: 'US', // United States
    tr: 'TR', // Turkey
  };

  const currentFlag = flagMapping[locale] || 'US'; // Par défaut : US

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="header-button h-[41px]">
        <div className="flex items-center gap-1">

        {/* Affiche le drapeau correspondant à la locale actuelle */}
        <Flag code={currentFlag} style={{ width: 30, height: 18 }} />
        {locale.toUpperCase().slice(0, 2)}
        <ChevronDownIcon className="w-4 h-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t('selectLanguage')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={locale} onValueChange={onLocaleChange}>
          {['en', 'fr', 'tr'].map((lang) => (
            <DropdownMenuRadioItem key={lang} value={lang}>
              <div className="flex items-center gap-2">
                {/* Affiche le drapeau correspondant */}
                <Flag code={flagMapping[lang]} style={{ width: 20, height: 15 }} />
                {t(`locale.${lang}`)}
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
