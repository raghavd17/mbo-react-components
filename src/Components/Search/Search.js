import React from 'react'
import IconSearch from '../../Icons/IconSearch';
// import IconClose from '../../Icons/IconsClose';

import './search.scss';
import style from './../Avatar/_avatar.module.scss';

const Search = () => {
  return (
    
<main className='p-4'>
    
    <h5 className='text-red-500 mb-4 text-5xl'>Search </h5>
    <div className="search">
      <div className='search__bar'>
      <input class="search__input" placeholder="Name, category or role" type="text" />
        <button type="button" class="btn icon search__btn">
          <IconSearch />
        </button>
      </div>
      {/* search__bar */}
      <div className='search__results'>
      <ul className="menu__list">
      <li className="menu__item" data-state="" tabIndex={1}> 
        <div data-avatar="" className={`${style.avatar}`}>
            <picture className={`${style.avatar__media}`}>
              <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
              <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
              <img src='https://i.pravatar.cc/300' alt='random profile' />
            </picture>
            <div  className={`${style.avatar__content}`}>
              <div  className={`${style.avatar__title}`}>Camila Willians </div>
              <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content Writer</span> </div>
            </div>
          </div>
      </li>
      <li className='menu__divider'></li>
      <li className="menu__item" data-state="" tabIndex={2}> 
        <div data-avatar=""  className={`${style.avatar} ${style.md}`}>
            <picture  className={`${style.avatar__media}`}>
              <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
              <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
              <img src='https://i.pravatar.cc/300' alt='random profile' />
            </picture>
            <div  className={`${style.avatar__content}`}>
            <div  className={`${style.avatar__title}`}>Camila Willians </div>
              <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content Writer</span> </div>
            </div>
          </div>
      </li>
      <li className='menu__divider'></li>
      <li className="menu__item" data-state="" tabIndex={3}>
        <div data-avatar="" className={`${style.avatar} ${style.lg}`}>
            <picture  className={`${style.avatar__media}`}>
              <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
              <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
              <img src='https://i.pravatar.cc/300' alt='random profile' />
            </picture>
            <div  className={`${style.avatar__content}`}>
            <div  className={`${style.avatar__title}`}>Camila Willians </div>
              <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content Writer</span> </div>
            </div>
          </div>
      </li>
      <li className='menu__divider'></li>
      <li className="menu__item" data-state="" tabIndex={4}>
        <div data-avatar="" className={`${style.avatar} ${style.xl}`}>
            <picture  className={`${style.avatar__media}`}>
              <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
              <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
              <img src='https://i.pravatar.cc/300' alt='random profile' />
            </picture>
            <div  className={`${style.avatar__content}`}>
            <div  className={`${style.avatar__title}`}>Camila Willians </div>
              <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content Writer</span> </div>
            </div>
          </div>
      </li>

      <li className="menu__item" data-state="" tabIndex={1}> 
        <div data-avatar="sm" className={`${style.avatar} ${style.sm}`}>
            
            <div  className={`${style.avatar__content}`}>
              <div  className={`${style.avatar__title}`}>Camila Willians </div>
              <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content Writer</span> </div>
            </div>
          </div>
      </li>
      <li className='menu__divider'></li>
      <li className="menu__item" data-state="" tabIndex={2}> 
        <div data-avatar="md"  className={`${style.avatar} ${style.md}`}>
            
            <div  className={`${style.avatar__content}`}>
            <div  className={`${style.avatar__title}`}>Camila Willians </div>
              <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content Writer</span> </div>
            </div>
          </div>
      </li>
      <li className='menu__divider'></li>
      <li className="menu__item" data-state="" tabIndex={3}>
        <div data-avatar="lg" className={`${style.avatar} ${style.lg}`}>
            
            <div  className={`${style.avatar__content}`}>
            <div  className={`${style.avatar__title}`}>Camila Willians </div>
              <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content Writer</span> </div>
            </div>
          </div>
      </li>
      <li className='menu__divider'></li>
      <li className="menu__item" data-state="" tabIndex={4}>
        <div data-avatar="xl" className={`${style.avatar} ${style.xl}`}>
            <div  className={`${style.avatar__content}`}>
            <div  className={`${style.avatar__title}`}>Camila Willians </div>
              <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content Writer</span> </div>
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