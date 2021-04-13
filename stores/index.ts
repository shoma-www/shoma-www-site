import { createContext } from "react";
import { Article } from "~/types.ts";

const initialContext: { articles?: Article[] } = {};

export const ArticlesContext = createContext(initialContext);
