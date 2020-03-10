import React from 'react';
import Tag from '../components/tag';
import Card from '../components/card';

const Sales = ({transaction, fnDelete, total, fnEod, calc}) => {

    return (
        <div className='sales'>
          <div className="sales-content l-padding">
            <div className="sales-tag">
              <h2 className='sales-tag-header'>Process Today</h2>
              <span className='sales-tag-total'>Total Sale: {calc}</span>
            </div>
            <div className="sales-card-content">
            {
              transaction.length !== 0 ? 
              transaction.map(list => {
                return <Card transactionProcess={list} key={list.id} fn={fnDelete}/>
              }) 
              : <p>There's no transaction yet!</p>
            }
            </div>
            <button type='text' className='sales-content-btn' onClick={fnEod}>End of Day</button>
          </div>
        </div>
    );
};

export default Sales;