import './css/ultracarSystem.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import ServiceNew from './pages/ServiceNew';
import Services from './pages/Services';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/service/new" component={ ServiceNew } />
            <Route path="/services" component={ Services } />
            <Route path="*" component={ PageNotFound } />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
