import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
