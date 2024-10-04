"use client";

import React from "react";


export default function Header({text}: {
  text: string} ) {

    return (
        <h1 className="text-4xl pt-5 font-bold text-black text-center">
          {text}
        </h1>
    )
}



