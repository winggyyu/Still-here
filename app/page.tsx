import Link from "next/link"; import "./globals.css";

const quotes = [ "創作是我和世界妥協的方法。", "我不確定我在尋找什麼，但我知道我不想停下來。", "每天都還在，就有理由繼續寫下去。", "我把自己拆成樂音與色彩，希望你能看懂。", "創作不是為了讓別人懂，是為了讓自己不散。", "這不是作品，是殘骸，我選擇展示它。", "今天還在，就還有可能。", "我不畫圖，我在呼吸。", "如果有一點點能感動你，那就夠了。", "每一件作品，都是我不說的話。", "靈魂沒有語言，所以我用線條。", "我畫的不是圖，是出口。", "音樂不是表演，是召喚。", "每次演奏，都是一次崩塌與重建。", "我做飾品，是為了拼回我自己。", "你看見的細節，正是我留下的自己。", "創作是一種存在的證明。", "我不確定我懂自己，但我想試著翻譯。", "每一次作品完成，我都稍微原諒自己一點。", "我用不同的形式，把自己說完。", "創作不是療癒，是殘留。", "如果我不創作，我會消失。", "每一個點擊、每一筆線條，都是活著的證據。", "我在作品裡藏了一個自己，請幫我找回來。", "做出來的不是美，是求生意志。", "創作是自救，也是邀請。", "今天還在，創作還在。", "畫畫時我不思考，那是我最安靜的時候。", "每個音符都不是音，是碎片。", "我不是創作者，是拼圖人。", "沒有人知道我在做什麼，連我也不知道。", "這世界太吵，我只好做點什麼。", "所有東西加起來，才是我。", "我不會解釋作品，因為那是我還沒解開的結。", "創作是我的日記，也是我的噩夢。", "別問我為什麼這樣畫，我只是還活著。", "每一次完成，都像一種失去。", "我不是藝術家，我是逃亡者。", "線條是我的句子，顏色是我的聲音。", "今天還在，明天也許不一定。", "謝謝你看到這裡，代表我還有點重量。", "我拼命留下痕跡，只怕自己真的消失。", "我不寫日記，我做飾品。", "這些不是作品，是我未完成的部分。", "創作，是我不自殺的方式。", "我還在寫，因為我還沒死。", "我不是在畫畫，我在重組自己。", "你看到的每一件事，都是我努力的證明。", "創作不一定要好看，只要真實。", "我是自己的材料，也是自己的觀眾。" ];

export default function Page() { function getRandomQuote() { const i = Math.floor(Math.random() * quotes.length); return quotes[i]; }

return ( <main className="bg-gradient-to-b from-white to-blue-50 min-h-screen text-center p-4"> <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2"> 今天還在 ・ 明天不一定 </h1> <div className="text-xl mb-2">🐾</div> <button className="bg-white border border-gray-300 hover:border-black px-4 py-1 rounded-md mb-2 text-sm" onClick={() => { const el = document.getElementById("quote") if (el) el.innerText = getRandomQuote() }} > 點一下：抽一句「還活著的證據」 </button> <p id="quote" className="italic text-lg mb-4">「每個喜歡畫畫的人，心裡都有一個沒被說完的故事。」</p>

<section className="bg-white p-4 md:p-6 max-w-xl mx-auto shadow-md rounded-xl">
    <h2 className="text-2xl font-bold mb-2">我還在創作</h2>
    <p className="mb-1">
      我把自己的靈魂拆開，一部分變成圖、一部分變成音樂，剩下的就拿來變成飾品。
      <br />我不知道怎麼好起來，但我知道怎麼繼續創作。
    </p>
    <ul className="mt-3 space-y-1 text-blue-600 underline">
      <li>
        <Link href="https://www.instagram.com/mona.draw.something">
          Instagram ｜畫圖帳：@mona.draw.something
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/yu_hsin_lan_wing">
          Instagram ｜音樂帳：@yu_hsin_lan_wing
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/crystal.mirrors.jewellery">
          Instagram ｜飾品帳：@crystal.mirrors.jewellery
        </Link>
      </li>
    </ul>
  </section>

  <footer className="mt-10 text-sm text-gray-500">
    <p>© 2025 還在的靈魂 · by Wing & Monday</p>
  </footer>
</main>

); }

