import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const AUTOPLAY_INTERVAL_MS = 3000;

type ScreenshotPickerProps = {
  screenshots: string[];
  alt?: string;
};

const ScreenshotPicker = ({ screenshots, alt = "Screenshot" }: ScreenshotPickerProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (screenshots.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setSelectedIndex((current) => (current + 1) % screenshots.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [screenshots.length]);

  if (screenshots.length === 0) {
    return null;
  }

  const selected = screenshots[selectedIndex];

  return (
    <div className={styles.root}>
      <img
        src={selected}
        className={styles.mainImage}
        alt={`${alt} ${selectedIndex + 1} of ${screenshots.length}`}
      />
      {screenshots.length > 1 && (
        <div className={styles.thumbnails} role="tablist" aria-label="Screenshots">
          {screenshots.map((src, index) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`Screenshot ${index + 1}`}
              className={styles.thumbnail}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={src}
                alt=""
                className={`${styles.thumbnailImage} ${
                  index === selectedIndex ? styles.thumbnailImageSelected : ""
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScreenshotPicker;
