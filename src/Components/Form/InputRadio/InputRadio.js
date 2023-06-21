import React from 'react'
import './../_form.scss';
import './_input-radio.scss';

const Radio = () => {
  return (
    
<main className='p-4'>
    
    <h5 className='text-red-500 mb-4 text-5xl'>Radio Component </h5>
     {/* <div className="cluster">
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
  <div className='grid-auto-cols'>
    
    <div className="form-checkbox cluster">
      
      <input
        className="radio"
        type="radio"
        name="Radio" 
      />
        <label>Radio</label>
    </div>
    <div className="form-checkbox cluster">
    <input
        className="radio"
        type="radio"
        name="Radio" 
        Checked
      />
        <label>Radio</label>
    </div>

    <div className="form-checkbox">
      
      <input
        className="radio"
        type="radio"
        name="Radio"
        disabled="disabled"
      />
        <label>Disabled Radio</label>
    </div>
    <div className="form-checkbox">
      
      <input
        className="radio"
        type="radio"
        name="Radio"
        checked="checked"
        disabled="disabled"
      />
        <label>Disabled Radio</label>
    </div>
    </div>
  
</main>
  )
}

export default Radio;