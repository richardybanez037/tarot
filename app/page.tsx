"use client";
import { useActionState, useEffect, useState } from "react";
import { Card } from "./components/card";
import { ICard } from "./definitions";
import { all, randomTarotCardNumber, setCardsToDraw } from "./actions/tarot";

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
  return (
    <div>
      <header className="flex justify-center">
        <form action={formAction} className="flex flex-col gap-2">
          <h1>Select number of cards to draw:</h1>
          <div className="flex gap-2">
            <input
              className="border p-4 w-20"
              type="number"
              name="numberOfCards"
              max={78}
              min={1}
              value={numberOfCards}
              onChange={(e) => setNumberOfCards(parseInt(e.target.value))}
            />
            <button className="border p-4">Draw</button>
            <button
              type="button"
              className="border p-4"
              onClick={() => setShowCards([])}
            >
              Clear
            </button>
          </div>
        </form>
      </header>
      <main className="flex gap-2 flex-wrap m-10">
        {showCards.length > 0 &&
          showCards.map((card: ICard) => (
            <Card key={card.name_short} card={card} />
          ))}
      </main>
    </div>
  );
}
