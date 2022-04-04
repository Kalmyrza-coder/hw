import './App.css';
import React, { useState, useEffect } from 'react';
import {menu} from './data/data';

const getCategory = list => {
  let catList = list.map(item=>item.foods.category)
  console.log(catList)
}

function App() {

  getCategory(menu)


  // let catList = [...new Set[MyFood.map(item => item.category)]]
  return (
    <div className='App'>
      <h1>Our Menu</h1>
      {
        menu.foods.map(item=>(
          <p>{item.title}</p>
        ))
      }
    </div>
  )
}

export default App;
