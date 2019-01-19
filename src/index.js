import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// theme provider
import { ThemeProvider } from 'styled-components';
import theme from './theme';
// components
import App from './App';

const WRAPPED_APP = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

ReactDOM.render(WRAPPED_APP, document.getElementById('root'));
