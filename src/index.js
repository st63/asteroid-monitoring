import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 24px;
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const theme = {
  media: {
    phone: '(max-width: 900px)',
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);

reportWebVitals();
