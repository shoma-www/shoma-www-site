export interface metaData {
  title: string;
  url: string;
  date: string;
  id: string;
}

// deno-lint-ignore no-explicit-any
export const isMetadata = (arg: any): arg is metaData => {
  return typeof arg.title === "string" &&
    typeof arg.url === "string" &&
    arg.date instanceof Date &&
    typeof arg.id === "string";
};

export interface loaderConfig {
  articleDir: string;
}

// deno-lint-ignore no-explicit-any
export const isLoaderConfig = (arg: any): arg is loaderConfig => {
  return typeof arg.articleDir === "string";
};
