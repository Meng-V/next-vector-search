import React from "react";
import Image from "next/image";

import RAGResult from "../../components/RAGResult.tsx";
import Header from "../../components/Header.tsx";

export default async function Home() {
  return (
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
        <Header text={"Search FAQs within the Libraries"} />
        <RAGResult />
      </main>
  );
}
