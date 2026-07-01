import { promises as fs } from "fs";
import path from "path";
import Head from "next/head";
import { marked } from "marked";
import type { GetStaticProps } from "next";
import styles from "./styles.module.css";

type DumbSoccerPageProps = {
  markdown: string;
};

export const getStaticProps: GetStaticProps<DumbSoccerPageProps> = async () => {
  const filePath = path.join(
    process.cwd(),
    "data/project_pages/dumb-soccer.md",
  );
  const markdown = await fs.readFile(filePath, "utf-8");

  return { props: { markdown } };
};

export default function DumbSoccerPage({ markdown }: DumbSoccerPageProps) {
  const html = marked.parse(markdown);
  const titleMatch = markdown.match(/^#\s+(.+)$/m);
  const title = titleMatch?.[1] ?? "Dumb Soccer";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <article
            className={styles.article}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </main>
      </div>
    </>
  );
}
