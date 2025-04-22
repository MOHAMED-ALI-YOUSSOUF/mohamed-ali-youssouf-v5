"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { HeartIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-ali-youssouf/",
  },
  {
    title: "GitHub",
    href: "https://github.com/MOHAMED-ALI-YOUSSOUF",
  },
  {
    title: "Whatsapp",
    href: "https://wa.me/905314340471",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("footer");

  return (
    <footer className="relative  overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-2">
          <div className="text-white/40">
            &copy; {currentYear}. {t("copyright")} 
          </div>
          <div className="text-white/40 flex items-center gap-2">
          <HeartIcon className="size-4" />
            Mohamed Ali Youssouf</div>
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:underline"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
