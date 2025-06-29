// DownloadButton.jsx
import React from "react";
import html2canvas from "html2canvas";
import "./DownloadEmoji.css"

const DownloadButton = ({ targetRef, filename = "emoji-art.png" }) => {
  const handleDownload = () => {
    if (!targetRef?.current) return;
    html2canvas(targetRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = filename;
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
     <div onClick={handleDownload}  className="download-btn">Download</div>
  );
};

export default DownloadButton;
