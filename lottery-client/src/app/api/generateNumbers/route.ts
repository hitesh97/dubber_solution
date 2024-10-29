import { NextResponse } from "next/server";

//This is one way to generate the random numbers API endpoint on same application as client
// This is possible because NextJs applications allow API routes on server side.
// Typically this is not thw way to do it due it its coupling with UI project..hence
// Check the `lottery-server` project for .net Core API implementation

const generateLotteryNumbers = (count: number, range: number): number[] => {
  const numbers = new Set<number>();
  while (numbers.size < count) {
    const num = Math.floor(Math.random() * range) + 1;
    numbers.add(num);
  }
  return Array.from(numbers).sort((a, b) => a - b);
};

export async function GET() {
  const mainNumbers = generateLotteryNumbers(6, 49);
  const bonusNumber = generateLotteryNumbers(1, 49)[0];
  return NextResponse.json({ mainNumbers, bonusNumber });
}
