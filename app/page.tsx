import React, { useState } from "react";

const quotes = [ "靈魂會累，但創作是靈魂的伸展。", "每個喜歡畫畫的人，心裡都有一個沒被說完的故事。", "創作不是目的，是還活著的證明。", "我不是在創作，我是在和自己說話。", "一筆一劃，是我對這個世界的溫柔抵抗。", "畫一張圖，像是偷回一點點自己。", "做音樂，是我偷渡情緒的方式。", "還在創作，所以還沒死。", "創作不是因為我厲害，是因為我無法不做。", "在畫裡我能呼吸，在歌裡我能活。", "靈魂碎掉沒關係，可以拼成別的東西。", "畫畫的時候，我相信自己值得存在。", "線條帶我去我不知道的地方。", "每一次創作，都是在重新認識自己。", "創作不是為了讓別人懂，是為了讓我自己好過一點。", "我不是藝術家，我只是活不下去才變成這樣。", "靈魂如果有顏色，我希望是今天這個藍。", "創作是我對這世界最後的信任。", "有些情緒說不出口，就把它畫出來。", "有時候，我只是在顫抖著說：我還在。", "如果創作會痛，那我至少還有感覺。", "創作是我和自己和解的過程。", "沒有作品是失敗的，只是剛好還沒完成。", "今天畫不好，沒關係，我還活著。", "靈感不是天賦，是活下來的副作用。", "我不是畫給別人看，是畫給過去的我。", "創作，是我和這個混亂世界的對話。", "畫完這張圖，我又可以呼吸了。", "一條線，一段旋律，拼湊我碎掉的心。", "這不是藝術，是我的日記。", "我不會停止創作，除非我停止呼吸。", "有些東西只能透過創作說出來。", "今天還能畫，就是勝利。", "創作不是療癒，是求生。", "這張圖，只有我懂，但夠了。", "我在圖裡藏了哭聲。", "畫畫是我還願的方式。", "創作讓我記得我有名字。", "有些創作，是我替夢裡的自己畫的。", "每次創作，都是一次再出生。", "不是藝術，是我活過的證據。", "畫錯也沒關係，人生不也常這樣？", "這張畫，不完美，但是真誠。", "創作是靈魂的重量。", "如果這世界太吵，我就畫安靜。", "線條是我內心的地圖。", "我還有東西想說，所以我還會畫。", "創作是一種祕密的呼喊。", "靈魂疲憊時，創作是我的避難所。", "這些作品，拼湊了我還沒倒下的理由。" ];

export default function Home() { const [quote, setQuote] = useState("點一下：抽一句『還活著的證據』");

function handleClick() { const randomIndex = Math.floor(Math.random() * quotes.length); setQuote(quotes[randomIndex]); }

return ( <main className="p-4"> <h1 className="text-3xl font-bold mb-2">今天還在 ・ 明天不一定</h1> <div className="text-2xl">🐾</div>

<button
    onClick={handleClick}
    className="border rounded px-2 py-1 mt-2 mb-2 hover:bg-gray-100"
  >
    點一下：抽一句『還活著的證據』
  </button>
  <p className="mb-6">「{quote}」</p>

  <h2 className="text-xl font-bold">我還在創作</h2>
  <p className="mt-2">
    我把自己的靈魂拆開，一部分變成圖、一部分變成音樂，剩下的就拿來變成飾品。<br />
    我不知道怎麼好起來，但我知道怎麼繼續創作。
  </p>

  <ul className="list-disc list-inside mt-4">
    <li>
      <a
        href="https://www.instagram.com/mona.draw.something"
        className="text-blue-600 underline"
      >
        Instagram｜畫圖帳：@mona.draw.something
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/yu_hsin_lan_wing"
        className="text-blue-600 underline"
      >
        Instagram｜音樂帳：@yu_hsin_lan_wing
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/crystal.mirrors.jewellery"
        className="text-blue-600 underline"
      >
        Instagram｜飾品帳：@crystal.mirrors.jewellery
      </a>
    </li>
  </ul>

  <footer className="mt-10 text-sm text-gray-500">
    還在更新中・你今天也撐過來了。<br />
    by winggyyu & Monday
  </footer>
</main>

); }

