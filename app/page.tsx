"use client";
import { useActionState, useEffect, useState } from "react";
import { Card } from "./components/card";
import { ICard } from "./definitions";
import { all, randomTarotCardNumber, setCardsToDraw } from "./actions/tarot";
import { NUMBER_OF_CARDS } from "./constants";
import { redirect } from "next/navigation";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [showCards, setShowCards] = useState<ICard[]>([]);
  const [numberOfCards, setNumberOfCards] = useState(1);
  const [num, formAction, isPending] = useActionState(setCardsToDraw, null);

  useEffect(() => {
    const getTarotCards = async () => {
      const data = await all();
      setCards(data.cards);
    };

    getTarotCards();
  }, []);

  useEffect(() => {
    if (num && !isPending) {
      const drawnCards: ICard[] = [];
      const randomNumbers: number[] = [];
      const numOfCards = typeof num === "string" ? parseInt(num) : 1;

      for (let i = numOfCards; i > 0; i--) {
        while (randomNumbers.length < numOfCards) {
          const n = randomTarotCardNumber();

          if (!randomNumbers.includes(n)) randomNumbers.push(n);
        }
      }

      randomNumbers.forEach((n) => drawnCards.push(cards[n]));
      setShowCards(drawnCards);
    }
  }, [isPending]);

  const toGuidePage = () => {
    redirect("/guide");
  };
  return (
    <div>
      <header className="flex justify-center bg-black bg-opacity-10 backdrop-blur-sm py-7 border-b border-green-950">
        <form action={formAction} className="flex flex-col gap-2 px-4">
          <h1 className="text-white">Draw your cards</h1>
          <div className="flex gap-2 flex-wrap">
            <div className="flex">
              <input
                className="p-4 rounded-l-md bg-stone-400 outline-none"
                type="number"
                name="numberOfCards"
                max={78}
                min={1}
                value={numberOfCards}
                onChange={(e) => setNumberOfCards(parseInt(e.target.value))}
              />
              <button
                type="button"
                className="p-4 bg-green-900 text-white hover:bg-yellow-700 duration-300 w-10 h-full flex justify-center"
                onClick={() => setNumberOfCards((p) => (p > 1 ? p - 1 : 1))}
              >
                -
              </button>
              <button
                type="button"
                className="p-4 bg-green-900 text-white hover:bg-yellow-700 duration-300 h-full flex justify-center rounded-r-md border-l border-stone-800"
                onClick={() =>
                  setNumberOfCards((p) => (p <= NUMBER_OF_CARDS ? p + 1 : 1))
                }
              >
                +
              </button>
            </div>

            <button
              type="submit"
              className="p-4 bg-green-900 text-white rounded-md hover:bg-yellow-700 duration-300"
            >
              Draw
            </button>
            <button
              type="button"
              className="p-4 bg-green-900 text-white rounded-md hover:bg-yellow-700 duration-300"
              onClick={() => setShowCards([])}
            >
              Clear
            </button>
            <button
              type="button"
              className="p-4 bg-green-900 text-white rounded-md hover:bg-yellow-700 duration-300"
              onClick={toGuidePage}
            >
              Tarot card guide
            </button>
          </div>
        </form>
      </header>
      <main className="flex justify-center gap-3 flex-wrap m-4 my-7">
        {showCards.length > 0 &&
          showCards.map((card: ICard) => (
            <Card key={card.name_short} card={card} />
          ))}
      </main>
    </div>
  );
}
