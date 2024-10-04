import React from "react";
import Image from "next/image";

import SearchResult from "../components/SearchResult.tsx";
import Header from "../components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";

export default async function Home() {
  return (
    <div>
      <main className="h-[90vh]">
        <div className="z-10 justify-center flex pt-12">
          <Image
            className="w-48"
            src="/logo.png"
            alt="Weaviate Logo"
            height={360}
            width={360}
          />
        </div>
        <Header text={"Vector Search with Weaviate"} />
        <SearchResult />
        <Footer />
      </main>
    </div>
  );
}
