import React from 'react';
import Searchbar from './components/Searchbar';
import GetLocation from './components/GetLocation';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from './components/HomeComponent';


function App() {
  return (
    <div className="container">
      <GetLocation />
      <Searchbar />
      <HomeComponent/>
    </div>
  );
}

export default App;
