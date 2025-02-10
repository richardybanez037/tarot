"use client";

import { useEffect, useState } from "react";
import { all } from "../actions/tarot";
import { ICard } from "../definitions";
import { Card } from "../components/card";
import { redirect } from "next/navigation";

export default function Page() {
  // const arcana: ICard[] = [];
  // const wands: ICard[] = [];
  // const cups: ICard[] = [];
  // const pentacles: ICard[] = [];
  // const swords: ICard[] = [];

  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    const getAllCards = async () => {
      const data = await all();
      // data.cards.forEach((d: ICard) => {
      //   if (d.name_short.includes("ar")) {
      //     arcana.push(d);
      //   } else if (d.name_short.includes("wa")) {
      //     wands.push(d);
      //   } else if (d.name_short.includes("cu")) {
      //     cups.push(d);
      //   } else if (d.name_short.includes("pe")) {
      //     pentacles.push(d);
      //   } else if (d.name_short.includes("sw")) {
      //     swords.push(d);
      //   }
      // });

      // setCards([...arcana, ...wands, ...cups, ...pentacles, ...swords]);
      setCards(data.cards);
    };

    getAllCards();
  }, []);

  const toHome = () => redirect("/");
  return (
    <div>
      <header className="flex justify-center bg-black bg-opacity-10 backdrop-blur-sm py-7 border-b border-green-950 text-white items-center gap-10 flex-wrap px-4">
        <button
          className="p-4 bg-green-900 text-white rounded-md hover:bg-yellow-700 duration-300"
          onClick={toHome}
        >
          ⬅️ Draw tarot cards
        </button>
        <h1>Tarot card guide</h1>
      </header>
      <main className="flex justify-center gap-3 flex-wrap m-4 my-7">
        {cards.length > 0 &&
          cards.map((card: ICard) => (
            <Card key={card.name_short} card={card} />
          ))}
      </main>
    </div>
  );
}
