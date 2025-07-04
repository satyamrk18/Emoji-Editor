import "./App.css";
import { useRef, useState } from "react";
import Emoji from "./EmojiButton.jsx";
import Edit from "./Edit.jsx";
import DownloadButton from "./DownloadEmoji.jsx";
import Heading from "./Heading.jsx";
import AddMoreEdit from "./AddMoreEdit.jsx";
import Footer from "./Footer.jsx";
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
  //add more eits state
  const [fontSize, setFontSize] = useState(25);
  const [bold, setBold] = useState(40);
  const [rotateFont, setRotateFont] = useState(0);
  const [color, setColor] = useState("6365f1de");
  const captureRef = useRef();

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

          {overlayEmoji.map((emo, i) => (
            <span
              key={i}
              style={{
                zIndex: 2,
                fontSize: `${fontSize / 2}px`,
                marginTop: "10px",
                display: "block",
                width: "100%",
                textAlign: "center",
                fontFamily: "'Rubik Moonrocks', cursive",
                transform: `rotate(${rotateFont * 1.8}deg)`,
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
                fontWeight: `${bold * 10}`,
                color: `${color}`,
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
        <input
          type="text"
          name="add-more"
          id="addMoreEmoji"
          placeholder="Enter Emoji or text"
          value={newEmoji}
          onChange={(e) => {
            setNewEmoji(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (newEmoji.trim()) {
              setOverlayEmoji([...overlayEmoji, newEmoji]);
              setNewEmoji("");
              setBold(40);
              setRotateFont(0);
            }
          }}
        >
          Add
        </button>
        <AddMoreEdit
          label="Font Size"
          value={fontSize}
          onChange={setFontSize}
        />
        <AddMoreEdit label="Boldness" value={bold} onChange={setBold} />
        <AddMoreEdit
          label="Rotate"
          value={rotateFont}
          onChange={setRotateFont}
        />


        <button
          className="reset-btn"
          onClick={() => {
            if (confirm("Do you want to Reset?")) {
              setFontSize(25);
              setNewEmoji("");
              setOverlayEmoji([]);
            }
          }}
        >
          Reset
        </button>
      </div>

      {/* font color */}
      <div className="font-color">
     
          <label><spna><h3>Font Color</h3></spna></label>
          <input
            type="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
      
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
