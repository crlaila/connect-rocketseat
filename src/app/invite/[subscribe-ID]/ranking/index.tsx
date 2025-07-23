import Image from "next/image";
import { getRanking, type GetRanking200RankingItem } from "@/http/api";

import cooper from "@/assets/medal-cooper.svg";
import gold from "@/assets/medal-gold.svg";
import silver from "@/assets/medal-silver.svg";

export async function Ranking() {
  let ranking: GetRanking200RankingItem[] = [];

  try {
    const response = await getRanking();
    ranking = response.ranking;
  } catch (error) {
    console.error("Erro ao buscar ranking:", error);
  }

  const getMedalImage = (position: number) => {
    switch (position) {
      case 0:
        return gold; // 1° lugar
      case 1:
        return silver; // 2° lugar
      case 2:
        return cooper; // 3° lugar
      default:
        return cooper;
    }
  };

  const getMedalAlt = (position: number) => {
    switch (position) {
      case 0:
        return "medalha ouro";
      case 1:
        return "medalha prata";
      case 2:
        return "medalha bronze";
      default:
        return "medalha bronze";
    }
  };

  return (
    <div className="w-full max-w-[440px] space-y-5 mt-20">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de Indicações
      </h2>

      <div className="space-y-4">
        {ranking.length === 0 ? (
          <div className="text-center text-gray-400 py-8">
            Nenhum participante no ranking ainda
          </div>
        ) : (
          ranking.map((participant, index) => (
            <div
              key={participant.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col gap-4"
            >
              <span className="text-sm text-gray-300 leading-none">
                <b>{index + 1}°</b> | {participant.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {participant.score}
              </span>
              {index < 3 && (
                <Image
                  src={getMedalImage(index)}
                  alt={getMedalAlt(index)}
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
