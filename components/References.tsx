"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import { GenerativeReturn } from "weaviate-client";
import { Wiki } from "@/types";

export default function References({
  response,
}: {
  response: GenerativeReturn<Wiki>;
}) {
  return (
    <div className="flex justify-center col-span-3 translate-y-[1rem] pb-10">
      <div
        className="flex z-10 mt-2 w-[750px] divide-gray-100 rounded-md border border-gray-100 bg-slate-200 shadow-s"
        role="menu"
      >
        <div className="p-2">
          <p className="pt-2 font-bold">
            ℹ️ Sources (Results from Vector Search)
          </p>
          <p className="pb-2">
            {" "}
            Find out what powered the response from your LLM
          </p>
          {response.objects.map((result) => (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={result.uuid}
                id={result.uuid}
                className="semi-bold text-slate-600"
              >
                {result.properties.question}
              </AccordionSummary>
              <AccordionDetails className="text-sm" >{result.properties.answer}</AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
