import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { store } from './app/store';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import NewTodos from './features/products/todos/NewTodos';
import Newproducts from './newproducts/Newproducts';
import ProductList from './features/products/ProductList';
import Countries from './countries/Countries';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/todos",
        element: <NewTodos></NewTodos>
      },
      {
        path: "/products",
        element: <ProductList></ProductList>
      },
      {
        path: "/countries",
        element: <Countries></Countries>
      }
    ]
  }
 
]);
root.render(
  
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
