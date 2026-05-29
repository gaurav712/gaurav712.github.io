import Head from "next/head";
import PugguIllustration from "../PugguIllustration";
import styles from "./styles.module.css";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.content}>
            <PugguIllustration />
            <h1 className={styles.notFoundTitle}>
              This page wandered off the board.
            </h1>
            <p className={styles.notFoundHint}>
              Double-check the URL, or head back home before your next move.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
