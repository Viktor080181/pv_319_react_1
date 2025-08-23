import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';
//import reportWebVitals from './reportWebVitals';

let nav = {"Главная":"/index", "Новости":"/news", " компании":"/about", "Магазин":"/shop", "Контакты":"/contacs"};
// let nav_icons = {"🏠", "📰", "🏢", "🛒", "📞"};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <App navigation = {nav}/>
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const nav = {
//   home: {
//     title: "Главная",
//     path: "/index",
//     icon: "🏠"
//   },
//   news: {
//     title: "Новости",
//     path: "/news",
//     icon: "📰"
//   },
//   about: {
//     title: "О компании",
//     path: "/about",
//     icon: "🏢"
//   },
//   shop: {
//     title: "Магазин",
//     path: "/shop",
//     icon: "🛒"
//   },
//   contacts: {
//     title: "Контакты",
//     path: "/contacts",
//     icon: "📞"
//   }
// };
