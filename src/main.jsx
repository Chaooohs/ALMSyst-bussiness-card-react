import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, } from "react-router-dom"
import './index.css'

import { Root, rootLoader  } from "./routes/root"
import { MainPage } from './routes/MainPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} loader={rootLoader} id="root" >
      <Route index element={<MainPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)