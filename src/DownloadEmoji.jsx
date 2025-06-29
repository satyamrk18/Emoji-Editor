import domtoimage from "dom-to-image-more";
import "./DownloadEmoji.css"


const DownloadButton = ({ targetRef }) => {
  const downloadImage = async () => {
    // Wait a short delay to ensure fonts and styles are rendered
    await new Promise((res) => setTimeout(res, 100));

    domtoimage.toPng(targetRef.current, {
      cacheBust: true, // clear previous rendering cache
      style: {
        // Ensure filter styles are applied even if not inline
        filter: getComputedStyle(targetRef.current).filter
      }
    })
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "emoji.png";
      link.href = dataUrl;
      link.click();
    })
    .catch((err) => console.error("Image generation failed", err));
  };

  return <button className="download-btn" onClick={downloadImage}>Download</button>;
};

export default DownloadButton;
