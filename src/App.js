import React from 'react';
import Searchbar from './components/Searchbar';
import GetLocation from './components/GetLocation';

function App() {
  return (
    <div className="container">
      <GetLocation />
      <Searchbar />
    </div>
  );
}

export default App;
