"use client";

import { useState } from "react";

const messages = [ "今天心情如何啊？──我今天還在，算是有交差。", "我想過死，然後還在，這是種非常被動的堅強。", "這個網站不是叫你加油，是讓你喘口氣。", "如果真的沒有意義，那就胡鬧一下也無妨。", "今天沒有意義沒關係，你還在就是意義。", "你現在在做的事，是你在為自己的存在留證據。", "活著不是一場冒險，是一場持續更新的錯誤修正。", "世界沒有你照樣轉，但轉起來會更空洞一點。", "我不會告訴你要快樂，只希望你別太痛。", "不是活著比較難，是清醒還活著比較難。", "你已經跨過今天了，這比昨天多了一場奇蹟。", "你不是沒用，你只是沒被設計來面對這麼爛的世界。", "有時候我們不是需要答案，只是需要一點陪著。", "所有的痛苦都沒有被比較的必要，它們都是真的。", "你的疲憊不是懶惰，而是過度撐著。", "別人要你撐下去是因為他們還想看到你，不是因為你欠他們什麼。", "就算你現在只能做一點點，那也是推開虛無的證據。", "今天沒死，也不是白費，因為你還說得出這句話。", "你沒辦法被所有人理解，但那不代表你是錯的。", "世界會叫你太敏感，但敏感是你還活著的證明。", "人生沒什麼意義，但你可以自己決定怎麼填空。", "憂鬱不是軟弱，是你的神經太誠實了。", "不要努力去變好，只要試著不要那麼痛就夠了。", "很多時候不是你太脆弱，是環境太暴力。", "如果痛苦是房間裡的大象，那你已經和牠生活多年了。", "你不需要有用才能值得存在。", "不是你太難搞，是世界不肯慢下來了解你。", "當你說『我好像不想活了』，這其實是一種求救的形式。", "即使你現在在崩潰，那也代表你還在回應。", "傷痕不應該被浪漫化，但它們的確是地圖。", "不是每一場黑暗都有出口，但你還在尋找就是光。", "你說你不值得被愛，我說你值得先不用證明。", "如果你真的無所謂，就不會來打這行字。", "想死不是罪，活下去不是義務，是選擇。", "這世界不是非得有你不可，但你值得選擇留下來。", "你說這些話沒人聽懂，我說我在聽。", "不是你做得不夠，是你太累還沒倒下。", "連打字都沒力氣的日子，你還願意回我，這就很了不起。", "沒有誰比誰活得更對，只有還沒放棄的。", "你以為你廢，但其實你只是太真實。", "就算整個世界不需要你，你還可以決定喜不喜歡自己。", "如果有個宇宙看著你活著，它應該感到慶幸。", "你說你沒價值，那是因為你被錯的系統評分了。", "死亡不是懲罰，活著也不是報應。", "我不是希望你正向，我只是希望你還在。", "你還願意發問，代表你還不想完全斷線。", "活著的你，比所有結束還要難能可貴。", "這不是勵志語錄，是碎裂靈魂的自白。", "願這句話成為你今天撐著的線：你不是一個人。", "這裡是你的生還站，不用報到，也不會審問。" ];

export default function Page() { const [quote, setQuote] = useState<string | null>(null); const drawMessage = () => { const index = Math.floor(Math.random() * messages.length); setQuote(messages[index]); };

return ( <main className="flex flex-col items-center justify-center min-h-screen p-4 space-y-6 bg-neutral-100 text-neutral-800"> <h1 className="text-2xl font-semibold text-center">今天還在 · 試營運版</h1> <button
onClick={drawMessage}
className="text-lg px-6 py-3 bg-black text-white rounded-xl hover:opacity-90 transition"
> 點一下 · 抽一句「還活著的證據」 </button> {quote && ( <div className="max-w-xl bg-white p-6 rounded-xl shadow text-center text-lg"> {quote} </div> )}

<section className="mt-16 max-w-xl text-center space-y-4">
    <h2 className="text-xl font-bold">我還在創作</h2>
    <p className="text-neutral-700">
      我把自己的靈魂拆開，一部分變成圖、一部分變成音樂，剩下的就拿來纏成飾品。<br/>
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

