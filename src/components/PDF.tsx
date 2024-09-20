import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { ChevronLeft, Download } from "react-feather";
import { withLayout } from "./Layout";
import { NavItem } from "./NavItem";
import { OnDocumentLoadSuccess } from "react-pdf/dist/cjs/shared/types";
import cx from "classnames";

const resume = encodeURI("Riley MacDonald's Resume.pdf");

export function PDF() {
  const [numPages, setNumPages] = useState<number | null>(null);

  const onDocumentLoadSuccess: OnDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const resumeUrl = `${window.location.origin}/${resume}`;

  // 613 is the pdf file's inherint width
  const pdfPageSize = window.innerWidth < 613 ? window.innerWidth : undefined;

  return (
    <section
      className={cx(
        "max-w-full",
        "flex",
        "flex-col",
        "justify-end",
        "items-center"
      )}
    >
      <nav
        className={cx(
          "flex",
          "text-white",
          "font-sans",
          "text-sm",
          "md:pl-1",
          "mt-4",
          "items-center"
        )}
      >
        <NavItem link="/" icon={<ChevronLeft />} text="Back Home" isReactLink />
        <div className={cx("border", "border-white", "mx-4", "h-5")} />
        <NavItem link={resumeUrl} icon={<Download />} text="Download" />
      </nav>

      <object
        width="100%"
        className={cx(
          "pdf-container",
          "pt-4",
          "sm:px-6",
          "min-h-[90lvh]",
          "max-w-[900px]"
        )}
        data={`${resumeUrl}#toolbar=1&amp;navpanes=0&amp;scrollbar=1&amp;page=1&amp;view=FitH"`}
        type="application/pdf"
      >
        {/* Default to react-pdf if browser  does not have a native pdf viewer */}
        <Document
          className={cx("max-h-[90lvh]", "overflow-y-scroll")}
          file={resumeUrl}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (_, idx) => (
            <Page
              className={cx({
                "mt-5": idx !== 0,
              })}
              key={`page-${idx + 1}`}
              pageNumber={idx + 1}
              width={pdfPageSize}
            />
          ))}
        </Document>
      </object>
    </section>
  );
}

export const PDFWithLayout = withLayout(PDF);
