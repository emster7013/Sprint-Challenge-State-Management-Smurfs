import React, {useState, useEffect } from "react";
import {SmurfsContext} from '../context/SmurfsContext';
import "./App.css";
import axios from "axios";
import SmurfList from '../components2/SmurfList';
import Forms from '../components2/Forms';

function App() {
  const [addSmurf, setAddSmurf] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3333/smurfs')
    .then(res =>{
      setAddSmurf(res.data)
      console.log(res.data);
    })
  },[]);
    return (
      <div className="App">
        <SmurfsContext.Provider value={{addSmurf, setAddSmurf}}> 
        <h1>SMURFS! 2.0 W/ Redux</h1>
          <SmurfList/>
          <Forms/>
        </SmurfsContext.Provider>
      </div>
    );

}

export default App;
