import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <Router>
    <div>
      <Navigation />
    </div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Router>
);

export default App;
