import React from 'react';
import './App.css';
import {connect} from 'react-redux' ; 
import {increment, decrement} from './actions/action' ; 
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
       the value of counter is {props.count}

       <div>
         <button onClick={()=>props.increment()}>increment</button>
         <button onClick={()=> props.count > 0 && props.decrement()}>decrement</button>
       </div>
      </header>
    </div>
  );
  }

const mapStatetoProps = (state) => ({

  count : state.counter

})

export default connect(mapStatetoProps ,{increment,decrement}) (App);
