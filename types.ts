import { GenerativeReturn } from "weaviate-client"

export type Wiki = {
  question: string,
  answer: string
}


export type SearchResponse = {
  response?: GenerativeReturn<Wiki>
}
