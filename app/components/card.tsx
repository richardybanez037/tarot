import { ICard } from "@/app/definitions";
import { getCardImage } from "../actions/tarot";

export function Card({ card }: { card: ICard }) {
  console.log(card);
  return (
    <div className="w-52 cursor-pointer">
      <div>
        <img src={getCardImage(card.name_short)} />
        {card.name}
      </div>
    </div>
  );
}
