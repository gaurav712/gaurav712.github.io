import { promises as fs } from "fs";
import path from "path";
import Head from "next/head";
import { marked } from "marked";
import type { GetStaticProps } from "next";
import ScreenshotPicker from "../../components/ScreenshotPicker";
import { getScreenshotsForRoute } from "../../lib/screenshots";
import styles from "./styles.module.css";

const ROUTE = "dumb-soccer";
const SCREENSHOTS_MARKER = "<!-- screenshots -->";

type DumbSoccerPageProps = {
  htmlBefore: string;
  htmlAfter: string;
  screenshots: string[];
};

export const getStaticProps: GetStaticProps<DumbSoccerPageProps> = async () => {
  const filePath = path.join(
    process.cwd(),
    "data/project_pages/dumb-soccer.md",
  );
  const markdown = await fs.readFile(filePath, "utf-8");
  const [beforeScreenshots = "", afterScreenshots = ""] =
    markdown.split(SCREENSHOTS_MARKER);

  return {
    props: {
      htmlBefore: marked.parse(beforeScreenshots) as string,
      htmlAfter: marked.parse(afterScreenshots) as string,
      screenshots: await getScreenshotsForRoute(ROUTE),
    },
  };
};

export default function DumbSoccerPage({
  htmlBefore,
  htmlAfter,
  screenshots,
}: DumbSoccerPageProps) {
  const titleMatch = htmlBefore.match(/<h1[^>]*>(.*?)<\/h1>/);
  const title = titleMatch?.[1] ?? "Dumb Soccer";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <article className={styles.article}>
            <div dangerouslySetInnerHTML={{ __html: htmlBefore }} />
            <ScreenshotPicker screenshots={screenshots} alt={title} />
            <div dangerouslySetInnerHTML={{ __html: htmlAfter }} />
          </article>
        </main>
      </div>
    </>
  );
}
