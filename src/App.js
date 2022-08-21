import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe("pk_test_51LWkqwSGen6fcAFhIrjz6zenibqwzH2zTJa3NK08jilh6LdPFsGGIbotBLl1G7qO03rQviM6YJ3tNPGHKsQuAe5P00P3JSyqLM");




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
          <Route path='/orders'
              element={<><Orders/></>}>
          </Route>
          <Route path='/login'
              element={<><Login/></>}>
          </Route>
          <Route path='/checkout' 
              element={<><Checkout/></>}>
          </Route>
          <Route path="/" 
              element={<><Home/></>}>
          </Route>
          <Route path='/payment'
              element={<>
              <Elements stripe={promise}>
              <Payment/>
              </Elements>
              </>}>
          </Route>
        </Routes>
        </div>
      </Router>
  );
}

export default App;
