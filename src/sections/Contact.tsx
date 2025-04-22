"use client"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { useTranslations } from "next-intl";

export const ContactSection = () => {
  const t=useTranslations('contactSection')
  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0 overflow-hidden">
          <div className="absolute inset-0 opacity-5 -z-10" style={{
            backgroundImage: `url(${grainImage.src})`
          }}></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">{t('title')}</h2>
              <p className="text-sm md:text-base mt-2">{t('description')}</p>
            </div>
            <div>
              <button onClick={() => window.open('https://linkedin.com/in/mohamed-ali-youssouf')} className="inline-flex text-white bg-gray-900 items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:-rotate-3 transition duration-300">
                <span className="font-semibold">{t('button')}</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};