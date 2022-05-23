import './App.css';
import {useState,useEffect} from 'react'

function App() {
const fetchData = async() =>{
  const response = await fetch('https://dapper-chimera-3d1b89.netlify.app/.netlify/functions/data');
  const data = await response.json();
  console.log(data)
}
useEffect(()=>{
fetchData();
},[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
