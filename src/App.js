import React from 'react';
import uuid from 'uuid';
import ListSearch from './component/ListSearch';
import ListItem from './component/ListItem';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    
    <div class="container ">
  <div class="row">
    <div class="col-sm bg-primary">
    <ListSearch />
    </div>
    <div class="col-sm bg-danger">
    <ListItem />
    </div>
    <div class="col-sm  bg-dark">
      One of three columns
    </div>
  </div>
    
    
    </div>
    
    
  );
}

export default App;
