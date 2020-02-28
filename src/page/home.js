import React, { useState } from 'react';
import Input from '../components/input';
import Span from '../components/span';
import Alert from '../components/alert';

const Home = ({flag, submit, handleChange, value}) => {

    return (
        <div className='home'>
            <div className="home-content l-padding">
              {flag.success ? 
              <div className='home-status success'>
                <Alert text='Sucessful' className='success'/> 
              </div>
              : ''}
              {flag.danger ?
                <div className='home-status danger'>
                  <Alert text='Cant submit if the input field is empty' className='danger'/> 
                </div> : ''
              }
              <form action="" onSubmit={submit}>
                <div className="home-content-input">
                  <Span text='Please input total amount:' classStyle='home-content-span'/>
                  <Input type='number' placeholder='Please enter correct amount' classStyle='home-content-inner-input'
                  value={value}
                  fn={handleChange}/>
                </div>
               <button className='home-content-btn' type='submit'>Submit</button>
              </form>
            </div>
        </div>
    );
};

export default Home;