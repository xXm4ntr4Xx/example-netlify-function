import './App.css';
import {useEffect} from 'react'
// import {useState} from 'react'

function App() {
  // const [myName,setMyName] = useState([])
const fetchData = async() =>{
  const response = await fetch('https://example0011.netlify.app/.netlify/functions/hello');
  const data = await response.json()
  console.log(data.payload)
  // setMyName(data.payload)
}
useEffect(()=>{
fetchData();
},[])
  return (
    <div className="App">
      <h1>hello!!!!</h1>
    </div>
  );
}

export default App;
