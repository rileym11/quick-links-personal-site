import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { pdfjs } from 'react-pdf';
import reportWebVitals from './helpers/reportWebVitals';
import { App } from './containers/App';
import { PDF } from './components/PDF';
import './index.scss';
import { Layout } from './components/Layout';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

ReactDOM.render(
  <React.StrictMode>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/resume" component={PDF} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
