import { ReactNode } from "react";
import styles from "./styles.module.css";

type TooltipProps = {
  text: string;
  children: ReactNode;
  className?: string;
  inline?: boolean;
};

const Tooltip = ({
  text,
  children,
  className,
  inline = true,
}: TooltipProps) => {
  const rootClassName = [
    styles.root,
    inline && styles.inline,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={rootClassName}>
      {children}
      <span className={styles.bubble} role="tooltip">
        {text}
      </span>
    </span>
  );
};

export default Tooltip;
