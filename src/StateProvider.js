import React , { createContext , useContext , useReducer } from 'react'

export const StateContext = createContext(); //Prepares the data layer 

//Wrap our app and provide the Data layer
export const StateProvider= ({ reducer , initialState , children }) =>(
    <StateContext.Provider value={useReducer (reducer , initialState)}>
        {children}
    </StateContext.Provider>
);
 

export const useStateValue = () => useContext(StateContext); 