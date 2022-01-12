//import logo from './logo.svg';
import './App.css';
import ModeContext from './ModeContext';
import ModeSwitcher from './ModeSwitcher';
import { useState } from 'react';


function App() {

const [isDark, setIsDark] = useState(false);

const Switch = () =>{
  setIsDark(!isDark);
}

  return (
    <ModeContext.Provider value={{isDark,Switch}}>
    <div className="App">
      <header className={`App-header${isDark?'-dark':''}`}>
      </header>
    </div>
    </ModeContext.Provider>
  );
}

export default App;
