
import './App.css'
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/HomeFile/Home'
import MealsPage from './Components/MealsPage/MealsPage';
function App() {
  React.useEffect(() => {
    window.addEventListener('beforeunload', clearLocalStorage);

    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);
  function clearLocalStorage() {
    localStorage.clear();
  }
  
  return (
    <div className="App">
      <Routes>
        <Route  exact path='/' element={<Home/>}/>
        <Route exact path='/filterest/*' element={<MealsPage/>}/>
      </Routes>
    </div>
  )
}

export default App
