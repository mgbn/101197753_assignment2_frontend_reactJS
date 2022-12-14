import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import Create from './components/Create';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div>
        <Router>
              <Header />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployee}></Route>
                          <Route path = "/employees" component = {ListEmployee}></Route>
                          <Route path = "/add-employee/:id" component = {Create}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployee}></Route>
                          {<Route path = "/update-employee/:id" component = {UpdateEmployee}></Route> }
                    </Switch>
                </div>
              <Footer />
        </Router>
    </div>
    
  );
}

export default App;