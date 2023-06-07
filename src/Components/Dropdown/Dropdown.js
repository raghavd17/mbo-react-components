import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './_dropdown.scss';
import IconsCaretDown from '../../Icons/IconsCaretDown';

const Dropdown = () => {

  const [isVisible, setIsVisible] = useState(false)
  return (
    
<main className='p-12'>
    
    <h2 className='text-red-500 mb-16 text-5xl'>Dropdowns</h2>

    <div className='dropdown-menu' data-arrow='true' data-align='start'>
        <ul className="list">
          <li className="list_item" tabIndex={1}>
            <NavLink key={1}  className="item-link"> Link item here </NavLink>

            
          </li>
          <li className="list_item repel" tabIndex={2} data-itemID=''>
              <div className="list-title"> Inactive Data Group item </div>
          </li>

          <li className="list_item repel" data-state="active" tabIndex={3}>
            <div className="list-title">Active data-item
            </div>
            <div className="form-checkbox">
            <input
              className="checkobox"
              type="Checkbox"
              name="Checkbox" 
            />
          </div>
          </li>
    
          <li className="list_item repel" data-state="" tabIndex={4}> 
            <div className="list-title">Title here
              </div>
            <div className="item-checkbox group">
              <div className="list-label">
              <span>A</span>  -- <span>Z</span>
              </div>
            </div>
          </li>
          <li className="list_item repel" data-state="inactive" tabIndex={5}> 
            <div  className="list-title">Title here
              </div>
            <div className="item-checkbox" data-state="active">
              <div className="list-label">
              <span>A</span>  -- <span>Z</span>
              </div>
            </div>
          </li>
      
        </ul>
      </div>

    
    <p className='mb-16'>Dropdowns are used to display a list of options, typically in an overlay that appears below a button or other control. They are used to group related items and allow users to select an option from the list. </p>
    <div className='mx-40 repel'>
    <div className='dropdown btn-group'>
      <button className='btn danger dropdown-toggle' data-dropdown={`${isVisible?"open": ""}`} onClick={()=>setIsVisible(!isVisible)}>
        <IconsCaretDown className="dropdown-icon" />
        <span>Open Dropdown</span>
      </button>
      <div className='dropdown-menu' data-arrow='true' data-align='start'>
        <ul className="list">
          <li className="list_item" tabIndex={1}>
            <NavLink key={1}  className="item-link"> Link item here </NavLink>

            
          </li>
          <li className="list_item repel" tabIndex={2} data-itemID=''>
              <div className="list-title"> Inactive Data Group item </div>
          </li>

          <li className="list_item repel" data-state="active" tabIndex={3}>
            <div className="list-title">Active data-item
            </div>
            <div>
              <div className="form-checkbox">
                <input
                  className="checkobox"
                  type="Checkbox"
                  name="Checkbox" 
                />
              </div>
            </div>
          </li>
    
          <li className="list_item repel" data-state="" tabIndex={4}> 
            <div className="list-title">Title here
              </div>
            <div className="item-checkbox group">
              <div className="list-label">
              <span>A</span>  -- <span>Z</span>
              </div>
            </div>
          </li>
          <li className="list_item repel" data-state="inactive" tabIndex={5}> 
            <div  className="list-title">Title here
              </div>
            <div className="item-checkbox" data-state="active">
              <div className="list-label">
              <span>A</span>  -- <span>Z</span>
              </div>
            </div>
          </li>
      
        </ul>
      </div>
    </div>
    {/* dropdown 1 end  */}

    <div className='dropdown btn-group'>
      <button className='btn danger dropdown-toggle' data-dropdown={`${isVisible?"open": ""}`} onClick={()=>setIsVisible(!isVisible)}>
        <IconsCaretDown className="dropdown-icon" />
        <span> Dropdown Center</span>
      </button>
      <div className='dropdown-menu' data-arrow='true' data-align='center'>
        <ul className="list">
          <li className="list_item" tabIndex={1}>
            <NavLink key={1}  className="item-link"> Link item here </NavLink>

            
          </li>
          <li className="list_item repel" tabIndex={2} data-itemID=''>
              <div className="list-title"> Inactive Data Group item </div>
          </li>

          <li className="list_item repel" data-state="active" tabIndex={3}>
            <div className="list-title">Active data-item
            </div>
            <div>
              <div className="form-checkbox">
                <input
                  className="checkobox"
                  type="Checkbox"
                  name="Checkbox" 
                />
              </div>
            </div>
          </li>
    
          <li className="list_item repel" data-state="" tabIndex={4}> 
            <div className="list-title">Title here
              </div>
            <div className="item-checkbox group">
              <div className="list-label">
              <span>A</span>  -- <span>Z</span>
              </div>
            </div>
          </li>
          <li className="list_item repel" data-state="inactive" tabIndex={5}> 
            <div  className="list-title">Title here
              </div>
            <div className="item-checkbox" data-state="active">
              <div className="list-label">
              <span>A</span>  -- <span>Z</span>
              </div>
            </div>
          </li>
      
        </ul>
      </div>
    </div>
    {/* dropdown 2 end  */}
    <div className='dropdown btn-group'>
      <button className='btn action dropdown-toggle' data-dropdown={`${isVisible?"open": ""}`} onClick={()=>setIsVisible(!isVisible)}>
        <span> Dropdown 2</span>
      <IconsCaretDown />
      </button>
      {/* <div className='btn-group round' role="group">
                  <Button type="alpha">Button Split</Button>
                  <Button type="action-success" icon split className="dropdown-toggle" data-dropdown={`${isVisible?"open": ""}`} onClick={()=>setIsVisible(!isVisible)}> <IconsCaretDown className="icon" /></Button>        
      </div> */}
      
      <div className='dropdown-menu' data-arrow='true' data-align='end'>
        <ul className="list">
          <li className="list_item" tabIndex={1}>
            <NavLink key={1}  className="item-link"> Link item here </NavLink>

            
          </li>
          <li className="list_item repel" tabIndex={2}>
              <div className="list-title"> Inactive Data Group item </div>
            
          </li>

          <li className="list_item repel" data-state="" tabIndex={3}>
            <div className="list-title">Active data-item
            </div>
            <div>
              <div className="form-checkbox">
                <input
                  className="checkobox"
                  type="Checkbox"
                  name="Checkbox" 
                />
            </div>
            </div>
          </li>
    
          <li className="list_item repel" data-state="" tabIndex={4}> 
            <div className="list-title">Title here
              </div>
            <div className="item-checkbox group" data-state="">
              <div className="list-label">
              <span>A</span>  -- <span>Z</span>
              </div>
            </div>
          </li>
          <li className="list_item repel" data-state="" tabIndex={5}> 
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
    {/* dropdown 2 end  */}
    </div>
    
    <div>Some other text </div>
  </main>
  )
}

export default Dropdown;