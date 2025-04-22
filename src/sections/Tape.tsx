import { Fragment } from "react";
import StarIcon from "@/assets/icons/star.svg";
import { useTranslations } from "next-intl";

export const TapeSection = () => {
  const t = useTranslations('tapeSection');
    const tRoot = useTranslations();
    const words= Array.isArray(tRoot.raw('tapeSection.words'))
      ? tRoot.raw('tapeSection.words')
      : [];

  // Vérifiez que words est un tableau avant de le parcourir
  const wordList = Array.isArray(words) ? words : [];

  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {wordList.map((word) => (
                  <div key={`${word}-${index}`} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
