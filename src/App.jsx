// import React from 'react';

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Create from "./components/Create";
import Product from "./components/Product";

const App = () => {

const routes=[
  {
    id:1,
    link:"/",
    element:<Home/>
  },{
    id:2,
    link:"/create",
    element:<Create/>
  },{
    id:3,
    link:"/product",
    element:<Product/>
  },
]

  return (
    <div>
      <Header/>
      <Routes>
        {routes.map((el)=>(
          <Route path={el.link} element={el.element} key={el.id}/>
        ))}
      </Routes>
    </div>
  );
};

export default App;