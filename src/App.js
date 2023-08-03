import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./nav/Nav";
import Button from './pages/ButtonPage';
import MenuList from './Components/MenuList/MenuList';
import Dropdown from './Components/Dropdown/Dropdown';
import Date from './Components/Date/Date';
import Label from './Components/Form/Label/Label';
import Link from './Components/Link/Link';
import Accordion from './Components/Accordion/Accordion';
import InputText from './Components/Form/InputText/InputText';
import Search from './Components/Search/Search';
import Avatar from './Components/Avatar/Avatar';
import InputRadio from './Components/Form/InputRadio/InputRadio';
import InputCheckbox from './Components/Form/InputCheckbox/InputCheckbox';





const App = () => {
  return (
    <BrowserRouter>

        <Routes>

        
           <Route path="/" element={<Nav />}>
           <Route path="/Button" element={<Button />} />
          <Route path="/Menulist" element={<MenuList />} />
          <Route path="/Dropdown" element={<Dropdown />} />
          <Route path="/Date" element={<Date />} />
          <Route path="/Link" element={<Link />} />
          <Route path="/Accordion" element={<Accordion />} />
          <Route path="/Label" element={<Label />} />
          <Route path="/InputText" element={<InputText />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Avatar" element={<Avatar />} />
          <Route path="/InputRadio" element={<InputRadio />} />
          <Route path="/InputCheckbox" element={<InputCheckbox />} />

            

         </Route> 


          {/* <Route path="*" element={<h1>Page Not Found</h1>} /> */}

        </Routes>

      </BrowserRouter>
    
  )
}

export default App