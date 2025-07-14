import "./App.css";
import { useEffect, useRef, useState } from "react";
import Emoji from "./EmojiButton.jsx";
import Edit from "./Edit.jsx";
import DownloadButton from "./DownloadEmoji.jsx";
import Heading from "./Heading.jsx";
import Footer from "./Footer.jsx";
import { RefreshCw, HeartPlus } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [emoji, setEmoji] = useState("❤️‍🔥");
  const [inputEmoji, setInputEmoji] = useState("");
  const [range, setRange] = useState(50);
  const [blur, setBlur] = useState(0);
  const [dropShadow, setdropShadow] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [contrast, setContrast] = useState(50);
  const [brightness, setBrightness] = useState(50);
  const [saturate, setSaturate] = useState(50);
  const [sepia, setSepia] = useState(50);

  function checkchar(str) {
    const alphabet = [
      ..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ];
    const number = [..."0123456789"];
    const symbol = [..."`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?"];
    const space = [" "];

    for (let char of str) {
      if (
        alphabet.includes(char) ||
        number.includes(char) ||
        symbol.includes(char) ||
        space.includes(char)
      ) {
        return true;
      }
    }
    return false;
  }

  const handleinput = () => {
    const trimmed = inputEmoji.trim();
    const units = Array.from(trimmed);
    const length = units.length;

    if (length === 0) {
      toast.error("Please enter emoji.", { duration: 3000 });
      return;
    }
    if (length > 1) {
      toast.error("Only one emoji is allowed at a time.", { duration: 3000 });
      setInputEmoji("");
      return;
    }
    if (checkchar(trimmed)) {
      toast.error("Alphabets, symbols, numbers, or spaces are not allowed.");
      setInputEmoji("");
      return;
    }
    setEmoji(trimmed);
    toast.success(`${inputEmoji} Added Successfully !`);
    setInputEmoji("");
  };

  const emojis = [
    // Heart
    "❤️‍🔥",
    "❤️‍🩹",
    "🧑🏻‍❤️‍💋‍👩🏻",
    // Hands
    "✋🏻",
    "✊🏻",
    "✌🏻",
    "☝🏻",
    "👊🏻",
    "👋🏻",
    "👌🏻",
    "👍🏻",
    "👈🏻",
    "👉🏻",
    "👆🏻",
    "👇🏻",
    "🖐🏻",
    "🖖🏻",
    "🤌🏻",
    "🤞🏻",
    "🤙🏻",
    "🤟🏻",
    "🤝🏻",
    "🫰🏻",
    "🫵🏻",
    "🫶🏻",
    "🙏🏻",
    "👏🏻",

    // People
    "👦🏻",
    "👧🏻",
    "👨🏻",
    "👩🏻",
    "👴🏻",
    "👵🏻",
    "🧒🏻",
    "🧑🏻",
    "🧓🏻",

    // Professions
    "👨🏻‍🍳",
    "👨🏻‍🌾",
    "👨🏻‍🏫",
    "👨🏻‍⚖️",
    "👨🏻‍💻",
    "👨🏻‍🔧",
    "👩🏻‍🌾",
    "👩🏻‍💼",
    "👩🏻‍🏫",
    "👩🏻‍🎤",
    "👩🏻‍⚕️",
    "👩🏻‍🔬",
    "👩🏻‍🚀",
    "🧑🏻‍⚕️",
    "🧑🏻‍🍳",
    "🧑🏻‍🏭",
    "🧑🏻‍💼",
    "🧑🏻‍🎓",
    "🧑🏻‍🎨",
    "🧑🏻‍🚀",
    "🧑🏻‍🚒",
    "🧑🏻‍🔬",

    // Vehicles
    "🛻",
    "🚴🏻‍♂️",
    "🚵🏻‍♀️",

    // Animals
    "🐕‍🦺",
    "🐻‍❄️",
    "🦯",
    "🦼",
    "🦽",
    "0️⃣",
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣",
    "5️⃣",
    "6️⃣",
    "7️⃣",
    "8️⃣",
    "9️⃣",
    "#️⃣",
    "*️⃣",
    "™️",
    "©️",
    "®️",
    "🅰️",
    "🅱️",
    "🕉️",
    "☸️",
    "☯️",
    "✝️",
    "☪️",
    "🕎",
    "🔯",
    "🛐",
    "🔣",
    "🈯️",
    "🈳",
    "🆖",
    "🆗",
    "🆘",
    "🆙",
    "🆒",
    "🆓",
    "🈚",
    "🈶",
    "⚠️",
    "❗",
    "‼️",
    "⁉️",
    "❓",
    "❔",
    "❕",
    "🔔",
    "🔕",
    "🚫",
    "⛔",
    "🛑",
    "📛",
    "🚷",
    "🚯",
    "🚳",
    "🚱",
    "🚭",
    "🔞",
    "📵",
    "🕐",
    "🕜",
    "🕑",
    "🕝",
    "🕒",
    "🕞",
    "🕓",
    "🕟",
    "🕔",
    "🕠",
    "🕕",
    "🕡",
    "🕖",
    "🕢",
    "🕗",
    "🕣",
    "🕘",
    "🕤",
    "🕙",
    "🕥",
    "🕚",
    "🕦",
    "🕛",
    "🕧",
    "♻️",
    "🏳️‍🌈",
    "🏳️‍⚧️",
    "🏴‍☠️",
    "🏴",
    "🏳️",
    "🇮🇳",
    "🇺🇸",
    "🇬🇧",
    "🇨🇦",
    "🇦🇺",
    "🇯🇵",
    "🇫🇷",
    "🇩🇪",
    "🇧🇷",
    "🇮🇹",
    "🇷🇺",
    "🇰🇷",
    "🇨🇳",
    "🇲🇽",
    "🇪🇸",
    "🇸🇬",
    "🇸🇦",
    "🇿🇦",
    "🇳🇿",
    "🇳🇴",
  ];
  const captureRef = useRef(null);

  return (
    <div className="container">
      <div className="gradient-background" />
      <div className="logo">
        <h1>Mojify</h1>
      </div>
      <div className="content">
        <Heading />
      </div>

      <div className="main-emoji">
        <div
          ref={captureRef}
          style={{
            position: "relative",
            height: `auto`,
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
              const toastId = toast.loading("Resetting...");
              setBlur(0);
              setRange(50);
              setBrightness(50);
              setContrast(50);
              setRotation(0);
              setSaturate(50);
              setSepia(50);
              setdropShadow(0);

              setTimeout(() => {
                toast.dismiss(toastId);
                toast.success("Reset Successful!");
              }, 1000);
            }
          }}
        >
          Reset <RefreshCw />
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
              const toastId = toast.loading("Resetting...");
              setBlur(0);
              setRange(50);
              setBrightness(50);
              setContrast(50);
              setRotation(0);
              setSaturate(50);
              setSepia(50);
              setdropShadow(0);

              setTimeout(() => {
                toast.dismiss(toastId);
                toast.success("Reset Successful!");
              }, 1000);
            }
          }}
        >
          Reset <RefreshCw />
        </button>
      </div>

      <div className="add-emoji">
        <input
          type="text"
          name="emoji"
          placeholder="Add Emoji"
          value={inputEmoji}
          onChange={(e) => setInputEmoji(e.target.value)}
        />

        <button className="reset-btn" onClick={handleinput}>
          Add <HeartPlus />
        </button>
      </div>
      <span>
        <h2 className="emoji-heading">Unique Emojis</h2>
      </span>

      <div className="emojis-container">
        {emojis.map((e, i) => (
          <Emoji key={i} emoji={e} setEmoji={setEmoji} />
        ))}
      </div>
      <div className="main-footer">
        <Footer />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
