import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from "@/http/api";
import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

interface StatsProps {
  subscriberId?: string;
}

export async function Stats({ subscriberId }: StatsProps) {
  let accessCount = 0;
  let inviteCount = 0;
  let rankingPosition: number | null = null;

  if (subscriberId) {
    try {
      // Buscar número de cliques no link
      const clicksResponse = await getSubscriberInviteClicks(subscriberId);
      accessCount = clicksResponse.count;

      // Buscar número de convites feitos
      const inviteResponse = await getSubscriberInviteCount(subscriberId);
      inviteCount = inviteResponse.count;

      // Buscar posição no ranking
      const positionResponse = await getSubscriberRankingPosition(subscriberId);
      rankingPosition = positionResponse.position;
    } catch (_error) {
      accessCount = 0;
      inviteCount = 0;
      rankingPosition = null;
    }
  }

  return (
    <div className="grid gap-3 grid-cols-3">
      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {accessCount}
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
          {inviteCount}
        </span>
        <span className="text-gray-300 text-sm  leading-none text-center">
          Inscrições feitas
        </span>
        <BadgeCheck size={20} className="text-purple absolute top-3 left-3" />
      </div>
      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 relative rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {rankingPosition ? `${rankingPosition}°` : "-"}
        </span>
        <span className="text-gray-300 text-sm  leading-none text-center">
          Posição no ranking
        </span>
        <Medal size={20} className="text-purple absolute top-3 left-3" />
      </div>
    </div>
  );
}
