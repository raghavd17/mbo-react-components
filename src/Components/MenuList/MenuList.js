import React from 'react';
import { NavLink } from 'react-router-dom';
import './_menu_list.scss';
import style from  './../Form/Label/_label.module.scss';

// import  "./../Form/Label/Label";

const MenuList = () => {
  return (
    
<main className='p-4'>
    
    <h5 className='text-red-500 mb-4 text-5xl'>Menu Items </h5>
    <ul className="menu__list">
      <li className="menu__item repel" tabIndex={1}>
        <NavLink className="item-link">  Nav Link here </NavLink>
        <NavLink className="item-link">  Nav Link here </NavLink>
      </li>
      <li className="menu__heading"> Menu Title  </li>
      <li className="menu__item cluster" tabIndex={1}>
          <div className="menu__title"> Inactive Data Group item </div>
        
         
        <div className="form_checkbox">
          <input
            className="checkobox"
            type="Checkbox"
            name="Checkbox" 
          />
        </div>
     
      </li>

      <li className="menu__item repel" data-state="active" tabIndex={2}>
        <div className="menu__title">Active data-item
        </div>
        <div className="form_checkbox">
          <input
            className="checkobox square"
            type="Checkbox"
            name="Checkbox" 
          />
        </div>
      </li>
    
      <li className="menu__item cluster" data-state="" tabIndex={3}> 
        <div className="menu__title">Title here
          </div>
        <div className="item_checkbox group" data-state="acctive">
          <div>
        <label className={`${style.label} ${style.tag} ${style.success} ${style.xxs}`}><span>A</span> -- <span>Z</span></label></div>
        </div>
      </li>
      <li className='menu__divider'></li>
      <li className="menu__item repel" data-state="" tabIndex={4}> 
        <div  className="menu__title">Title here
          </div>
        
          <div>
          <label className={`${style.label} ${style.tag} ${style.dark} ${style.xxs}`}><span>A</span> -- <span>Z</span></label>
          </div>
        
      </li>
      
      
    </ul>
    <h2>Checkbox </h2>
      <div className="form_checkbox">
            <input
              className="checkobox"
              type="Checkbox"
              name="Checkbox" 
            />
          </div>
    <hr/>
    <div className="item_checkbox" data-state="">
          <div className="list-label">
          <span>A</span> --<span>Z</span>
          </div>
    </div>

    
  </main>
  )
}

export default MenuList