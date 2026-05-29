import { promises as fs } from "fs";
import path from "path";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { marked } from "marked";
import type { GetStaticProps } from "next";
import NotFound from "../../components/NotFound";
import { privacyPolicyFiles } from "../../data/privacy_policies";
import styles from "./styles.module.css";

type PrivacyPolicyPageProps = {
  policies: Record<string, string>;
};

export const getStaticProps: GetStaticProps<PrivacyPolicyPageProps> =
  async () => {
    const baseDir = path.join(process.cwd(), "data/privacy_policies");
    const policies: Record<string, string> = {};

    for (const [project, filename] of Object.entries(privacyPolicyFiles)) {
      const filePath = path.join(baseDir, filename);
      policies[project] = await fs.readFile(filePath, "utf-8");
    }

    return { props: { policies } };
  };

export default function PrivacyPolicyPage({
  policies,
}: PrivacyPolicyPageProps) {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <div className={styles.shell} aria-hidden />;
  }

  const project =
    typeof router.query.project === "string"
      ? router.query.project
      : undefined;

  const markdown = project ? policies[project] : undefined;

  if (!project || !markdown) {
    return <NotFound />;
  }

  const html = marked.parse(markdown);
  const titleMatch = markdown.match(/^#\s+(.+)$/m);
  const title = titleMatch?.[1] ?? "Privacy Policy";

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
