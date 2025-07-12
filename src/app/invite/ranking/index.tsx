import Image from "next/image";

import cooper from "../../../assets/medal-cooper.svg";
import gold from "../../../assets/medal-gold.svg";
import silver from "../../../assets/medal-silver.svg";

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de Indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col gap-4">
          <span className="text-sm text-gray-300 leading-none">
            <b>1°</b> | Laila Silva
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>
          <Image
            src={gold}
            alt="medalha ouro"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col gap-4">
          <span className="text-sm text-gray-300 leading-none">
            <b>2°</b> | João Pereira
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            928
          </span>
          <Image
            src={silver}
            alt="medalha prata"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col gap-4">
          <span className="text-sm text-gray-300 leading-none">
            <b>3°</b> | Carolina Souza
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            830
          </span>
          <Image
            src={cooper}
            alt="medalha bronze"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  );
}
