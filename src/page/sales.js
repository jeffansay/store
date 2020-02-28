import React from 'react';
import Tag from '../components/tag';
import Card from '../components/card';

const Sales = ({transaction, fnDelete, total, fnEod, calc}) => {

  // const calculate = transaction.map(list => list.transactionAmount)
  //                   .reduce((acc, value) => parseFloat(value) + parseFloat(acc), 0);

 
  //  total(calculate);
  console.log(calc)

    return (
        <div className='sales'>
          <div className="sales-content l-padding">
            <div className="sales-tag">
              <h2 className='sales-tag-header'>Process Today</h2>
              <span className='sales-tag-total'>Total Sale: {calc}</span>
            </div>

            {
              transaction.length !== 0 ? 
              transaction.map(list => {
                return <Card transactionProcess={list} key={list.id} fn={fnDelete}/>
              }) 
              : <p>There no transactions!</p>
            }
            <button type='text' className='sales-content-btn' onClick={fnEod}>End of Day</button>
          </div>
        </div>
    );
};

export default Sales;