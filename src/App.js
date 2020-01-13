import React from 'react';
import './App.scss';
import AppHeader from './AppHeader';
import AppBody from './AppBody';


function App() {
  return (
    <div className="App">
      <div className="Content">
        <AppHeader />
        <AppBody />
      </div>
    </div>
  );
}

export default App;
