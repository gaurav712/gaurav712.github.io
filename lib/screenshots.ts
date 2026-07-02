import { promises as fs } from "fs";
import path from "path";

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".svg",
]);

export async function getScreenshotsForRoute(route: string): Promise<string[]> {
  const dir = path.join(process.cwd(), "public", "screenshots", route);

  try {
    const entries = await fs.readdir(dir);
    return entries
      .filter((name) =>
        IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()),
      )
      .sort((a, b) => a.localeCompare(b))
      .map((name) => `/screenshots/${route}/${name}`);
  } catch {
    return [];
  }
}
