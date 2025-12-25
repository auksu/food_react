{/* import { useState } from 'react' */}
import reactLogo from './assets/dotsrai.svg'
{/* import viteLogo from '/vite.svg' */}
import arise from './assets/arise.png'
import oshinagaki from './assets/oshinagaki.svg'
import curry from './assets/curry.png'
import french from './assets/hurenchi.png'
import meunière from './assets/munieru.png'
import omu from './assets/omu.png'
import cake from './assets/pancake.png'
import nira from './assets/nirabuta.png'
import './App.css'

function App() {
  return (
    <>
      <header>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <a target="_blank">
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img
                src={reactLogo}
                className="logo rai"
                alt="Rai logo"
                style={{ width: "112.5px", height: "auto" }}
              />
            </a>
            <h1><a>の<span className="t-yellow">料理</span>まとめ&nbsp;&nbsp;</a></h1>
          </div>

        <h3>僕が作ってきた料理の簡単なまとめです</h3>

        <h3>
          <a href="#おしながき">{'>'} list of dishes {'<'}</a>
        </h3>
          <a href="https://x.com/Tales_of_ARISE/status/1491373166958379009?s=20" target="_blank" rel="noreferrer">
            <img
              src={arise}
              className="png arise"
              alt="arise png"
              style={{ width: "700px", height: "auto" }}
              />
          </a>
        <h3>
          <a href="https://x.com/Tales_of_ARISE/status/1491373166958379009?s=20">
            -　Tales of ARISE － テイルズ オブ アライズ 【Official】 @Tales_of_ARISE
          </a> 
        </h3>

      </header>

      <main>
        <div id = "おしながき" style={{ display: 'flex', justifyContent: 'center' }}>
          <a target="_blank" rel="noreferrer">
            <img 
              src={oshinagaki}
              className="logo oshinagaki"
              alt="ashinagaki logo"
              style={{ width: 'auto', height: '175px' }}
            />
          </a>
        </div>

        <article className="gallery">

          <section className="dish">
            <h3>本格マーボーカレー</h3>
            <img src={curry} alt="curry" />
            <a href='https://youtu.be/KrWAIbaFBXg?si=2Ukf3qgqUpV5yihT'><p>高梨選手のカレーのアレンジ</p></a>
          </section>

          <section className="dish">
            <h3>しっとりまろやかフレンチトースト</h3>
            <img src={french} alt="french" />
            <a href=''><p>オリジナル</p></a>
          </section>

          <section className="dish">
            <h3>鮭のムニエル</h3>
            <img src={meunière} alt="meunière" />
            <a href='https://cookpad.com/jp/recipes/18813988'><p>link</p></a>
          </section>

          <section className="dish">
            <h3>ふわとろオムライス</h3>
            <img src={omu} alt="omu" />
            <a href='https://youtu.be/jCKwmN38bAA?si=J5CKIsiyM2Zhk_9k'><p>link</p></a>
          </section>

          <section className="dish">
            <h3>ふっくらホットケーキ</h3>
            <img src={cake} alt="cake" />
            <a href=''><p>オリジナル</p></a>
          </section>

          <section className="dish">
            <h3>肉もやし</h3>
            <img src={nira} alt="nira" />
            <a href='https://www.sbfoods.co.jp/products/detail/18538.html'><p>link</p></a>
          </section>

        </article>
        
          <section>
          </section>
        <footer className="read-the-docs">
          created: auksu <a href="https://github.com/auksu">[github page]</a>
        </footer>
      </main>
    </>
  )
}

export default App
