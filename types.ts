export interface MetaData {
  title: string;
  url: string;
  date: Date;
  id: string;
}

export interface ArticleConfig {
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
export const isArticleConfig = (arg: any): arg is ArticleConfig => {
  return typeof arg.articleDir === "string";
};

// deno-lint-ignore no-explicit-any
export const isArticle = (arg: any): arg is Article => {
  return arg.metaData !== undefined &&
    isMetadata(arg.metaData) &&
    typeof arg.html === "string";
};
