import './App.css';
import {useEffect} from 'react'

function App() {
const fetchData = async() =>{
  const response = await fetch('https://heroic-madeleine-7b4202.netlify.app/.netlify/functions/data');
  
  console.log(response)
}
useEffect(()=>{
fetchData();
},[])
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
