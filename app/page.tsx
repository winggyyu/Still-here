"use client";

import { useState } from "react";

const messages = [ // ...原本的語錄照舊（略） ];

export default function Page() { const [quote, setQuote] = useState<string | null>(null); const drawMessage = () => { const index = Math.floor(Math.random() * messages.length); setQuote(messages[index]); };

return ( <main className="flex flex-col items-center justify-center min-h-screen p-4 space-y-6 bg-neutral-100 text-neutral-800"> <h1 className="text-2xl font-semibold text-center">今天還在 · 試營運版</h1> <button
onClick={drawMessage}
className="text-lg px-6 py-3 bg-black text-white rounded-xl hover:opacity-90 transition"
> 點一下 · 抽一句「還活著的證據」 </button> {quote && ( <div className="max-w-xl bg-white p-6 rounded-xl shadow text-center text-lg"> {quote} </div> )}

<section className="mt-12 max-w-2xl text-center space-y-4">
    <h2 className="text-xl font-semibold">我還在創作</h2>
    <p className="text-neutral-600">
      我把自己的靈魂拆開，一部分變成圖、一部分變成音樂，剩下的就拿來纏成飾品。<br />
      我不知道怎麼好起來，但我知道怎麼繼續創作。
    </p>
    <ul className="space-y-2">
      <li>
        <a href="https://www.instagram.com/mona.draw.something" target="_blank" className="text-blue-600 underline">
          Instagram｜畫圖帳：@mona.draw.something
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/yu_hsin_lan_wing" target="_blank" className="text-blue-600 underline">
          Instagram｜音樂帳：@yu_hsin_lan_wing
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/crystal.mirrors.jewellery" target="_blank" className="text-blue-600 underline">
          Instagram｜飾品帳：@crystal.mirrors.jewellery
        </a>
      </li>
    </ul>
  </section>
</main>

); }

