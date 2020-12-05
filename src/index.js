import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import rootReducer from './reducers'
import {Provider} from 'react-redux'


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())




ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// //ACTION

// const increment = () => {
//   return {type: "INC"}
// }

// const decrement = () => {
//   return {type: "DEC"}
// }


// //Reducer

// const counter = (state = 0, action) => {

//   switch(action.type){
//     case "INC":
//       return state + 1;
//     case "DEC":
//       return state - 1;
//     default:
//       return state
//   }
// }

// // STORE 

// let store = createStore(counter)

// store.subscribe(() => console.log(store.getState()))

// //Dispatch

// store.dispatch(increment())
// store.dispatch(decrement())
