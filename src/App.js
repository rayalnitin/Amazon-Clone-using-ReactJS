import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{} , dispatch] = useStateValue();

  useEffect(()=>{
      auth.onAuthStateChanged(authUser =>{
        console.log("The User is" , authUser);
        if(authUser){
           dispatch({
             type:'SET_USER', 
             user: authUser
           })

        }else{
            dispatch({
              type:'SET_USER',
              user:null
            })
        }
      })
  } , [])
  return (
    <Router>
      <div className="app">
      <Header/>
        <Routes>
          <Route path='/login'
              element={<><Login/></>}>
          </Route>
          <Route path='/checkout' 
              element={<><Checkout/></>}>
          </Route>
          <Route path="/" 
              element={<><Home/></>}>
          </Route>
        </Routes>
        </div>
      </Router>
  );
}

export default App;
