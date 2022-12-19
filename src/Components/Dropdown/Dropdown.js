import React, { useState } from 'react'
import IconCheckmark from '../../Icons/IconCheckmark';
import { NavLink } from 'react-router-dom';
import './dropdown.scss';
import IconsCaretDown from '../../Icons/IconsCaretDown';

const Dropdown = () => {

  const [isVisible, setIsVisible] = useState(false)
  return (
    
<main className='p-4'>
    
    <h2 className='text-red-500 mb-4 text-5xl'>Dropdowns</h2>
    <div className='dropdown test'>
    <button className='btn danger dropdown-toggle'  data-dropdown={`${isVisible?"open": ""}`} onClick={()=>setIsVisible(!isVisible)}>
      <span>Open Dropdown</span>
    <IconsCaretDown />
    </button>
    {/* <button className='dropdown-toggle'  data-dropdown={`${isVisible?"open": ""}`} onClick={()=>setIsVisible(!isVisible)}>
      <span>Open Dropdown</span>
    <IconsCaretDown />
    </button> */}
      {/* <div className='dropdown-menu' data-state={`${isVisible?"open": ""}`}> */}
      <div className='dropdown-menu'>
        <ul className="list">
          <li className="list-item" tabIndex={1}>
            <NavLink key={1}  className="item-link"> Link item here </NavLink>

            
          </li>
          <li className="list-item group" tabIndex={2}>
              <div className="list-title"> Inactive Data Group item </div>
            <div>
              <span> 
              <div className="item-checkbox" data-state="">
                <div>
                  <IconCheckmark />
                  </div>
                  </div>
                  </span>
            </div>
          </li>

          <li className="list-item group" data-state="" tabIndex={3}>
            <div className="list-title">Active data-item
            </div>
            <div>
              <div className="item-checkbox" data-state="active">
                <div>
                <IconCheckmark />
                </div>
              </div>
            </div>
          </li>
    
          <li className="list-item group" data-state="" tabIndex={4}> 
            <div className="list-title">Title here
              </div>
            <div className="item-checkbox group" data-state="">
              <div className="list-label">
              <span>A</span>  -- <span>Z</span>
              </div>
            </div>
          </li>
          <li className="list-item group" data-state="" tabIndex={5}> 
            <div  className="list-title">Title here
              </div>
            <div className="item-checkbox" data-state="">
              <div className="list-label">
              <span>A</span>  -- <span>Z</span>
              </div>
            </div>
          </li>
      
        </ul>
      </div>
    </div>
    <div>Some other text </div>
  </main>
  )
}

export default Dropdown;