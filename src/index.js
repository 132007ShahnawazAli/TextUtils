import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createVercelAnalytics } from '@vercel/analytics';

const analytics = createVercelAnalytics({
  projectId: 'prj_mqn2uSOjlkzXGebiRPKqHRDPsI3Z',
  url: 'https://textutils-lovat.vercel.app/'
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(analytics.report);
