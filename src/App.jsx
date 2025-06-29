import "./App.css";
import { useRef, useState } from "react";
import Emoji from "./EmojiButton.jsx";
import Edit from "./Edit.jsx";
import DownloadButton from "./DownloadEmoji.jsx";

const App = () => {
  const [emoji, setEmoji] = useState("❤️‍🔥");
  const [range, setRange] = useState(50);
  const [blur, setBlur] = useState(0);
  const [dropShadow, setdropShadow] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [contrast, setContrast] = useState(50);
  const [brightness, setBrightness] = useState(50);
  const [saturate, setSaturate] = useState(50);
  const [sepia, setSepia] = useState(50);

  const captureRef = useRef();

  const emojis = [
    "❤️‍🔥", "😂", "😎", "🤡", "😪", "🫏", "🥶", "🥸", "😴", "😶‍🌫️", "🤖", "👽", "👻", "💀", "👾",
    "🐵", "🙉", "🐶", "🦊", "🐱", "🐸", "🐧", "🐢", "🐲", "🦄", "🔥", "🌈", "⭐", "🌟", "🪐",
    "🌌", "🌠", "🚀", "🛰️", "👩‍🚀", "🛸", "🌙", "☄️", "🌕", "🍕", "🎮", "📱", "🎧", "🎲",
    "⚽", "🖌️", "🎹", "📷", "🎤"
  ];

  return (
    <div className="container">
      <div className="gradient-background" />
      <div className="content">
        <h1 className="heading">
          Emoji Editor by using <span>React</span>
        </h1>
      </div>

      <div className="main-emoji">
        <div
          ref={captureRef}
          style={{
            fontSize: `${range *2}px`,
            fontFamily: "'Rubik Moonrocks', cursive",
            transform: `rotate(${rotation * 3.6}deg)`,
            filter: `
              blur(${Math.max(0, (blur - 50) / 10)}px)
              contrast(${contrast / 50})
              brightness(${brightness / 50})
              saturate(${saturate / 50})
              sepia(${Math.max(0, (sepia - 50) / 50)})
            `,
            textShadow: `${dropShadow / 5}px ${dropShadow / 5}px ${
              dropShadow / 5
            }px rgba(0, 0, 0, 0.4)`,
          
          }}
        >
          <span >{emoji}</span>
        </div>
      </div>

      <div className="range">
        <Edit label="Size" value={range} onChange={setRange} />
        <Edit label="Shadow" value={dropShadow} onChange={setdropShadow} />
        <Edit label="Blur" value={blur} onChange={setBlur} />
        <Edit label="Rotate" value={rotation} onChange={setRotation} />
        <Edit label="Contrast" value={contrast} onChange={setContrast} />
        <Edit label="Brightness" value={brightness} onChange={setBrightness} />
        <Edit label="Saturation" value={saturate} onChange={setSaturate} />
        <Edit label="Sepia" value={sepia} onChange={setSepia} />

        <button
          className="reset-btn"
          onClick={() => {
            if (confirm("Do you want to Reset?")) {
              setBlur(0);
              setRange(50);
              setBrightness(50);
              setContrast(50);
              setRotation(0);
              setSaturate(50);
              setSepia(50);
              setdropShadow(0);
            }
          }}
        >
          Reset
        </button>
      </div>

      <div className="emojis-container">
        {emojis.map((e, i) => (
          <Emoji key={i} emoji={e} setEmoji={setEmoji} />
        ))}
      </div>

      <DownloadButton targetRef={captureRef} />
    </div>
  );
};

export default App;
