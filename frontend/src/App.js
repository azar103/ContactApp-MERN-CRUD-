import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './Components/Header/Header';
import ListContact from './Components/ListContact/ListContact';
import ContactForm from './Components/ContactForm/ContactForm';
import SingleContact from './Components/SingleContact/SingleContact';
import EditForm from './Components/EditForm./EditForm';

function App() {
  return (
   <Router> 
      <Header />
      <div className="container">
         <Switch>
           <Route path="/contacts/:id" component={SingleContact} />
           <Route path="/contacts"  component={ListContact}/>
           <Route path="/new-contact"  component={ContactForm}/>
           <Route path="/edit-contact/:id" component={EditForm} />
           <Route path="" component={ListContact}/>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
