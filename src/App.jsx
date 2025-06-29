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

  // fot download button
  const captureRef = useRef();

  //emojis
  const emojis = [
    "❤️‍🔥",
    "😂",
    "😎",
    "😎",
    "🤡",
    "😪",
    "🫏",
    "🥶",
    "🥸",
    "😴",
    "😶‍🌫️",
    "🤖",
    "👽",
    "👻",
    "💀",
    "👾",
    "🐵",
    "🙉",
    "🐶",
    "🦊",
    "🐱",
    "🐸",
    "🐧",
    "🐢",
    "🐲",
    "🦄",
    "🔥",
    "🌈",
    "⭐",
    "🌟",
    "🪐",
    "🌌",
    "🌠",
    "🚀",
    "🛰️",
    "👩‍🚀",
    "🛸",
    "🌙",
    "☄️",
    "🌕",
    "🍕",
    "🎮",
    "📱",
    "🎧",
    "🎲",
    "⚽",
    "🖌️",
    "🎹",
    "📷",
    "🎤",
  ];

  return (
    <div className="container">
      {/* Radial Gradient Background */}
      <div className="gradient-background" />
      <div className="content">
        <h1 className="heading">
          Emoji Editor by using <span>React</span>
        </h1>
      </div>
      <div className="main-emoji">
        <div
          ref={captureRef} //canvas capture
          style={{
            fontSize: `${range}px`,
            filter: `
  blur(${Math.max(0, (blur - 50) / 10)}px)  
  contrast(${contrast / 50})
  brightness(${brightness / 50})
  saturate(${saturate / 50})
  sepia(${Math.max(0, (sepia - 50) / 50)})
`,
            // math.max used to prevent the -ve values
            textShadow: `${dropShadow / 5}px ${dropShadow / 5}px ${
              dropShadow / 5
            }px rgba(0, 0, 0, 0.4)`,
            transform: `rotate(${rotation * 3.6}deg)`,
          }}
        >
          {emoji}
        </div>
      </div>
      {/* emoji size based on the selected range */}
      <div className="range">
        {/* 1] for changing the size of the emoji */}
        <Edit label="Size" value={range} onChange={setRange} />

        {/*2]  for adding shadow to the emoji */}
        <Edit label="Shadow" value={dropShadow} onChange={setdropShadow} />

        {/* 3] for Blur effect of the emoji*/}
        <Edit label="Blur" value={blur} onChange={setBlur} />

        {/* for roate the emoji */}
        <Edit label="Rotate" value={rotation} onChange={setRotation} />

        {/* fot adding the constrast */}
        <Edit label="Constrat" value={contrast} onChange={setContrast} />

        {/* for the brightness */}
        <Edit label="Brightness" value={brightness} onChange={setBrightness} />

        {/* for the saturation */}
        <Edit label="Saturation" value={saturate} onChange={setSaturate} />

        {/* for the sepia */}
        <Edit label="Sepia" value={sepia} onChange={setSepia} />

        {/* Reset all button */}
        <button className="reset-btn" onClick={()=>
          {
           if(confirm("Do you want ot Reset ?") == true)
           {
             setBlur(0);
            setRange(50);
            setBrightness(50);
            setRange(50);
            setContrast(50);
            setRotation(0);
            setSaturate(50);
            setSepia(50);
            setdropShadow(0);
           }
          }
        }>Reset</button>
      </div>

      {/* emoji container */}
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
