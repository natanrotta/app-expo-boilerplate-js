import React from 'react';

import { ThemeProvider } from './src/themes';
import { I18nProvider } from './src/i18n';

import Routes from './src/routes/app.routes';

export default function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </I18nProvider>
  );
}