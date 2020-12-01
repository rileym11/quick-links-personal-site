import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { AppWithLayout } from './containers/App';
import reportWebVitals from './helpers/reportWebVitals';
import { PDFWithLayout } from './components/PDF';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';

ReactDOM.render(
  <React.StrictMode>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
      <AppWithLayout />
    </Worker>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
