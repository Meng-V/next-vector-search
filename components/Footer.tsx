import Link from "next/link";

export function Footer() {
  return (
    <footer className="">
        <div className="mt-8 px-4 flex flex-col text-center items-center font-light text-gray-500 text-xs">
          Credit to "Build a Full RAG app with React and Weaviate" from YouTube
          by Daniel from Weaviate • Vector Database
          <br /> Last updated on Aug 30, 2024
        </div>
    </footer>
  );
}
