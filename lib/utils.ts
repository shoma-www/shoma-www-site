import format from "https://deno.land/x/date_fns@v2.15.0/format/index.js";
import parseISO from "https://deno.land/x/date_fns@v2.15.0/parseISO/index.js";
import ja from "https://deno.land/x/date_fns@v2.15.0/locale/ja/index.js";

export async function getFilePaths(
  currentPath: string,
  filterFileName: RegExp,
): Promise<string[]> {
  let paths: string[] = [];

  for await (const dirEntry of Deno.readDir(currentPath)) {
    const entryPath = `${currentPath}/${dirEntry.name}`;
    if (dirEntry.isDirectory) {
      paths = paths.concat(await getFilePaths(entryPath, filterFileName));
      continue;
    }
    if (dirEntry.isFile && filterFileName.test(entryPath)) {
      paths.push(entryPath);
      continue;
    }
  }

  return paths;
}

export function formatDate(date: Date): string {
  return format(
    parseISO(date.toString(), { locale: ja }),
    "yyyy/MM/dd",
    {
      locale: ja,
    },
  );
}
