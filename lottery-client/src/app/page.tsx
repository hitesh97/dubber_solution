"use client";

import { useState } from "react";

export default function Home() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [bonus, setBonus] = useState<number | null>(null);

  const getColor = (num: number): string => {
    if (num >= 1 && num <= 9) return "bg-gray-300";
    if (num >= 10 && num <= 19) return "bg-blue-300";
    if (num >= 20 && num <= 29) return "bg-pink-300";
    if (num >= 30 && num <= 39) return "bg-green-300";
    if (num >= 40 && num <= 49) return "bg-yellow-300";
    return "bg-white";
  };

  const handleGenerateNumbers = async () => {
    try {
      //NextJs provides the posibility of creating APIs using NodeJs/Typescript on same project/separate project.
      // const response = await fetch("/api/generateNumbers");
      const response = await fetch(
        "http://localhost:5000/api/lottery/generate"
      );
      const data = await response.json();
      setNumbers(data.mainNumbers);
      setBonus(data.bonusNumber);
    } catch (error) {
      console.error("Error fetching lottery numbers:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Lottery Number Generator</h1>
      <button
        onClick={handleGenerateNumbers}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Generate Numbers
      </button>

      {numbers.length > 0 && (
        <div className="mt-6">
          <div className="text-lg font-semibold mb-2">Your Numbers:</div>
          <div className="flex space-x-2">
            {numbers.map((num) => (
              <span
                key={num}
                className={`w-12 h-12 flex items-center justify-center rounded-full ${getColor(
                  num
                )}`}
              >
                {num}
              </span>
            ))}
          </div>
          {bonus && (
            <div className="mt-4">
              <div className="text-lg font-semibold">Bonus Ball:</div>
              <span
                className={`w-12 h-12 flex items-center justify-center rounded-full ${getColor(
                  bonus
                )}`}
              >
                {bonus}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
