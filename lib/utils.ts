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
