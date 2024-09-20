import React from "react";
import ReactDOM from "react-dom/client";
import {
  HashRouter,
  Navigate,
  redirect,
  Route,
  Routes,
} from "react-router-dom";
import { pdfjs } from "react-pdf";
import reportWebVitals from "./helpers/reportWebVitals";
import { App } from "./containers/App";
import { PDF } from "./components/PDF";
import "./index.scss";
import { Layout } from "./components/Layout";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Layout>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/resume" element={<PDF />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </HashRouter>
    </Layout>
  </React.StrictMode>
);

reportWebVitals();
