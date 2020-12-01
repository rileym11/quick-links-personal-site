import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { ChevronLeft, Download } from 'react-feather';
import { withLayout } from './Layout';
import { NavItem } from './NavItem';
import './PDF.scss';

export function PDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <section className="max-w-full flex flex-col justify-end items-center">
      <nav className="flex text-white font-sans text-sm md:pl-1 mt-4 items-center">
        <NavItem link="/" icon={<ChevronLeft />} text="Back Home" isReactLink />
        <div className="border border-white mx-4 h-5" />
        <NavItem
          link={`${window.location.origin}/resume.pdf`}
          icon={<Download />}
          text="Download"
        />
      </nav>
      <div className="max-w-full r-pdf pt-4 sm:px-6 overflow-scroll">
        <Document
          file={`${process.env.PUBLIC_URL}/resume.pdf`}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </section>
  );
}

export const PDFWithLayout = withLayout(PDF);
