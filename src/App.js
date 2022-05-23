import './App.css';
import {useState,useEffect} from 'react'

function App() {
  const [name,setName] = useState('')
const fetchData = async() =>{
  const response = await fetch('https://heroic-madeleine-7b4202.netlify.app/.netlify/functions/hello');
  const data = await response.json()
  console.log(data.name)
  setName(data.name)
}
useEffect(()=>{
fetchData();
},[])
  return (
    <div className="App">
      <h1>hello {name}!!!!</h1>
    </div>
  );
}

export default App;
