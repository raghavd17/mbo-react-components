import React from 'react';
import IconSearch from "./../Icons/IconSearch"
import Button from '../Components/Button/Button';

// import './Button.scss';

const ButtonPage = () => {
  
  return (
    <section className='p-6'>
        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Default</h4>
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
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Sizes </h4>
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
        <section className='grid grid-cols-2 border-b-neutrals-900 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Alpha</h4>
            <div className='cluster items-center'>
                <Button type="alpha">Button</Button>
                <Button type="alpha"><IconSearch className="icon" /> Icon Before</Button>
                <Button type="alpha">Icon After <IconSearch className="icon" /></Button>
                <Button type="alpha" active>Active</Button>
                <Button type="alpha" disabled>Disabled</Button>
                
                <Button type="alpha" round icon><IconSearch className="icon" /></Button>

            </div>
          </div>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Alpha Sizes </h4>
            <div className='cluster items-center'>
               
                <Button type="alpha" size="sm">sm</Button>
                <Button type="alpha" size="md">md</Button>
                <Button type="alpha" size="lg">lg</Button>
                <Button type="alpha" size="xl">xl</Button>
                <Button type="alpha" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="alpha" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="alpha" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="alpha" icon size="sm"><IconSearch className="icon" /></Button>
                
                
                
            </div>
          </div>
        </section>
        
{/* Button Alpha end  */}
        
        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Success</h4>
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
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Success Sizes </h4>
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

        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Warning</h4>
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
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Warning Sizes </h4>
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

        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Danger</h4>
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
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Danger Sizes </h4>
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

        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Link</h4>
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
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Link Sizes </h4>
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

        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Link Success</h4>
            <div className='cluster items-center'>
                <Button type="link link-success">Button</Button>
                <Button type="link link-success"><IconSearch className="icon" /> Icon Before </Button>
                <Button type="link link-success">Icon After <IconSearch className="icon" /></Button>
                <Button type="link link-success" active>Active</Button>
                <Button type="link link-success" disabled>Disabled</Button>
                <Button type="link link-success" round icon><IconSearch className="icon" /></Button>
               
            </div>
          </div>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Link Success Sizes </h4>
            <div className='cluster items-center'>
                <Button type="link link-success" size="sm">sm</Button>
                <Button type="link link-success" size="md">md</Button>
                <Button type="link link-success" size="lg">lg</Button>
                <Button type="link link-success" size="xl">xl</Button>
                <Button type="link link-success" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="link link-success" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="link link-success" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="link link-success" icon size="sm"><IconSearch className="icon" /></Button>
                
                
                
            </div>
          </div>
        </section>
        
        {/* Button Link Success end  */}

        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Link Warning</h4>
            <div className='cluster items-center'>
                <Button type="link link-warning">Button</Button>
                <Button type="link link-warning"><IconSearch className="icon" /> Icon Before </Button>
                <Button type="link link-warning">Icon After <IconSearch className="icon" /></Button>
                <Button type="link link-warning" active>Active</Button>
                <Button type="link link-warning" disabled>Disabled</Button>
                <Button type="link link-warning" round icon><IconSearch className="icon" /></Button>
            </div>
          </div>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Link Warning Sizes </h4>
            <div className='cluster items-center'>
                <Button type="link link-warning" size="sm">sm</Button>
                <Button type="link link-warning" size="md">md</Button>
                <Button type="link link-warning" size="lg">lg</Button>
                <Button type="link link-warning" size="xl">xl</Button>
                <Button type="link link-warning" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="link link-warning" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="link link-warning" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="link link-warning" icon size="sm"><IconSearch className="icon" /></Button>
                
                
            </div>
          </div>
        </section>
        
        {/* Button Link Warning end  */}

        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Link Danger</h4>
            <div className='cluster items-center'>
                <Button type="link link-danger">Button</Button>
                <Button type="link link-danger"><IconSearch className="icon" /> Icon Before </Button>
                <Button type="link link-danger">Icon After <IconSearch className="icon" /></Button>
                <Button type="link link-danger" active>Active</Button>
                <Button type="link link-danger" disabled>Disabled</Button>
                <Button type="link link-danger" round icon><IconSearch className="icon" /></Button>

            </div>
          </div>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Link Danger Sizes </h4>
            <div className='cluster items-center'>

                <Button type="link link-danger" size="sm">sm</Button>
                <Button type="link link-danger" size="md">md</Button>
                <Button type="link link-danger" size="lg">lg</Button>
                <Button type="link link-danger" size="xl">xl</Button>
                <Button type="link link-danger" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="link link-danger" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="link link-danger" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="link link-danger" icon size="sm"><IconSearch className="icon" /></Button>
                
                
                
            </div>
          </div>
        </section>
        
        {/* Button Link Danger end  */}

        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Round Primary</h4>
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
            <h4 className='text-2xl text-neutrals-800 mb-20'>Primary Button Sizes </h4>
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

        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Primary</h4>
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
            <h4 className='text-2xl text-neutrals-800 mb-20'>Primary Button Sizes </h4>
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
        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Action</h4>
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
            <h4 className='text-2xl text-neutrals-800 mb-20'>Action Button Sizes </h4>
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

        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack  divide-slate-600'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Action Success Button</h4>
            <div className='cluster items-center'>
                <Button type="action action-success" >Button</Button>
                <Button type="action action-success"><IconSearch className="icon" /> Icon Before</Button>
                <Button type="action action-success">Icon After <IconSearch className="icon" /></Button>
                <Button type="action action-success" active>Active</Button>
                <Button type="action action-success" disabled>Disabled</Button>
                
                <Button type="action action-success" round icon><IconSearch className="icon" /></Button>

                
            </div>
          </div>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Action Success Button Sizes </h4>
            <div className='cluster items-center'>
                <Button type="action action-success"  size="sm">sm</Button>
                <Button type="action action-success" size="md">md</Button>
                <Button type="action action-success" size="lg">lg</Button>
                <Button type="action action-success" size="xl">xl</Button>
                <Button type="action action-success" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="action action-success" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="action action-success" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="action action-success" icon size="sm"><IconSearch className="icon" /></Button>
                
                

               
            </div>
          </div>
        </section>
        {/* Action Success Buttons end  */}

        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Action Warning</h4>
            <div className='cluster items-center'>
                <Button type="action action-warning">Button</Button>
                <Button type="action action-warning"><IconSearch className="icon" /> Icon Before</Button>
                <Button type="action action-warning">Icon After <IconSearch className="icon" /></Button>
                <Button type="action action-warning" active>Active</Button>
                <Button type="action action-warning" disabled>Disabled</Button>
                <Button type="action action-warning" round icon><IconSearch className="icon" /></Button>
            </div>
          </div>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Action Warning Button Sizes </h4>
            <div className='cluster items-center'>
                 <Button type="action action-warning" size="sm">sm</Button>
                <Button type="action action-warning" size="md">md</Button>
                <Button type="action action-warning" size="lg">lg</Button>
                <Button type="action action-warning" size="xl">xl</Button>
                <Button type="action action-warning" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="action action-warning" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="action action-warning" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="action action-warning" icon size="sm"><IconSearch className="icon" /></Button>
                
                
            </div>
          </div>
        </section>
        {/* Action Warning Buttons end  */}

        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Action Danger</h4>
            <div className='cluster items-center'>
                <Button type="action action-danger">Button</Button>
                <Button type="action action-danger"><IconSearch className="icon" /> Icon Before</Button>
                <Button type="action action-danger">Icon After <IconSearch className="icon" /></Button>
                <Button type="action action-danger" active>Active</Button>
                <Button type="action action-danger" disabled>Disabled</Button>
                <Button type="action action-danger" round icon><IconSearch className="icon" /></Button>

               
            </div>
          </div>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Action Danger Button Sizes </h4>
            <div className='cluster items-center'>

                 <Button type="action action-danger" size="sm">sm</Button>
                <Button type="action action-danger" size="md">md</Button>
                <Button type="action action-danger" size="lg">lg</Button>
                <Button type="action action-danger" size="xl">xl</Button>
                <Button type="action action-danger" icon size="xl"><IconSearch className="icon" /></Button>
                <Button type="action action-danger" icon size="lg"><IconSearch className="icon" /></Button>
                <Button type="action action-danger" icon size="md"><IconSearch className="icon" /></Button>
                <Button type="action action-danger" icon size="sm"><IconSearch className="icon" /></Button>
            
            </div>
          </div>
        </section>
        {/* Action Danger Buttons end  */}

        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Group</h4>
            <div className="cluster">
            <div className='btn-group' role="group">
                <Button type="primary">Button </Button>
                <Button type="primary">Button </Button>
                <Button type="primary">Button </Button>
                <Button type="primary">Button </Button>

            </div>
            </div>
          </div>
          <div>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Group Size & Round  </h4>
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
        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Group With Icon</h4>
            <div className='btn-group' role="group">
                <Button type="primary" icon><IconSearch className="icon" /></Button>    
                <Button type="primary">Button Left</Button>
                <Button type="primary">Button Center</Button>
                <Button type="primary">Button Right</Button>
                <Button type="primary" icon><IconSearch className="icon" /></Button>    
            </div>
          </div>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Group Size Round with Icon </h4>
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

        <section className='grid grid-cols-2 border-b-neutrals-400 py-48'>
          <div className='stack'>
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Group With Split</h4>
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
          
            <h4 className='text-2xl text-neutrals-800 mb-20'>Button Group Size & Round Split </h4>
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