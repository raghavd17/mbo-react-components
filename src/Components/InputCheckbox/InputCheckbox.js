import React from 'react'
import './_input-checkbox.scss';

const Checkbox = () => {
  return (
    
<main className='p-4'>
    
    <h5 className='text-red-500 mb-4 text-5xl'>Checkbox Component </h5>
     {/*  <div className="form-checkbox">
      <input
        type="checkbox"
        className={checkboxControl}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={value}>{value}</label>
    </div> */}
<div className='grid grid-cols-2 grid-gap-sm'>
  <sections className="grid">
  <div className="form-checkbox cluster">
      <input
        className="checkobox"
        type="Checkbox"
        name="Checkbox" 
      />
        <label>Checkbox</label>
    </div>
    {/* Checkked State  */}
    <div className="form-checkbox cluster">
      <input
        className="checkobox"
        type="Checkbox"
        name="Checkbox" 
        checked
      />
        <label>Checkbox Checkbox State</label>
    </div>
    {/* switch  */}
    <div className="form-checkbox cluster">
        <input
          className="switch"
          type="Checkbox"
          name="Checkbox" 
        />
          <label>Switch</label>
</div>

<div className="form-checkbox cluster">
        <input
          className="switch"
          type="Checkbox"
          name="Checkbox" 
          checked
        />
          <label>Switch Checked State</label>
</div>

  </sections>
{/* col 1 end  */}
<sections className="grid">
  <div className="form-checkbox cluster">
      <input
        className="checkobox"
        type="Checkbox"
        name="Checkbox" 
        disabled
      />
        <label>Checkbox Disabled</label>
    </div>
    {/* Checkked State  */}
    <div className="form-checkbox cluster">
      <input
        className="checkobox"
        type="Checkbox"
        name="Checkbox" 
        checked
        disabled
      />
        <label>Checkbox Checked State Disabed</label>
    </div>
    {/* switch  */}
    <div className="form-checkbox cluster">
        <input
          className="switch"
          type="Checkbox"
          name="Checkbox" 
          disabled
        />
          <label>Switch Disabed</label>
</div>

<div className="form-checkbox cluster">
        <input
          className="switch"
          type="Checkbox"
          name="Checkbox" 
          checked
          disabled
        />
          <label>Switch Checked State Disabled</label>
</div>

  </sections>



    
      
    
    </div>

   

    
</main>
  )
}

export default Checkbox;