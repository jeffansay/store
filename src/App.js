import React, { useState, useEffect } from 'react';
import Nav from './components/nav';
import navData from './data/nav.json';
import Home from './page/home';
import Sales from './page/sales';
import History from './page/history';
import Login from './page/login';
import { ProtectedRoute } from './components/protected.route';
import { createBrowserHistory as createHistory } from "history";
import { v1 as uuidv1 } from 'uuid';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const notFound = () => {
  return <h2>404 Not Found</h2>
}

function App() {
  const [error, setError] = useState({
    success: false,
    danger: false
  }); 

  const [id, setId] = useState(uuidv1);
  const [transaction, setTransaction] = useState([]); //handle the form
  const [total, setTotal] = useState(0);
  const [eodHistory, setEodHistory] = useState(''); //handle the saveHolder
  const [initData, setInitData] = useState([]);
  const [historyFlag, setHistoryFlag] = useState(false);
  const [eodFlag, setEodFlag] = useState(false);
  const [saveFlag, setSaveFlag] = useState(false);
  const [saveStorage, setSaveStorage] = useState(false);
  const [input, setInput] = useState('');

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
      setSaveFlag(true)
      // test for display
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
    let data;
    if(localStorage.getItem('store') !== null) {
      data = JSON.parse(localStorage.getItem('store'))
      const getConvert = data.map(convert => {
        return ({
          x: new Date(convert.x), y: convert.y
        })
      })
      setInitData(getConvert);
     } else {
      console.log('check!!! ni sud ko after refrest!!')
      data = [];
      setInitData(data);
    }
  },[])

  
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
        x: new Date(`${eodYear}-${eodMonth}-${eodDates}`),
        y: total
      }
      setEodHistory(eodProcess);
      setInitData([...initData, eodProcess]);
      setEodFlag(false); 
      setSaveStorage(true) 
    }

    if(saveStorage) {
      localStorage.setItem('store', JSON.stringify(initData));

    }

  }, [transaction, historyFlag, initData])

  return (
    <div className="app">
      <div className="app-content l-container">
        <Router history={createHistory}>
          <ul className="app-content-list list">
          <li className='store-name'>KJEM v.0.1</li>
          <Nav content={navData}/>
          </ul>
          <Switch>
            <Route exact path="/" render={() => <Home flag={error} submit={submitForm} handleChange={handleChange} value={input}/>} />
            {/* <Route exact path="/sales" render={() => <Sales transaction={transaction} fnDelete={handleDelete}
            fnEod={handleEodSubmit} calc={total} /> }/> */}
             {/* <Route exact path="/history" render={() => <History init={initData}/> }/> */}
            <Route path='/login' component={Login} />
            <ProtectedRoute exact path='/sales' component={() => <Sales transaction={transaction} fnDelete={handleDelete}
            fnEod={handleEodSubmit} calc={total} />} />
            <ProtectedRoute exact path='/history' component={() => <History init={initData}/>} />
            <Route path='*' component={notFound} />
          </Switch>
        </Router>
      </div>  
    </div>
  );
}

export default App;
