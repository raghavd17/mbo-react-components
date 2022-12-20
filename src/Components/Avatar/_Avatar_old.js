import React from 'react';
import './_avatar.scss';

function Avatar() {
  return (
    <section className=''>
      <section className='grid grid-cols-2 border-b border-b-neutral-400 py-5'>
        
        <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar with Pic </h1>
          <div className='cluster'>
            <div class="avatar xl">
              <div className='avatar-media' data-indicator="busy" data-avatar="xl" >
                <picture>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
              </div>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            {/* avatar end */}

            <div class="avatar xl">
              <div className='avatar-media' data-avatar="xl" data-indicator="online" >
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
              </div>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>

            <div class="avatar xl">
            <div className='avatar-media' data-avatar="xl" data-indicator="offline">
              </div>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>

            <div class="avatar xl">
            <div className='avatar-media' data-avatar="xl" data-indicator="away">
              </div>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            
            
            
          </div>
        </div>
      </section>


      

    </section>
  )
}

export default Avatar