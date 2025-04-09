"use client";
import { useState } from "react";

const messages = [
  "今天沒死也算是一種堅持。",
  "你還沒放棄，代表世界還沒贏。",
  "喝水也算是一種微型生還儀式。",
  "牛奶糖說：你還沒下線，所以還不准結束。",
  "活著不是英雄壯舉，有時只是再呼吸一下。",
  "今天沒有意義沒關係，你還在就是意義。",
  "躺著也是一種對抗地心引力的方式。",
  "你還記得要來看這句話，這就已經很了不起了。",
  "世界爛沒關係，你不用跟著一起壞掉。",
  "活著的你，比所有結束還要難能可貴。"
];

export default function Page() {
  const [quote, setQuote] = useState<string | null>(null);
  const drawMessage = () => {
    const index = Math.floor(Math.random() * messages.length);
    setQuote(messages[index]);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 space-y-6 bg-neutral-100 text-neutral-800">
      <h1 className="text-2xl font-semibold text-center">今天還在 · 試營運版</h1>
      <button
        onClick={drawMessage}
        className="text-lg px-6 py-3 bg-black text-white rounded-xl hover:opacity-90 transition"
      >
        點一下 · 抽一句「沒死的理由」
      </button>
      {quote && (
        <div className="max-w-xl bg-white p-6 rounded-xl shadow text-center text-lg">
          {quote}
        </div>
      )}
    </main>
  );
}
