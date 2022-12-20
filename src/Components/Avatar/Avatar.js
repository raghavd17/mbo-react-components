import React from 'react';
import './_avatar.scss';

function Avatar() {
  return (
    <section className=''>
      <section className='grid grid-cols-2 border-b border-b-neutral-400 py-5'>
        <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar with Name</h1>
          <div className='cluster'>
            <div class="avatar sm online">
              <div className='avatar-media ' data-indicator="online" data-avatar="sm" >
              </div>
              <div className='avatar-content'>
                <div className='avatar-title'>Avatar Name</div>
              </div>
            </div>
            <div class="avatar md offline">
              <div className='avatar-media ' data-indicator="offline" data-avatar="sm" >
              </div>
              <div className='avatar-content'>
                <div className='avatar-title'>Avatar Name</div>
              </div>
            </div>
            <div class="avatar lg away">
              <div className='avatar-media ' data-indicator="away" data-avatar="sm" >
              </div>
              <div className='avatar-content'>
                <div className='avatar-title'>Avatar Name</div>
              </div>
            </div>
            <div class="avatar xl busy">
              <div className='avatar-media ' data-indicator="busy" data-avatar="sm" >
              </div>
              <div className='avatar-content'>
                <div className='avatar-title'>Avatar Name</div>
              </div>
            </div>
          </div>
        </div>
        <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar Round</h1>
          <div className='cluster'>
            <div className="avatar sm round online">
              <div className='avatar-media ' data-indicator="online" data-avatar="sm" >
              </div>
              <div className='avatar-content'>
                <div className='avatar-title'>Avatar Name</div>
              </div>
            </div>
            <div className="avatar md round offline">
              <div className='avatar-media ' data-indicator="offline" data-avatar="sm" >
              </div>
              <div className='avatar-content'>
                <div className='avatar-title'>Avatar Name</div>
              </div>
            </div>
            <div className="avatar lg round away">
              <div className='avatar-media ' data-indicator="away" data-avatar="sm" >
              </div>
              <div className='avatar-content'>
                <div className='avatar-title'>Avatar Name</div>
              </div>
            </div>
            <div className="avatar xl round busy">
              <div className='avatar-media' data-indicator="busy" data-avatar="sm" >
              </div>
              <div className='avatar-content'>
                <div className='avatar-title'>Avatar Name</div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className='grid grid-cols-2 border-b border-b-neutral-400 py-5'>
        <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar with Content</h1>
          <div className='cluster'>
            <div class="avatar sm online">
              <div className='avatar-media' data-indicator="online" data-avatar="sm" >
              </div>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div class="avatar md offline">
            <div className='avatar-media' data-indicator="offline" data-avatar="md" >
              </div>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div class="avatar lg away">
            <div className='avatar-media' data-indicator="away" data-avatar="lg" >
              </div>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div class="avatar xl busy">
            <div className='avatar-media' data-indicator="busy" data-avatar="xl" >
              </div>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
          </div>
        </div>
        {/* stack */}
        <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar with Pic round with Content</h1>
          <div className='cluster'>
            <div class="avatar sm online round">
              <div className='avatar-media' data-indicator="online" data-avatar="sm" >
              </div>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div class="avatar md offline round">
            <div className='avatar-media' data-indicator="offline" data-avatar="md" >
              </div>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div class="avatar lg away round">
            <div className='avatar-media' data-indicator="away" data-avatar="lg" >
              </div>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div class="avatar xl busy round">
            <div className='avatar-media' data-indicator="busy" data-avatar="xl" >
              </div>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Avatr with text name and content  */}
      <section className='grid grid-cols-2 border-b border-b-neutral-400 py-5'>
        <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar with Pic</h1>
          <div className='cluster'>
            <div class="avatar sm online">
              <div className='avatar-media ' data-indicator="online" data-avatar="sm" >
                <picture className='avatar-media'>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div class="avatar md offline">
            <div className='avatar-media ' data-indicator="offline" data-avatar="NA" >
                <picture className='avatar-media'>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div  class="avatar lg away">
            <div className='avatar-media' data-indicator="away" data-avatar="lg" >
                <picture className='avatar-media'>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div class="avatar xl busy">
            <div className='avatar-media ' data-indicator="busy" data-avatar="xl" >
                <picture className='avatar-media'>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className='avatar-title'>Avatar Name</div>
            </div>
          </div>
        </div>
        {/* stack */}
        <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar with Pic round</h1>
          <div className='cluster'>
            <div class="avatar sm online round">
              <div className='avatar-media ' data-indicator="online" data-avatar="sm" >
                <picture className='avatar-media'>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div class="avatar md offline round">
            <div className='avatar-media ' data-indicator="offline" data-avatar="NA" >
                <picture className='avatar-media'>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div  class="avatar lg away round">
            <div className='avatar-media' data-indicator="away" data-avatar="lg" >
                <picture className='avatar-media'>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div class="avatar xl busy round">
            <div className='avatar-media ' data-indicator="busy" data-avatar="xl" >
                <picture className='avatar-media'>
                  <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                  <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                  <img src='https://i.pravatar.cc/300' alt='random profile' />
                </picture>
                </div>
              <div className='avatar-title'>Avatar Name</div>
            </div>
          </div>
        </div>
      </section>


      <section className='grid grid-cols-2 border-b border-b-neutral-400 py-5'>
        <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar with Content</h1>
          <div className='cluster'>
            <div class="avatar sm online">
            <div className='avatar-media' data-indicator="online" data-avatar="sm" >
                <picture className='avatar-media'>
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
            <div class="avatar md offline">
            <div className='avatar-media' data-indicator="offline" data-avatar="md" >
                <picture className='avatar-media'>
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
            <div class="avatar lg away">
            <div className='avatar-media' data-indicator="away" data-avatar="lg" >
                <picture className='avatar-media'>
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
            <div  class="avatar xl busy">
            <div className='avatar-media' data-indicator="busy" data-avatar="xl" >
                <picture className='avatar-media'>
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
          </div>
        </div>
        {/* stack */}
        <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar with Pic round with Content</h1>
          <div className='cluster'>
            <div class="avatar sm online round">
            <div className='avatar-media' data-indicator="online" data-avatar="sm" >
                <picture className='avatar-media'>
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
            <div class="avatar md offline round">
            <div className='avatar-media' data-indicator="offline" data-avatar="md" >
                <picture className='avatar-media'>
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
            <div class="avatar lg away round">
            <div className='avatar-media' data-indicator="away" data-avatar="lg" >
                <picture className='avatar-media'>
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
            <div  class="avatar xl busy round">
            <div className='avatar-media' data-indicator="busy" data-avatar="xl" >
                <picture className='avatar-media'>
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
          </div>
        </div>
      </section>

    </section>
  )
}

export default Avatar