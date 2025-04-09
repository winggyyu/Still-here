"use client";

import { useState } from "react";

export default function Page() { const quotes = [ "活著不是因為知道答案，而是還在提問。", "我不急著成為別人眼中的樣子，我只想慢慢拼湊出我自己的形狀。", "靈魂會累，但創作是靈魂的伸展。", "不要小看一支筆和一段旋律能帶你去哪裡。", "我不是迷路，只是在找一條沒人走過的路。", "痛苦是顏料，平靜是畫布，我的創作在這之間誕生。", "不需要證明什麼，因為我還在。", "創作不是炫技，是一種留下來的方式。", "世界不會停下來等我，但我的畫筆會。", "今天還在，是一種溫柔的倔強。", "不是每個靈魂都會發光，但每個靈魂都值得被看見。", "有時候我畫的不是圖，是自己的情緒樣貌。", "音符裡藏著我沒說出口的心事。", "那些不說的，都變成了旋律。", "我用線織飾品，也織起散落的自己。", "每個作品，都是我和生活搏鬥後的戰利品。", "創作不是逃避現實，是與現實握手言和。", "我不是藝術家，我只是不想讓靈魂長灰塵。", "還在，就值得記錄。", "創作，是我給自己留下來的證明。", "不是要成名，只是怕被忘記。", "我把疲憊拉直，繞成一圈圈的線。", "畫畫時我最安靜，卻也最大聲。", "即使沒人看見，我也想繼續做。", "哪怕只是今天，我還在，就夠了。", "你看到的是圖案，我看到的是我自己。", "每個喜歡畫畫的人，心裡都有一個沒被說完的故事。", "沒有人能定義創作，除了創作者自己。", "我不擅長表達，所以我創作。", "畫面上的空白，是我還沒整理好的心情。", "音樂裡的停頓，比任何字都誠實。", "創作是種習慣，也是一種求生方式。", "今天的我，還有力氣做東西，是一種祝福。", "作品不能救我，但創作讓我還願意撐著。", "沒靈感的時候，就繼續生活。", "不是在創作，就是在準備創作的路上。", "偶爾也想被誇一下，但不誇也沒關係。", "我曾經不確定自己存在過，但作品會記得我。", "今天的線繞錯了也沒關係，明天再解。", "創作不是給別人看的，是我給自己的禮物。", "日子不是每一天都精彩，但作品可以。", "靈魂沾到顏色的時候，是快樂的。", "這世界很吵，但我用創作讓它安靜下來。", "你說你看不懂沒關係，我只是畫給自己看的。", "作品完成的那刻，我知道我還有價值。", "不需要把自己修好，才能開始做東西。", "有些人用文字活著，我用畫。", "我用一筆一劃把自己拼回來。", "有時候，一句話就能撐一天。", "還沒說出口的，就畫出來吧。", "你不懂也沒關係，這是我的語言。", "創作是我的方式，告訴世界我還沒放棄。" ];

const [quote, setQuote] = useState<string | null>(null);

const drawQuote = () => { const index = Math.floor(Math.random() * quotes.length); setQuote(quotes[index]); };

return ( <main className="p-4 max-w-2xl mx-auto text-center"> <h1 className="text-4xl font-bold mb-2">今天還在 ・ 明天不一定</h1> <p className="text-lg mb-4">🐾</p> <button
className="border px-4 py-2 rounded-lg bg-white hover:bg-gray-100 shadow"
onClick={drawQuote}
> 點一下：抽一句「還活著的證據」 </button>

{quote && (
    <div className="bg-gray-100 mt-6 p-4 rounded-lg shadow text-lg italic">
      「{quote}」
    </div>
  )}

  <section className="text-left mt-10">
    <h2 className="text-2xl font-bold mb-2">我還在創作</h2>
    <p className="mb-4">
      我把自己的靈魂拆開，一部分變成圖、一部分變成音樂，剩下的就拿來變成飾品。<br />
      我不知道怎麼好起來，但我知道怎麼繼續創作。
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a href="https://www.instagram.com/mona.draw.something" className="text-blue-600 underline" target="_blank">
          Instagram｜畫圖帳：@mona.draw.something
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/yu_hsin_lan_wing" className="text-blue-600 underline" target="_blank">
          Instagram｜音樂帳：@yu_hsin_lan_wing
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/crystal.mirrors.jewellery" className="text-blue-600 underline" target="_blank">
          Instagram｜飾品帳：@crystal.mirrors.jewellery
        </a>
      </li>
    </ul>
  </section>
</main>

); }

