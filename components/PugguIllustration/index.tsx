import type { CSSProperties, SyntheticEvent } from "react";
import pugguAsset from "../../assets/puggu.svg";
import styles from "./styles.module.css";

const blockInteraction = (event: SyntheticEvent) => {
  event.preventDefault();
};

const pugguSrc =
  typeof pugguAsset === "string" ? pugguAsset : pugguAsset.src;

const illustrationStyle = {
  backgroundImage: `url("${pugguSrc}")`,
} satisfies CSSProperties;

export default function PugguIllustration() {
  return (
    <div
      className={styles.illustration}
      style={illustrationStyle}
      role="img"
      aria-label="Illustration"
      onContextMenu={blockInteraction}
      onDragStart={blockInteraction}
      onCopy={blockInteraction}
      onCut={blockInteraction}
      onMouseDown={blockInteraction}
    >
      <div
        className={styles.shield}
        aria-hidden
        onContextMenu={blockInteraction}
        onDragStart={blockInteraction}
      />
    </div>
  );
}
