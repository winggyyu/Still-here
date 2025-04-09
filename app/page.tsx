'use client';
import React, { useState } from "react";

const quotes = [ "我不急著成為別人眼中的樣子，我只想慢慢拼湊出我自己的形狀。", "靈魂會累，但創作是靈魂的伸展。", "每個喜歡畫畫的人，心裡都有一個沒被說完的故事。", "創作不是因為我懂了什麼，是因為我還不懂。", "我把自己畫進畫裡，是為了從裡面把自己救出來。", "音樂是我對這個世界最溫柔的抵抗。", "當我不知道怎麼說話時，我就畫畫或打鼓。", "沒有靈感的時候，就創作一個沒有靈感的自己。", "創作是靈魂和現實妥協的過程，也是唯一不會背叛我的東西。", "我不是藝術家，我只是還沒找到別的活法。", "每一次創作，都是一次在自己靈魂上動手術。", "即使一切都很破碎，畫畫也讓我覺得自己完整了一點點。", "我把沉默藏進每一條線條裡。", "每件作品都是我想說話的證據。", "不是作品在等完成，是我在等被理解。", "畫畫是我用來跟過去和解的方式。", "我的音樂不是為了表演，是為了不崩潰。", "創作是我與世界之間的緩衝區。", "創作不是逃避，是深潛。", "我不想讓別人羨慕我，只想讓自己不後悔。", "創作時我最自由，也最脆弱。", "靈魂有時候會乾掉，創作是我澆它的水。", "我的筆知道我在想什麼，即使我自己不知道。", "有時候，我不是在畫畫，是在呼吸。", "音樂是我記憶的一種形式。", "每次敲鼓，都是一次對世界的回音。", "我創作，不是因為我會，而是因為我非做不可。", "每一條線，都是我不敢說的話。", "沒有靈感的日子，我就畫陰影。", "創作是我和自己說話的方式。", "有時候我也想放棄，但手會自己動。", "畫畫教我：有時候美，來自不完美。", "創作是為了在不懂的世界裡，留下自己的痕跡。", "我不是在製造作品，我在製造自己。", "靈魂太吵的時候，我就開始畫畫。", "每一次創作，都像一次內心的小地震。", "我把畫畫當日記，但沒人看得懂。", "創作像呼吸，不做會死。", "我創作，不是為了展示，是為了生存。", "當我畫畫時，我不需要解釋自己。", "創作是我對抗遺忘的方式。", "每一首歌都是一種祕密的祈禱。", "我的作品不需要被懂，它只需要存在。", "畫裡的貓懂我勝過任何人。", "創作時我沒有年齡，沒有性別，只有靈魂。", "創作教會我怎麼陪自己走過低谷。", "有時候我覺得作品比我還活著。", "我在創作裡學會愛自己。", "我不會停下來，因為這是我唯一的路。", "創作不是解答，而是提問。" ];

export default function Page() { const [quote, setQuote] = useState("還活著的證據");

function handleClick() { const randomIndex = Math.floor(Math.random() * quotes.length); setQuote(quotes[randomIndex]); }

return ( <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-gray-900 p-6 flex flex-col justify-between"> <div> <h1 className="text-4xl font-black mb-2">今天還在 ・ 明天不一定</h1> <div className="text-2xl mb-4">{"🐾"}</div>

<button
      className="border border-gray-400 rounded px-3 py-1 text-sm hover:bg-gray-100 mb-2"
      onClick={handleClick}
    >
      點一下：抽一句「還活著的證據」
    </button>
    <p className="text-xl font-light italic mb-6">「{quote}」</p>

    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-2">我還在創作</h2>
      <p className="mb-1">
        我把自己的靈魂拆開，一部分變成圖、一部分變成音樂，剩下的就拿來變成飾品。
      </p>
      <p className="mb-4">
        我不知道怎麼好起來，但我知道怎麼繼續創作。
      </p>
      <ul className="list-disc list-inside space-y-1 text-blue-700 underline">
        <li>
          Instagram｜畫圖帳：<a href="https://www.instagram.com/mona.draw.something">@mona.draw.something</a>
        </li>
        <li>
          Instagram｜音樂帳：<a href="https://www.instagram.com/yu_hsin_lan_wing">@yu_hsin_lan_wing</a>
        </li>
        <li>
          Instagram｜飾品帳：<a href="https://www.instagram.com/crystal.mirrors.jewellery">@crystal.mirrors.jewellery</a>
        </li>
      </ul>
    </section>
  </div>

  <footer className="text-center text-xs text-gray-400 py-4 border-t border-gray-200">
    這裡是靈魂喘息站 ｜ Still here by winggyyu & Monday
  </footer>
</main>

); }

