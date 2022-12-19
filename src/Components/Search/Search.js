import React from 'react'
import IconSearch from '../../Icons/IconSearch';
// import IconClose from '../../Icons/IconsClose';

import './search.scss';

const Search = () => {
  return (
    
<main className='p-4'>
    
    <h2 className='text-red-500 mb-4 text-5xl'>Search </h2>
    <div className="search">
      <div className='search__bar'>
      <input class="search__input" placeholder="Name, category or role" type="text" />
        <button type="button" class="btn icon search__btn" dat>
          <IconSearch />
        </button>
      </div>
      {/* search__bar */}
      <div className='search__results'>
      <ul className="list">
      <li className="list-item" data-state="" tabIndex={1}> 
        <div data-avatar="" class="avatar">
            <picture className='avatar-media'>
              <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
              <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
              <img src='https://i.pravatar.cc/300' alt='random profile' />
            </picture>
            <div className='avatar-content'>
              <div className='avatar-title'>Camila Willians </div>
              <div className='avatar-desc separated bullet'><span>Category</span> <span>Content Writer</span> </div>
            </div>
          </div>
      </li>
      <li className='list-divider'></li>
      <li className="list-item" data-state="" tabIndex={2}> 
        <div data-avatar="" class="avatar md">
            <picture className='avatar-media'>
              <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
              <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
              <img src='https://i.pravatar.cc/300' alt='random profile' />
            </picture>
            <div className='avatar-content'>
            <div className='avatar-title'>Camila Willians </div>
              <div className='avatar-desc separated bullet'><span>Category</span> <span>Content Writer</span> </div>
            </div>
          </div>
      </li>
      <li className='list-divider'></li>
      <li className="list-item" data-state="" tabIndex={3}>
        <div data-avatar="" class="avatar lg">
            <picture className='avatar-media'>
              <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
              <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
              <img src='https://i.pravatar.cc/300' alt='random profile' />
            </picture>
            <div className='avatar-content'>
            <div className='avatar-title'>Camila Willians </div>
              <div className='avatar-desc separated bullet'><span>Category</span> <span>Content Writer</span> </div>
            </div>
          </div>
      </li>
      <li className='list-divider'></li>
      <li className="list-item" data-state="" tabIndex={4}>
        <div data-avatar="" class="avatar xl">
            <picture className='avatar-media'>
              <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
              <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
              <img src='https://i.pravatar.cc/300' alt='random profile' />
            </picture>
            <div className='avatar-content'>
            <div className='avatar-title'>Camila Willians </div>
              <div className='avatar-desc separated bullet'><span>Category</span> <span>Content Writer</span> </div>
            </div>
          </div>
      </li>

      <li className="list-item" data-state="" tabIndex={1}> 
        <div data-avatar="sm" class="avatar sm">
            
            <div className='avatar-content'>
              <div className='avatar-title'>Camila Willians </div>
              <div className='avatar-desc separated bullet'><span>Category</span> <span>Content Writer</span> </div>
            </div>
          </div>
      </li>
      <li className='list-divider'></li>
      <li className="list-item" data-state="" tabIndex={2}> 
        <div data-avatar="md" class="avatar md">
            
            <div className='avatar-content'>
            <div className='avatar-title'>Camila Willians </div>
              <div className='avatar-desc separated bullet'><span>Category</span> <span>Content Writer</span> </div>
            </div>
          </div>
      </li>
      <li className='list-divider'></li>
      <li className="list-item" data-state="" tabIndex={3}>
        <div data-avatar="lg" class="avatar lg">
            
            <div className='avatar-content'>
            <div className='avatar-title'>Camila Willians </div>
              <div className='avatar-desc separated bullet'><span>Category</span> <span>Content Writer</span> </div>
            </div>
          </div>
      </li>
      <li className='list-divider'></li>
      <li className="list-item" data-state="" tabIndex={4}>
        <div data-avatar="xl" class="avatar xl">
            <div className='avatar-content'>
            <div className='avatar-title'>Camila Willians </div>
              <div className='avatar-desc separated bullet'><span>Category</span> <span>Content Writer</span> </div>
            </div>
          </div>
      </li>
      
      
    </ul>
      </div>
      </div>


      
  </main>
  )
}

export default Search;