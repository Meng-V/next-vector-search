"use server";

import weaviate, { WeaviateClient } from "weaviate-client";
import { Wiki } from "../types.ts";

const client: WeaviateClient = await weaviate.connectToWeaviateCloud(
  "https://o7jvftantqmjjjsb8jatew.c0.us-east1.gcp.weaviate.cloud",
  {
    authCredentials: new weaviate.ApiKey(process.env.WEAVIATE_ADMIN_KEY!!),
    headers: {
      "X-Cohere-Api-Key": process.env.COHERE_API_KEY!!,
      "X-OpenAI-Api-Key": process.env.OPENAI_API_KEY!!,
    },
  }
);

export async function vectorSearch(searchTerm: string) {
  const myCollection = client.collections.get<Wiki>("LibChatData");

  const response = await myCollection.query.nearText(searchTerm, {
    limit: 5,
  });

  return response;
}

export async function RAG(searchTerm: string) {
  const myCollection = client.collections.get<Wiki>("LibChatData");

  const response = await myCollection.generate.nearText(
    searchTerm,
    {
      groupedTask: `you are a academic university libraian, use the information below to answer ${searchTerm} and use as close as possible to the information provided`,
    },
    {
      limit: 5,
    }
  );

  return response;
}
