// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NewsProvider } from './context/news_context';
import { SelectedArticleProvider } from './context/selected_article_context';
import { FilterContextProvider } from './context/filter_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterContextProvider>
		<NewsProvider>
        <SelectedArticleProvider>
          <App />
        </SelectedArticleProvider>        
    </NewsProvider>
    </FilterContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
