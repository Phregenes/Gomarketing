import React, { component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import View1 from './pages/Home';
import View2 from './pages/Contact';
import View3 from './pages/About';

function AppShell() {
  return (
    <div className="AppShell">
      <div className="App">
        <header>
          <Link to="/home"> Home </Link> 
          <Link to="/contact"> Contato </Link>
          <Link to="/about"> Sobre </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={View1}/>
            <Route path="/home" component={View1}/>
            <Route path="/contact" component={View2}/>
            <Route path="/about" component={View3}/>
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default AppShell;
