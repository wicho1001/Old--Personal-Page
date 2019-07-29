import React,{useState} from 'react';
import SideMenu from "./Components/SideMenu/sideMenu";
import './App.scss';

const App = () => {
  const [SideFlag, setSideFlag] = useState(false)
  console.log(SideFlag)

  return (
    <div>
      {
        SideFlag ? <SideMenu flag={SideFlag}/> : <SideMenu flag={SideFlag}/> 
      }
      <button onClick={() => setSideFlag(!SideFlag)}>click meee</button>
    </div>
  );  
}

export default App;