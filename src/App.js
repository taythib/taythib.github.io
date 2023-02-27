import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import './App.scss';
import AppHeader from './AppHeader';
import Home from './Home';
import Portfolio from './Portfolio';

function App() {
  return (
    <Router>
        <div className="App">
            <AppHeader />

            {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/" exact component={Home}>
                </Route>
                <Route path="/portfolio" component={Portfolio}>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
