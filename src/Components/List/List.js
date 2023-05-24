import React from 'react';
import { NavLink } from 'react-router-dom';
import IconCheckmark from '../../Icons/IconCheckmark';
import './_list.scss'

const List = () => {
  return (
    
<main className='p-4'>
    
    <h5 className='text-red-500 mb-4 text-5xl'>List Items </h5>
    <ul className="list">
      <li className="list_item repel" tabIndex={1}>
        <NavLink className="item-link">  Nav Link here </NavLink>
        <NavLink className="item-link">  Nav Link here </NavLink>
      </li>
      <li className="list_item repel " tabIndex={1}>
          <div className="list-title"> Inactive Data Group item </div>
        <div>
         
          <div className="item-checkbox" data-state="active">
              <IconCheckmark />
              </div>
              
        </div>
      </li>

      <li className="list_item repel" data-state="active" tabIndex={2}>
        <div className="list-title">Active data-item
        </div>
        <div>
          <div className="item-checkbox" data-state="">
          
            <IconCheckmark />
          
          </div>
        </div>
      </li>
    
      <li className="list_item repel" data-state="" tabIndex={3}> 
        <div className="list-title">Title here
          </div>
        <div className="item-checkbox group" data-state="acctive">
          <div className="list-label">
          <span>A</span> -- <span>Z</span>
          </div>
        </div>
      </li>
      <li className='list-divider'></li>
      <li className="list_item repel" data-state="" tabIndex={4}> 
        <div  className="list-title">Title here
          </div>
        <div className="item-checkbox" data-state="">
          <div className="list-label">
          <span>A</span> --<span>Z</span>
          </div>
        </div>
      </li>
      
      
    </ul>
    <h2>Checkbox </h2>
    <div className="item-checkbox" data-state="active">            
        <IconCheckmark />
    </div>
    <hr/>
    <div className="item-checkbox" data-state="">
          <div className="list-label">
          <span>A</span> --<span>Z</span>
          </div>
    </div>

    
  </main>
  )
}

export default List