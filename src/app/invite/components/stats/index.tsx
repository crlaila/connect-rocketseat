import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

export function Stats() {
  return (
    <div className="grid gap-3 grid-cols-3">
      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          1042
        </span>
        <span className="text-gray-300 text-sm  leading-none text-center">
          Acessos ao link
        </span>
        <MousePointerClick
          size={20}
          className="text-purple absolute top-3 left-3"
        />
      </div>
      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 relative rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          1042
        </span>
        <span className="text-gray-300 text-sm  leading-none text-center">
          Inscrições feitas
        </span>
        <BadgeCheck size={20} className="text-purple absolute top-3 left-3" />
      </div>
      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 relative rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          3°
        </span>
        <span className="text-gray-300 text-sm  leading-none text-center">
          Posição no ranking
        </span>
        <Medal size={20} className="text-purple absolute top-3 left-3" />
      </div>
    </div>
  );
}
