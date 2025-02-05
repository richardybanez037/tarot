import { ICard } from "@/app/definitions";
import { getCardDetail, getCardImage } from "../actions/tarot";

export function Card({ card }: { card: ICard }) {
  const cardImage =
    card.name_short && card.name_short !== null
      ? getCardImage(card.name_short)
      : undefined; // Use `undefined` instead of `null`

  return (
    <div className="w-40 rounded-sm bg-green-800 text-white bg-opacity-20 hover:scale-[1.02] duration-200">
      <div>
        {cardImage && (
          <img className="w-full" src={cardImage} alt="tarot card image" />
        )}
        <p className="px-2 bg-yellow-900">{card?.name}</p>
        <p className="px-2 text-sm">{getCardDetail(card.name_short)}</p>
      </div>
    </div>
  );
}
