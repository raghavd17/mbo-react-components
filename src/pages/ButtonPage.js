import React from 'react';
import IconSearch from "./../Icons/IconSearch"
import Button from '../Components/Button/Button';

// import './Button.scss';

const ButtonPage = () => {
  
  return (
    <section className='p-6'>
        
        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Default</h1>
            <div className='cluster items-center'>
                <Button>Button</Button>
                <Button><IconSearch className="icon" /> Icon Before</Button>
                <Button>Icon After <IconSearch className="icon" /></Button>
                <Button active>Active</Button>
                <Button disabled>Disabled</Button>
                
                <Button round icon><IconSearch className="icon" /></Button>

            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Sizes </h1>
            <div className='cluster items-center'>
               
                <Button size="sm">sm</Button>
                <Button size="md">md</Button>
                <Button size="lg">lg</Button>
                <Button size="xl">xl</Button>
                <Button icon size="xl"><IconSearch className="icon" /></Button>
                <Button icon size="lg"><IconSearch className="icon" /></Button>
                <Button icon size="md"><IconSearch className="icon" /></Button>
                <Button icon size="sm"><IconSearch className="icon" /></Button>
                
                
                
            </div>
          </div>
        </section>
        
{/* Button Default end  */}
        
        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Success</h1>
            <div className='cluster items-center'>
                <Button type="success">Button</Button>
                <Button type="success"><IconSearch className="icon" /> Icon Before </Button>
                <Button type="success">Icon After <IconSearch className="icon" /></Button>
                <Button type="success" active>Active</Button>
                <Button type="success" disabled>Disabled</Button>
                
                <Button type="success" round icon><IconSearch className="icon" /></Button>
    
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Success Sizes </h1>
            <div className='cluster items-center'>
                <Button type="success" size="sm">sm</Button>
                <Button type="success" size="md">md</Button>
                <Button type="success" size="lg">lg</Button>
                <Button type="success" size="xl">xl</Button>
                <Button type="success" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="success" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="success" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="success" icon size="sm"><IconSearch className="icon" /></Button>
                
                
            </div>
          </div>
        </section>
        
        {/* Button Success end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button warning</h1>
            <div className='cluster items-center'>
                <Button type="warning">Button</Button>
                <Button type="warning"><IconSearch className="icon" /> Icon Before </Button>
                <Button type="warning">Icon After <IconSearch className="icon" /></Button>
                <Button type="warning" active>Active</Button>
                <Button type="warning" disabled>Disabled</Button>
                
                <Button type="warning" round icon><IconSearch className="icon" /></Button>
            
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button warning Sizes </h1>
            <div className='cluster items-center'>
                <Button type="warning" size="sm">sm</Button>
                <Button type="warning" size="md">md</Button>
                <Button type="warning" size="lg">lg</Button>
                <Button type="warning" size="xl">xl</Button>
                <Button type="warning" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="warning" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="warning" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="warning" icon size="sm"><IconSearch className="icon" /></Button>
                
                
             
            </div>
          </div>
        </section>
        
        {/* Button Warning end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Danger</h1>
            <div className='cluster items-center'>
                 <Button type="danger">Button</Button>
                <Button type="danger"><IconSearch className="icon" /> Icon Before </Button>
                <Button type="danger">Icon After <IconSearch className="icon" /></Button>
                <Button type="danger" active>Active</Button>
                <Button type="danger" disabled>Disabled</Button>
                
                <Button type="danger" round icon><IconSearch className="icon" /></Button>
              
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Danger Sizes </h1>
            <div className='cluster items-center'>
                <Button type="danger" size="sm">sm</Button>
                <Button type="danger" size="md">md</Button>
                <Button type="danger" size="lg">lg</Button>
                <Button type="danger" size="xl">xl</Button>
                <Button type="danger" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="danger" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="danger" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="danger" icon size="sm"><IconSearch className="icon" /></Button>
                
                
                
            </div>
          </div>
        </section>
        
        {/* Button Danger end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link</h1>
            <div className='cluster items-center'>
                <Button type="link">Button</Button>
                <Button type="link"><IconSearch className="icon" /> Icon Before </Button>
                <Button type="link">Icon After <IconSearch className="icon" /></Button>
                <Button type="link" active>Active</Button>
                <Button type="link" disabled>Disabled</Button>
                <Button type="link" round icon><IconSearch className="icon" /></Button>
                
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Sizes </h1>
            <div className='cluster items-center'>
                <Button type="link" size="sm">sm</Button>
                <Button type="link" size="md">md</Button>
                <Button type="link" size="lg">lg</Button>
                <Button type="link" size="xl">xl</Button>
                <Button type="link" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="link" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="link" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="link" icon size="sm"><IconSearch className="icon" /></Button>
                
                
                
            </div>
          </div>
        </section>
        
        {/* Button Link end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Success</h1>
            <div className='cluster items-center'>
                <Button type="link-success">Button</Button>
                <Button type="link-success"><IconSearch className="icon" /> Icon Before </Button>
                <Button type="link-success">Icon After <IconSearch className="icon" /></Button>
                <Button type="link-success" active>Active</Button>
                <Button type="link-success" disabled>Disabled</Button>
                <Button type="link-success" round icon><IconSearch className="icon" /></Button>
               
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Success Sizes </h1>
            <div className='cluster items-center'>
                <Button type="link-success" size="sm">sm</Button>
                <Button type="link-success" size="md">md</Button>
                <Button type="link-success" size="lg">lg</Button>
                <Button type="link-success" size="xl">xl</Button>
                <Button type="link-success" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="link-success" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="link-success" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="link-success" icon size="sm"><IconSearch className="icon" /></Button>
                
                
                
            </div>
          </div>
        </section>
        
        {/* Button Link Success end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Warning</h1>
            <div className='cluster items-center'>
                <Button type="link-warning">Button</Button>
                <Button type="link-warning"><IconSearch className="icon" /> Icon Before </Button>
                <Button type="link-warning">Icon After <IconSearch className="icon" /></Button>
                <Button type="link-warning" active>Active</Button>
                <Button type="link-warning" disabled>Disabled</Button>
                <Button type="link-warning" round icon><IconSearch className="icon" /></Button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Warning Sizes </h1>
            <div className='cluster items-center'>
                <Button type="link-warning" size="sm">sm</Button>
                <Button type="link-warning" size="md">md</Button>
                <Button type="link-warning" size="lg">lg</Button>
                <Button type="link-warning" size="xl">xl</Button>
                <Button type="link-warning" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="link-warning" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="link-warning" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="link-warning" icon size="sm"><IconSearch className="icon" /></Button>
                
                
            </div>
          </div>
        </section>
        
        {/* Button Link Warning end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Danger</h1>
            <div className='cluster items-center'>
                <Button type="link-danger">Button</Button>
                <Button type="link-danger"><IconSearch className="icon" /> Icon Before </Button>
                <Button type="link-danger">Icon After <IconSearch className="icon" /></Button>
                <Button type="link-danger" active>Active</Button>
                <Button type="link-danger" disabled>Disabled</Button>
                <Button type="link-danger" round icon><IconSearch className="icon" /></Button>

            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Danger Sizes </h1>
            <div className='cluster items-center'>

                <Button type="link-danger" size="sm">sm</Button>
                <Button type="link-danger" size="md">md</Button>
                <Button type="link-danger" size="lg">lg</Button>
                <Button type="link-danger" size="xl">xl</Button>
                <Button type="link-danger" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="link-danger" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="link-danger" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="link-danger" icon size="sm"><IconSearch className="icon" /></Button>
                
                
                
            </div>
          </div>
        </section>
        
        {/* Button Link Danger end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Round Primary</h1>
            <div className='cluster items-center'>
                <Button type="primary" round>Button</Button>
                <Button type="primary" round><IconSearch className="icon" /> Icon Before</Button>
                <Button type="primary" round>Icon After <IconSearch className="icon" /></Button>
                <Button type="primary" round active>Active</Button>
                <Button type="primary" round disabled>Active</Button>
                <Button type="primary" round icon><IconSearch className="icon" /></Button>
    
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Primary Button Sizes </h1>
            <div className='cluster items-center'>
                <Button type="primary" round size="sm">sm</Button>
                <Button type="primary" round size="md">md</Button>
                <Button type="primary" round size="lg">lg</Button>
                <Button type="primary" round size="xl">xl</Button>
                <Button type="primary" round icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="primary" round icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="primary" round icon size="md"><IconSearch className="icon" /></Button>
                <Button type="primary" round icon size="sm"><IconSearch className="icon" /></Button>
                
                
            </div>
          </div>
        </section>
        {/* Primary Buttons Round end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Primary</h1>
            <div className='cluster items-center'>
                 <Button type="primary">Button</Button>
                <Button type="primary"><IconSearch className="icon" /> Icon Before</Button>
                <Button type="primary">Icon After <IconSearch className="icon" /></Button>
                <Button type="primary" active>Active</Button>
                <Button type="primary" disabled>Disabled</Button>
                <Button type="primary" round icon><IconSearch className="icon" /></Button>
                
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Primary Button Sizes </h1>
            <div className='cluster items-center'>
                <Button type="primary"  size="sm">sm</Button>
                <Button type="primary" size="md">md</Button>
                <Button type="primary" size="lg">lg</Button>
                <Button type="primary" size="xl">xl</Button>
                <Button type="primary" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="primary" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="primary" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="primary" icon size="sm"><IconSearch className="icon" /></Button>
                
                
                
            
            </div>
          </div>
        </section>
        {/* Primary Buttons end  */}
        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Action</h1>
            <div className='cluster items-center'>
                <Button type="action" >Button</Button>
                <Button type="action"><IconSearch className="icon" /> Icon Before</Button>
                <Button type="action">Icon After <IconSearch className="icon" /></Button>
                <Button type="action" active>Active</Button>
                <Button type="action" disabled>Disabled</Button>
                <Button type="action" round icon><IconSearch className="icon" /></Button>
               
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Button Sizes </h1>
            <div className='cluster items-center'>

                <Button type="action"  size="sm">sm</Button>
                <Button type="action" size="md">md</Button>
                <Button type="action" size="lg">lg</Button>
                <Button type="action" size="xl">xl</Button>
                <Button type="action" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="action" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="action" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="action" icon size="sm"><IconSearch className="icon" /></Button>
                
                
            </div>
          </div>
        </section>
        {/* Action Buttons end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack  divide-slate-600'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Success Button</h1>
            <div className='cluster items-center'>
                <Button type="action-success" >Button</Button>
                <Button type="action-success"><IconSearch className="icon" /> Icon Before</Button>
                <Button type="action-success">Icon After <IconSearch className="icon" /></Button>
                <Button type="action-success" active>Active</Button>
                <Button type="action-success" disabled>Disabled</Button>
                
                <Button type="action-success" round icon><IconSearch className="icon" /></Button>

                
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Success Button Sizes </h1>
            <div className='cluster items-center'>
                <Button type="action-success"  size="sm">sm</Button>
                <Button type="action-success" size="md">md</Button>
                <Button type="action-success" size="lg">lg</Button>
                <Button type="action-success" size="xl">xl</Button>
                <Button type="action-success" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="action-success" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="action-success" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="action-success" icon size="sm"><IconSearch className="icon" /></Button>
                
                

               
            </div>
          </div>
        </section>
        {/* Action Success Buttons end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Action Warning</h1>
            <div className='cluster items-center'>
                <Button type="action-warning">Button</Button>
                <Button type="action-warning"><IconSearch className="icon" /> Icon Before</Button>
                <Button type="action-warning">Icon After <IconSearch className="icon" /></Button>
                <Button type="action-warning" active>Active</Button>
                <Button type="action-warning" disabled>Disabled</Button>
                <Button type="action-warning" round icon><IconSearch className="icon" /></Button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Warning Button Sizes </h1>
            <div className='cluster items-center'>
                 <Button type="action-warning" size="sm">sm</Button>
                <Button type="action-warning" size="md">md</Button>
                <Button type="action-warning" size="lg">lg</Button>
                <Button type="action-warning" size="xl">xl</Button>
                <Button type="action-warning" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="action-warning" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="action-warning" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="action-warning" icon size="sm"><IconSearch className="icon" /></Button>
                
                
            </div>
          </div>
        </section>
        {/* Action Warning Buttons end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Danger</h1>
            <div className='cluster items-center'>
                <Button type="action-danger">Button</Button>
                <Button type="action-danger"><IconSearch className="icon" /> Icon Before</Button>
                <Button type="action-danger">Icon After <IconSearch className="icon" /></Button>
                <Button type="action-danger" active>Active</Button>
                <Button type="action-danger" disabled>Disabled</Button>
                <Button type="action-danger" round icon><IconSearch className="icon" /></Button>

               
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Danger Button Sizes </h1>
            <div className='cluster items-center'>

                 <Button type="action-danger" size="sm">sm</Button>
                <Button type="action-danger" size="md">md</Button>
                <Button type="action-danger" size="lg">lg</Button>
                <Button type="action-danger" size="xl">xl</Button>
                <Button type="action-danger" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="action-danger" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="action-danger" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="action-danger" icon size="sm"><IconSearch className="icon" /></Button>
            
            </div>
          </div>
        </section>
        {/* Action Danger Buttons end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Group</h1>
            <div class="cluster">
            <div className='btn-group' role="group">
                <Button type="primary">Button </Button>
                <Button type="primary">Button </Button>
                <Button type="primary">Button </Button>
                <Button type="primary">Button </Button>

            </div>
            </div>
          </div>
          <div>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Group Size & Round  </h1>
            <div className='stack'>
            <div className='cluster'>
              <div className='btn-group sm' role="group">
                  <Button type="primary"> sm</Button>
                  <Button type="primary"> sm</Button>
                  <Button type="primary"> sm</Button>
              </div>
              <div className='btn-group md' role="group">
                  <Button type="primary"> md</Button>
                  <Button type="primary"> md</Button>
                  <Button type="primary"> md</Button>
              </div>
              <div className='btn-group lg' role="group">
                  <Button type="primary"> lg</Button>
                  <Button type="primary"> lg</Button>
                  <Button type="primary"> lg</Button>
              </div>
              <div className='btn-group xl' role="group">
                  <Button type="primary"> xl</Button>
                  <Button type="primary"> xl</Button>
                  <Button type="primary"> xl</Button>
              </div>
            </div>
            <div className='cluster'>
              <div className='btn-group round sm' role="group">
                  <Button type="primary"> sm</Button>
                  <Button type="primary"> sm</Button>
                  <Button type="primary"> sm</Button>
              </div>
              <div className='btn-group round md' role="group">
                  <Button type="primary"> md</Button>
                  <Button type="primary"> md</Button>
                  <Button type="primary"> md</Button>
              </div>
              <div className='btn-group round lg' role="group">
                  <Button type="primary"> lg</Button>
                  <Button type="primary"> lg</Button>
                  <Button type="primary"> lg</Button>
              </div>
              <div className='btn-group round xl' role="group">
                  <Button type="primary"> xl</Button>
                  <Button type="primary"> xl</Button>
                  <Button type="primary"> xl</Button>
              </div>
            </div>
            </div>
          </div>
        
        </section>
        {/* Group Buttons end  */}
        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Group With Icon</h1>
            <div className='btn-group' role="group">
                <Button type="primary" icon><IconSearch className="icon" /></Button>    
                <Button type="primary">Button Left</Button>
                <Button type="primary">Button Center</Button>
                <Button type="primary">Button Right</Button>
                <Button type="primary" icon><IconSearch className="icon" /></Button>    
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Group Size Round with Icon </h1>
            <div className='cluster'>
              <div className='btn-group sm' role="group">
                  <Button type="primary" icon split><IconSearch className="icon" /></Button> 
                  <Button type="primary"> sm</Button>
                  <Button type="primary" icon split><IconSearch className="icon" /></Button>
              </div>
              <div className='btn-group md' role="group">
                  <Button type="primary" icon split><IconSearch className="icon" /></Button> 
                  <Button type="primary"> md</Button>
                  <Button type="primary" icon split><IconSearch className="icon" /></Button>
              </div>
              <div className='btn-group lg' role="group">
                  <Button type="primary" icon split><IconSearch className="icon" /></Button> 
                  <Button type="primary"> lg</Button>
                  <Button type="primary" icon split><IconSearch className="icon" /></Button>
              </div>
              <div className='btn-group xl' role="group">
                  <Button type="primary" icon split><IconSearch className="icon" /></Button> 
                  <Button type="primary"> xl</Button>
                  <Button type="primary" icon split><IconSearch className="icon" /></Button>
              </div>
            </div>
            <div className='cluster'>
              <div className='btn-group round sm' role="group">
                  <Button type="primary" icon split><IconSearch className="icon" /></Button> 
                  <Button type="primary"> sm</Button>
                  <Button type="primary" icon split><IconSearch className="icon" /></Button>
              </div>
              <div className='btn-group round md' role="group">
                  <Button type="primary" icon split><IconSearch className="icon" /></Button> 
                  <Button type="primary"> md</Button>
                  <Button type="primary" icon split><IconSearch className="icon" /></Button>
              </div>
              <div className='btn-group round lg' role="group">
                  <Button type="primary" icon split><IconSearch className="icon" /></Button> 
                  <Button type="primary"> lg</Button>
                  <Button type="primary" icon split><IconSearch className="icon" /></Button>
              </div>
              <div className='btn-group round xl' role="group">
                  <Button type="primary" icon split><IconSearch className="icon" /></Button> 
                  <Button type="primary"> xl</Button>
                  <Button type="primary" icon split><IconSearch className="icon" /></Button>
              </div>
            </div>
          </div>
        
        </section>
        {/* Group Buttons end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Group With Split</h1>
            <div className='stack'>
            <div className='cluster'>
              <div className='btn-group' role="group">
                <Button type="primary" icon split><IconSearch className="icon" /></Button> 
                <Button type="primary">Button Split</Button>       
              </div>
              <div className='btn-group' role="group">
                  <Button type="primary">Button Split</Button>       
                  <Button type="primary" icon split><IconSearch className="icon" /></Button>    
              </div>
            </div>
            </div>
          </div>
          <div>
          
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Group Size & Round Split </h1>
            <div className='stack'>
            <div className='cluster'>
              <div className='btn-group sm' role="group">
                <Button type="primary" icon split><IconSearch className="icon" /></Button> 
                <Button type="primary">Button Split</Button>       
              </div>
              <div className='btn-group md' role="group">
                  <Button type="primary" icon split><IconSearch className="icon" /></Button>
                  <Button type="primary">Button Split</Button>
              </div>
              <div className='btn-group lg' role="group">
                  <Button type="primary" icon split><IconSearch className="icon" /></Button>        
                  <Button type="primary">Button Split</Button>
              </div>
              <div className='btn-group xl' role="group">
              <Button type="primary" icon split><IconSearch className="icon" /></Button>        
              <Button type="primary">Button Split</Button>    
              </div>
            </div>
            <div className='cluster'>
              <div className='btn-group round sm' role="group">
                <Button type="primary">Button Split</Button>
                <Button type="primary" icon split><IconSearch className="icon" /></Button> 
              </div>
              <div className='btn-group round md' role="group">
                  <Button type="primary">Button Split</Button>
                  <Button type="primary" icon split><IconSearch className="icon" /></Button>        
              </div>
              <div className='btn-group round lg' role="group">
                  <Button type="primary">Button Split</Button>
                  <Button type="primary" icon split><IconSearch className="icon" /></Button>        
              </div>
              <div className='btn-group round xl' role="group">
                  <Button type="primary">Button Split</Button>
                  <Button type="primary" icon split><IconSearch className="icon" /></Button>        
              </div>
            </div>
            
            </div>
          </div>
        
        </section>
        {/* Group Buttons end  */}
        
        

    </section>
      )
    }
    
    export default ButtonPage;