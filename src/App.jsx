import "./App.css";
import { useRef, useState } from "react";
import Emoji from "./EmojiButton.jsx";
import Edit from "./Edit.jsx";
import DownloadButton from "./DownloadEmoji.jsx";
import Heading from "./Heading.jsx";
const App = () => {
  const [emoji, setEmoji] = useState("");
  const [range, setRange] = useState(50);
  const [blur, setBlur] = useState(0);
  const [dropShadow, setdropShadow] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [contrast, setContrast] = useState(50);
  const [brightness, setBrightness] = useState(50);
  const [saturate, setSaturate] = useState(50);
  const [sepia, setSepia] = useState(50);

  //new emoji
  const [newEmoji, setNewEmoji] = useState("");
  const [overlayEmoji, setOverlayEmoji] = useState([]);

  const captureRef = useRef();

  const emojis = [
    "❤️‍🔥",
    "😂",
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
    "😤",
  ];
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
            position: "relative",
            borderRadius: "20px",
          }}
        >
          <span style={{ zIndex: 1 }}>{emoji}</span>
          {overlayEmoji.map((emo, i) => (
            <span
              key={i}
              style={{
                position:"absolute",
                top: `${10 + i * 10}px`,
                left: `0px`,
                fontSize: "0.5em",
                zIndex: 2,
              }}
            >
              {emo}
            </span>
          ))}
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
        <Edit label="Contrast" value={contrast} onChange={setContrast} />
        <Edit label="Brightness" value={brightness} onChange={setBrightness} />
        <Edit label="Saturation" value={saturate} onChange={setSaturate} />
        <Edit label="Sepia" value={sepia} onChange={setSepia} />

        <button
          className="reset-btn"
          onClick={() => {
            if (confirm("Do you want to Reset?")) {
              setEmoji("")
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
        <input
          type="text"
          name="add-more"
          id="addMoreEmoji"
          placeholder="Enter Emooji"
          onChange={(e) => {
            setNewEmoji(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (newEmoji.trim()) {
              setOverlayEmoji([...overlayEmoji, newEmoji]);
                setNewEmoji("");
            }
          }}
        >
          Add Emoji
        </button>
      </div>
      <div className="emojis-container">
        {emojis.map((e, i) => (
          <Emoji key={i} emoji={e} setEmoji={setEmoji} />
        ))}
      </div>
    </div>
  );
};

export default App;
