import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// theme provider
import { ThemeProvider } from 'styled-components';
import theme from './theme';
// components
import App from './App';

const APP_WITH_THEME = (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );

ReactDOM.render(APP_WITH_THEME, document.getElementById('root'));
