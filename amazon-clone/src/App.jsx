
import React, { useEffect, useContext } from 'react';
import { DataContext } from './Components/ContextProvider/DataProvider';
import { auth } from './pages/Utilitis/firebase';
import {Typo} from './pages/Utilitis/action.type';
 
import './App.css'

import Routing from './Routing'


function App() {
  const [{user}, dispatch] = useContext(DataContext);
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:Typo.SET_USER_KEY,
          user:authUser
        })
      }
      else{
        dispatch({
          type:Typo.SET_USER_KEY,
          user:null
        })
      }
    })
  },[])
  

  return (
   
      <Routing />
      
   
  );
}

export default App
