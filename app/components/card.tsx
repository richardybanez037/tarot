import { ICard } from "@/app/definitions";
import { getCardImage } from "../actions/tarot";

export function Card({ card }: { card: ICard }) {
  const cardImage =
    card.name_short && card.name_short !== null
      ? getCardImage(card.name_short)
      : undefined; // Use `undefined` instead of `null`

  return (
    <div className="w-52 cursor-pointer border-yellow-600 border border-2 rounded-sm bg-white">
      <div>
        {cardImage && (
          <img className="w-full" src={cardImage} alt="tarot card image" />
        )}
        <p className="px-2">{card?.name}</p>
      </div>
    </div>
  );
}
