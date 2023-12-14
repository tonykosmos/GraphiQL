import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PathRouter } from './routes';
import { LanguageProvider } from './providers/LanguageProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <LanguageProvider>
        <PathRouter />
      </LanguageProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
