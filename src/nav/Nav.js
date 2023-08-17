import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    
<nav className='p-4'>
    
    
    <ul className='cluster'>
    <NavLink to={'/Button'} key={1} className="border-b-2  border-primary-300"> Button </NavLink>
      <NavLink to={'/MenuList'} key={2} className="border-b-2  border-primary-300"> Menu List </NavLink>
      <NavLink to={'/Dropdown'} key={3}className="border-b-2 border-primary-300"> Dropdown </NavLink>
      <NavLink to={'/Date'} key={4} className="border-b-2 border-primary-300"> Date </NavLink>
      <NavLink to={'/Link'} key={5} className="border-b-2 border-primary-300"> Link </NavLink>
      <NavLink to={'/Accordion'} key={5} className="border-b-2 border-primary-300"> Accordion </NavLink>
      <NavLink to={'/Label'} key={5} className="border-b-2 border-primary-300"> Label </NavLink>
      <NavLink to={'/InputText'} key={5} className="border-b-2 border-primary-300"> InputText </NavLink>
      <NavLink to={'/Search'} key={6} className="border-b-2 border-primary-300"> Search </NavLink>
      <NavLink to={'/InputRadio'} key={7} className="border-b-2 border-primary-300"> Input Radio </NavLink>
      <NavLink to={'/InputCheckbox'} key={8} className="border-b-2 border-primary-300"> Input Checkbox </NavLink>
      <NavLink to={'/Avatar'} key={9} className="border-b-2 border-primary-300"> Avatar </NavLink>
    </ul>
    <Outlet />
  </nav>
  )
}

export default Nav


