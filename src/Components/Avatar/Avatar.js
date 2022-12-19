import React from 'react';
import './avatar.scss';

function Avatar() {
  return (
    <section className=''>
      <section className='grid grid-cols-2 border-b border-b-neutral-400 py-5'>
        <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar with Name</h1>
          <div className='cluster'>
            <div data-avatar="sm" class="avatar sm">
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div data-avatar="md" class="avatar md">
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div data-avatar="lg" class="avatar lg">
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div data-avatar="xl" class="avatar xl">
              <div className='avatar-title'>Avatar Name</div>
            </div>
          </div>
        </div>
        <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar Round</h1>
          <div className='cluster'>
            <div data-avatar="xl" class="avatar xl round">
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div data-avatar="lg" class="avatar lg round">
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div data-avatar="md" class="avatar md round">
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div data-avatar="sm" class="avatar sm round">
              <div className='avatar-title'>Avatar Name</div>
            </div>
          </div>

        </div>
      </section>
      <section className='grid grid-cols-2 border-b border-b-neutral-400 py-5'>
        <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar with Content</h1>
          <div className='cluster'>
            <div data-avatar="sm" class="avatar sm">
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div data-avatar="md" class="avatar md">
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div data-avatar="lg" class="avatar lg">
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div data-avatar="xl" class="avatar xl">
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
            <div data-avatar="xl" class="avatar xl round">
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div data-avatar="lg" class="avatar lg round">
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div data-avatar="md" class="avatar md round">
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div data-avatar="sm" class="avatar sm round">
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
            <div data-avatar="sm" class="avatar sm">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div data-avatar="md" class="avatar md">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div data-avatar="lg" class="avatar lg">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div data-avatar="xl" class="avatar xl">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
              <div className='avatar-title'>Avatar Name</div>
            </div>
          </div>
        </div>
        {/* stack */}
        <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar with Pic round</h1>
          <div className='cluster'>
            <div data-avatar="xl" class="avatar xl round">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div data-avatar="lg" class="avatar lg round">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div data-avatar="md" class="avatar md round">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
              <div className='avatar-title'>Avatar Name</div>
            </div>
            <div data-avatar="sm" class="avatar sm round">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
              <div className='avatar-title'>Avatar Name</div>
            </div>
          </div>
        </div>
      </section>


      <section className='grid grid-cols-2 border-b border-b-neutral-400 py-5'>
        <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar with Content</h1>
          <div className='cluster'>
            <div data-avatar="sm" class="avatar sm">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div data-avatar="md" class="avatar md">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div data-avatar="lg" class="avatar lg">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div data-avatar="xl" class="avatar xl">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
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
            <div data-avatar="xl" class="avatar xl round">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div data-avatar="lg" class="avatar lg round">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div data-avatar="md" class="avatar md round">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
              <div className='avatar-content'>
                <h3 className='avatar-title'>Avatar Name </h3>
                <div className='avatar-desc separated bullet'><span>Category</span> <span>Content</span> </div>
              </div>
            </div>
            <div data-avatar="sm" class="avatar sm round">
              <picture className='avatar-media'>
                <source media="(min-width:650px)" srcset="https://i.pravatar.cc/300" />
                <source media="(min-width:465px)" srcset="https://i.pravatar.cc/300" />
                <img src='https://i.pravatar.cc/300' alt='random profile' />
              </picture>
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