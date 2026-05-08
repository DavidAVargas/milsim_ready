"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import { FieldGuidePDF } from "./field-guide-pdf";

export default function PdfDownloadButton({ selected }: { selected: string[] }) {
  return (
    <PDFDownloadLink
      document={<FieldGuidePDF selected={selected} />}
      fileName="milsim-ready-field-guide.pdf"
      className="w-full flex items-center justify-center gap-2 bg-tactical text-white font-mono text-xs tracking-widest uppercase py-3 hover:opacity-90 transition-opacity"
    >
      {({ loading }) => (
        <>
          <Download size={14} />
          {loading ? "GENERATING..." : "DOWNLOAD PDF"}
        </>
      )}
    </PDFDownloadLink>
  );
}
