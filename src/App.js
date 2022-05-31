import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Category from "./pages/Category";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />

      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path= 'category' element={<Category />} />
        <Route path= 'detail/:idMeal' element={<Detail />} />
      </Routes>
      </div>
    </BrowserRouter>
  
  );
}

export default App;