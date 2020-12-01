import React from 'react';
import { ChevronLeft } from 'react-feather';
import { withLayout } from './Layout';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import './PDF.scss';

const defaultLayoutPluginInstance = defaultLayoutPlugin();

export function PDF() {
  return (
    <section className="flex flex-col justify-end items-center">
      <nav className="text-white font-sans text-sm md:pl-1 mt-4">
        <a href="" className="flex">
          <ChevronLeft />
          &nbsp;Back to Home
        </a>
      </nav>
      <div className="r-pdf pt-4 px-6">
        <Viewer
          fileUrl={`${process.env.PUBLIC_URL}/resume.pdf`}
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </section>
  );
}

export const PDFWithLayout = withLayout(PDF);
