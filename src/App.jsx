import "./App.css";
import {useRef, useState } from "react";
import Emoji from "./EmojiButton.jsx";
import Edit from "./Edit.jsx";
import DownloadButton from "./DownloadEmoji.jsx";
import Heading from "./Heading.jsx";
import Footer from "./Footer.jsx";
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


  const emojis = [
    // Aesthetic / Magical
    "🪄",
    "🔮",
    "🧿",
    "🪬",
    "🧚",
    "🧝",
    "🦄",

    // Weird / Nerdy / Fun
    "🦷",
    "🫀",
    "🧠",
    "🧬",
    "🪙",
    "🛸",
    "🧪",

    // Techie / Futuristic
    "🦾",
    "❤️‍🔥",
    "🪫",
    "🪩",
    "🛠️",
    "📡",

    // Expression / Vibe
    "🫠",
    "🥴",
    "🫥",
    "🫨",
    "🫣",
    "🥹",
    "🫡",

    // Nature & Rare
    "🪻",
    "🪷",
    "🪹",
    "🪺",
    "🦤",
    "🐉",
    "🦩",

    // Travel & Places
    "🛖",
    "🏕️",
    "🗿",
    "🛤️",
    "🏜️",
    "🏔️",
  ];
const captureRef = useRef(null);

  return (
    <div className="container">
      <div className="gradient-background" />
      <div className="content">
        <Heading />
      </div>

      <div className="main-emoji">
        <div
          ref={captureRef}
          style={{
            position: "relative",
            height: "auto",
            minWidth: "200px",
            minHeight: "200px",
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              zIndex: 1,
              fontSize: `${range * 2}px`,
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

              borderRadius: "20px",
            }}
          >
            {emoji}
          </span>
        </div>
      </div>
      <div className="download">
        {" "}
        <DownloadButton targetRef={captureRef} />
      </div>

      <div className="range">
        <Edit label="Size" value={range} onChange={setRange} />
        <Edit label="Shadow" value={dropShadow} onChange={setdropShadow} />
        <Edit label="Blur" value={blur} onChange={setBlur} />
        <Edit label="Rotate" value={rotation} onChange={setRotation} />

        <button
          className="reset-btn"
          onClick={() => {
            if (confirm("Do you want to Reset?")) {
              setEmoji("");
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

      <div className="add-more-content">
       <Edit label="Contrast" value={contrast} onChange={setContrast} />
        <Edit label="Brightness" value={brightness} onChange={setBrightness} />
        <Edit label="Saturation" value={saturate} onChange={setSaturate} />
        <Edit label="Sepia" value={sepia} onChange={setSepia} />
        <button
          className="reset-btn"
          onClick={() => {
            if (confirm("Do you want to Reset?")) {
  
            }
          }}
        >
          Reset
        </button>
      </div>
      <span>
        <h1>Unique Emojis</h1>
      </span>
      <div className="emojis-container">
        {emojis.map((e, i) => (
          <Emoji key={i} emoji={e} setEmoji={setEmoji} />
        ))}
      </div>
      {/* footer */}
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default App;
