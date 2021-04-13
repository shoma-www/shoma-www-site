export interface MetaData {
  title: string;
  url: string;
  date: Date;
  id: string;
}

export interface LoaderConfig {
  articleDir: string;
}

export interface Article {
  html: string;
  metaData: MetaData;
}

// deno-lint-ignore no-explicit-any
export const isMetadata = (arg: any): arg is MetaData => {
  return typeof arg.title === "string" &&
    typeof arg.url === "string" &&
    arg.date instanceof Date &&
    typeof arg.id === "string";
};

// deno-lint-ignore no-explicit-any
export const isLoaderConfig = (arg: any): arg is LoaderConfig => {
  return typeof arg.articleDir === "string";
};

// deno-lint-ignore no-explicit-any
export const isArticle = (arg: any): arg is LoaderConfig => {
  return arg.metaData !== undefined &&
    isMetadata(arg.metaData) &&
    typeof arg.html === "string";
};
