"use client";

import React from "react";
import { ReactNode } from "react";

export default function InputCover({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-center pt-3">{children}</div>
    </div>
  );
}
