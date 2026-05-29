/** Maps project slug (query param) to markdown filename under this directory. */
export const privacyPolicyFiles: Record<string, string> = {
  chess: "chess.md",
};

export function getPrivacyPolicyFilename(
  project: string,
): string | undefined {
  return privacyPolicyFiles[project];
}
