import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./nav/Nav";
import Button from './pages/ButtonPage';
import List from './Components/List/List';
import Dropdown from './Components/Dropdown/Dropdown';
import Date from './Components/Date/Date';
import Search from './Components/Search/Search';
import Avatar from './Components/Avatar/Avatar';





const App = () => {
  return (
    <BrowserRouter>

        <Routes>

        
           <Route path="/" element={<Nav />}>
           <Route path="/Button" element={<Button />} />
          <Route path="/list" element={<List />} />
          <Route path="/Dropdown" element={<Dropdown />} />
          <Route path="/Date" element={<Date />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Avatar" element={<Avatar />} />

            

         </Route> 


          {/* <Route path="*" element={<h1>Page Not Found</h1>} /> */}

        </Routes>

      </BrowserRouter>
    
  )
}

export default App