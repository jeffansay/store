import React, { useState, useEffect } from 'react';
import Nav from './components/nav';
import navData from './data/nav.json';
import Home from './page/home';
import Sales from './page/sales';
import History from './page/history';
import { v1 as uuidv1 } from 'uuid';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [error, setError] = useState({
    success: false,
    danger: false
  });

  const [id, setId] = useState(uuidv1);
  const [transaction, setTransaction] = useState([]);
  const [total, setTotal] = useState(0);
  const [eodHistory, setEodHistory] = useState([]);
  const [historyFlag, setHistoryFlag] = useState(false);
  const [eodFlag, setEodFlag] = useState(false);
  const [input, setInput] = useState('');

  // test
  const [initialize, setInitialize] = useState([]);

  const handleChange = e => {
    setError({
      ...error,
      success: false,
      danger: false
    });
    setHistoryFlag(false);
    setInput(e.target.value);

  }
    
  const handleDelete = id => {
    const filterDelete = transaction.filter(list => list.id !== id);
    setTransaction([...filterDelete]);
  }

  const handleEodSubmit = e => {
    e.preventDefault();

    if(transaction.length !== 0) {
      setEodFlag(true);
      setTransaction([]);
      setHistoryFlag(true);
    } 


  }
  const submitForm = e => {
    e.preventDefault();
    let date = new Date();

    if(input.length !== 0) {
      setError({
        ...error,
        success: true,
      });

      const transactionProcess = {
        id: id,
        dateYr: date.getFullYear(),
        dateMonth: date.getMonth(),
        dateDay: date.getDate(),
        dateHr: date.getHours(),
        dateMin: date.getMinutes(),
        dateSec: date.getSeconds(),
        transactionAmount: input
      }
      setTransaction([...transaction, transactionProcess]);
    } else {
      setError({
        ...error,
        danger: true,
        success: false
      })
    }
    setInput('');
    setId(uuidv1);
    
  }

  useEffect(() => {
    const calculate = transaction.map(list => list.transactionAmount)
    .reduce((acc, value) => parseFloat(value) + parseFloat(acc), 0);

    setTotal(calculate);

    if(eodFlag) {
      let eodDate = new Date();
      const eodMonth = eodDate.getMonth();
      const eodDates = eodDate.getDate();
      const eodYear = eodDate.getFullYear();
      
      const eodProcess = {
        total: total,
        dates: `${eodYear}-${eodMonth}-${eodDates}`
      }

      setEodHistory([...eodHistory, eodProcess]);
      setEodFlag(false);  
    }
     
    setInitialize(localStorage.getItem('test'));
    console.log(localStorage.getItem('test'));
  }, [transaction, historyFlag])


  return (
    <div className="app">
      <div className="app-content l-container">
        <Router>
          <ul className="app-content-list list">
          <Nav content={navData}/>
          </ul>
          <Switch>
            <Route exact path="/" render={() => <Home flag={error} submit={submitForm} handleChange={handleChange} value={input}/>} />
            <Route exact path="/sales" render={() => <Sales transaction={transaction} fnDelete={handleDelete}
            fnEod={handleEodSubmit} calc={total}/> }/>
            <Route exact path="/history" render={() => <History total={eodHistory} test={historyFlag} testOne={initialize} /> }/>
          </Switch>
        </Router>
      </div>  
    </div>
  );
}

export default App;
