import weaviate, { WeaviateClient } from "weaviate-client";
import "dotenv/config";

import * as fs from "fs";
import { join } from "path";
import * as readline from "readline";

const client: WeaviateClient = await weaviate.connectToWeaviateCloud(
  process.env.WEAVIATE_HOST_URL!!,
  {
    authCredentials: new weaviate.ApiKey(process.env.WEAVIATE_ADMIN_KEY!!),
    headers: {
      "X-Cohere-Api-Key": process.env.COHERE_API_KEY!!,
      "X-OpenAI-Api-Key": process.env.OPENAI_API_KEY!!,
    },
  }
);

async function createCollection() {
  const response = await client.collections.create({
    name: "LibChatData",
    vectorizers: weaviate.configure.vectorizer.text2VecCohere({
      model: "embed-multilingual-v3.0",
      sourceProperties: ["question", "answer"],
    }),
    generative: weaviate.configure.generative.openAI(),
  });

  console.log("Connection created!", response.name);
}

async function importData(fileName: string, collectionName: string) {
  const filePath = join(process.cwd(), `./utils/${fileName}`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const items = JSON.parse(fileContent);

  const wiki = client.collections.get(collectionName);
  const itemsToInsert = items.map((item: any) => ({
    question: item.question,
    answer: item.answer,
  }));

  const response = await wiki.data.insertMany(itemsToInsert);

  if (response.hasErrors) {
    throw new Error("Something went wrong in import!");
  }

  console.log("Items inserted: ", items.length);

  return { status: "Import Complete" };
}

// await createCollection();
// await importData("new.json", "LibChatData");
