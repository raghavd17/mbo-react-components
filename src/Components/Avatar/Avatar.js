import React from 'react';
import style from './_avatar.module.scss';

function Avatar() {
  return (
    // className={`${style.TeaList} grid`}
    <section className=''>
      <section className='grid grid-cols-2 border-b border-b-neutral-400 py-5'>
        <div className='stack'>
          <div className='text-2xl text-neutral-800 mb-32'>Avatar with Name</div>
          <div className='cluster'>
            <div className={`${style.avatar} ${style.sm} ${style.offline}`}>
              <div className={`${style.avatar__media}`} data-indicator="online" data-avatar="sm" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Testing sm </div>
              </div>
            </div>

            <div className={`${style.avatar} ${style.md} ${style.offline}`}>
              <div className={`${style.avatar__media}`} data-indicator="offline" data-avatar="md" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name</div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.lg} ${style.away}`}>
              <div className={`${style.avatar__media}`} data-indicator="away" data-avatar="lg" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name</div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.xl} ${style.busy}`}>
            
              <div className={`${style.avatar__media}`} data-indicator="busy" data-avatar="xl" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name</div>
              </div>
            </div>
          </div>
        </div>
        <div className='stack'>
          <div className='text-2xl text-neutral-800 mb-32'>Avatar Round</div>
          <div className='cluster'>
            <div className={`${style.avatar} ${style.sm} ${style.round} ${style.online}`}>
              <div className={`${style.avatar__media}`} data-indicator="online" data-avatar="sm" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name</div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.md} ${style.round} ${style.offline}`}>
              <div className={`${style.avatar__media}`} data-indicator="offline" data-avatar="md" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name</div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.lg} ${style.round} ${style.away}`}>
              <div className={`${style.avatar__media}`} data-indicator="away" data-avatar="lg" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name</div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.xl} ${style.round} ${style.busy}`}>
              <div className={`${style.avatar__media}`} data-indicator="busy" data-avatar="xl" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name</div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className='grid grid-cols-2 border-b border-b-neutral-400 py-40'>
        <div className='stack'>
          <div className='text-2xl text-neutral-800 mb-32'>Avatar with Content</div>
          <div className='cluster'>
            <div className={`${style.avatar} ${style.sm} ${style.online}`}>
              <div className={`${style.avatar__media}`} data-indicator="online" data-avatar="sm" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.md} ${style.offline}`}>
            <div className={`${style.avatar__media}`} data-indicator="offline" data-avatar="md" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.lg} ${style.away}`}>
            <div className={`${style.avatar__media}`} data-indicator="away" data-avatar="lg" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.xl} ${style.busy}`}>
            <div className={`${style.avatar__media}`} data-indicator="busy" data-avatar="xl" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
          </div>
        </div>
        {/* stack */}
        <div className='stack'>
          <div className='text-2xl text-neutral-800 mb-32'>Avatar with Pic round with Content</div>
          <div className='cluster'>
          <div className={`${style.avatar} ${style.sm} ${style.round}  ${style.online}`}>
              <div className={`${style.avatar__media}`} data-indicator="online" data-avatar="sm" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.md} ${style.round}  ${style.offline}`}>
            <div className={`${style.avatar__media}`} data-indicator="offline" data-avatar="md" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.lg} ${style.round}  ${style.away}`}>
            <div className={`${style.avatar__media}`} data-indicator="away" data-avatar="lg" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.xl} ${style.round}  ${style.busy}`}>
            <div className={`${style.avatar__media}`} data-indicator="busy" data-avatar="xl" >
              </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Avatr with text name and content  */}
      <section className='grid grid-cols-2 border-b border-b-neutral-400 py-40'>
        <div className='stack'>
          <div className='text-2xl text-neutral-800 mb-32'>Avatar with Pic</div>
          <div className='cluster'>
            <div className={`${style.avatar} ${style.sm} ${style.online}`}>
              <div className={`${style.avatar__media}`} data-indicator="online" data-avatar="sm" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              
              <div className={`${style.avatar__title}`}>Avatar Name</div>
            </div>
            <div className={`${style.avatar} ${style.md} ${style.offline}`}>
            <div className={`${style.avatar__media}`} data-indicator="offline" data-avatar="NA" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
            <div className={`${style.avatar__title}`}>Avatar Name</div>
            </div>
          
            <div className={`${style.avatar} ${style.lg} ${style.away}`}>
            <div className={`${style.avatar__media}`} data-indicator="away" data-avatar="lg" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className={`${style.avatar__title}`}>Avatar Name</div>
            </div>
            <div className={`${style.avatar} ${style.xl} ${style.busy}`}>
            <div className={`${style.avatar__media}`} data-indicator="busy" data-avatar="xl" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className={`${style.avatar__title}`}>Avatar Name</div>
            </div>
          </div>
        </div>
        {/* stack */}
        <div className='stack'>
          <div className='text-2xl text-neutral-800 mb-32'>Avatar with Pic round</div>
          <div className='cluster'>
            <div className={`${style.avatar} ${style.sm} ${style.round} ${style.online}`}>
              <div className={`${style.avatar__media}`} data-indicator="online" data-avatar="sm" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              
              <div className={`${style.avatar__title}`}>Avatar Name</div>
            </div>
            <div className={`${style.avatar} ${style.md} ${style.round} ${style.offline}`}>
            <div className={`${style.avatar__media}`} data-indicator="offline" data-avatar="NA" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className={`${style.avatar__title}`}>Avatar Name</div>
            </div>
            <div className={`${style.avatar} ${style.lg} ${style.round} ${style.away}`}>
            <div className={`${style.avatar__media}`} data-indicator="away" data-avatar="lg" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className={`${style.avatar__title}`}>Avatar Name</div>
            </div>
            <div className={`${style.avatar} ${style.xl} ${style.round} ${style.busy}`}>
            <div className={`${style.avatar__media}`} data-indicator="busy" data-avatar="xl" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className={`${style.avatar__title}`}>Avatar Name</div>
            </div>
          </div>
        </div>
      </section>


      <section className='grid grid-cols-2 border-b border-b-neutral-400 py-40'>
        <div className='stack'>
          <div className='text-2xl text-neutral-800 mb-32'>Avatar with Content</div>
          <div className='cluster'>
            <div className={`${style.avatar} ${style.sm}  ${style.online}`}>
            <div className={`${style.avatar__media}`} data-indicator="online" data-avatar="sm" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.md}  ${style.offline}`}>
            <div className={`${style.avatar__media}`} data-indicator="offline" data-avatar="md" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.lg}  ${style.away}`}>
            <div className={`${style.avatar__media}`} data-indicator="away" data-avatar="lg" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.xl}  ${style.busy}`}>
            <div className={`${style.avatar__media}`} data-indicator="busy" data-avatar="xl" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
          </div>
        </div>
        {/* stack */}
        <div className='stack'>
          <div className='text-2xl text-neutral-800 mb-32'>Avatar with Pic round with Content</div>
          <div className='cluster'>
            <div className={`${style.avatar} ${style.sm} ${style.round} ${style.online}`}>
            <div className={`${style.avatar__media}`} data-indicator="online" data-avatar="sm" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.md} ${style.round} ${style.offline}`}>
            <div className={`${style.avatar__media}`} data-indicator="offline" data-avatar="md" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.lg} ${style.round} ${style.away}`}>
            <div className={`${style.avatar__media}`} data-indicator="away" data-avatar="lg" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div className={`${style.avatar} ${style.xl} ${style.round} ${style.busy}`}>
            <div className={`${style.avatar__media}`} data-indicator="busy" data-avatar="xl" >
                <picture className={`${style.avatar__media}`}>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className={`${style.avatar__content}`}>
                <div className={`${style.avatar__title}`}>Avatar Name </div>
                <div className={`${style.avatar__desc} separated bullet`}><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </section>
  )
}

export default Avatar