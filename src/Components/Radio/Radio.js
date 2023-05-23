import React from 'react'
import './_radio.scss';

const Radio = () => {
  return (
    
<main className='p-4'>
    
    <h2 className='text-red-500 mb-4 text-5xl'>Radio Component </h2>
     {/* <div className="radio">
        <input
          className={labelPlacement}
          type="radio"
          name={value}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          value={value}
        />
        <label>{value}</label> 
      </div> */}

    <div className="radio">
      
      <input
        className="radio"
        type="radio"
        name="Radio" 
      />
        <label>Radio</label>
    </div>

    <div className="radio">
      
      <input
        className="radio"
        type="radio"
        name="Radio"
        checked="checked"
        disabled="disabled"
      />
        <label>Disabled Radio</label>
    </div>

    <div className="radio">
      
      <input
        className="switch"
        type="radio"
        name="Radio"
      />
        <label>On</label>
    </div>
</main>
  )
}

export default Radio;