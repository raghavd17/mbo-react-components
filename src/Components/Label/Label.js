import React from 'react'
import style from './_label.module.scss';

const Label = () => {
  return (
    
<main className='p-4'>
    
    <h5 className='text-red-500 mb-4 text-5xl'>Label Component </h5>
      <div className='cluster'>
      <div className="separated">
        <Label className={`${style.label} ${style.label_bg} ${style.success}`}>Success Label</Label>
        <Label className='label_bg'>14</Label>
        <Label className='label_bg'>2022</Label>		
      </div>
      <div className="separator bullet">
        
      </div>
      <div className="separated">
        <Label className='label_bg'>Feb</Label>
        <Label className='label_bg'>14</Label>
        <Label className='label_bg'>2022</Label>		
      </div>
      </div>
  </main>
  )
}

export default Label;