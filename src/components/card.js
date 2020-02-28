import React from 'react';

const Card = ({transactionProcess, fn}) => {

    const { transactionAmount, dateMonth, dateDay, dateHr, dateMin, dateSec, dateYr, id } = transactionProcess;
    return (
        <>
          <div className="card">
            <ul className='card-content'>
              <li>Amount: {transactionAmount} php</li>
              <li>Date: {dateMonth}/{dateDay}/{dateYr} Hour: {dateHr}:{dateMin}:{dateSec} 
              <button className='card-btn' onClick={() => fn(id)}>X</button></li>
            </ul>
          </div> 
        </>
    );
};

export default Card;