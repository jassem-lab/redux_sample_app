const initialeState = {
  counter : 0 
} ; 

export default function reducer(state = initialeState ,  action ){
  switch(action.type){
    case "INCREMENT":   
    return { counter : state.counter + 1  }
 
    case "DECREMENT": 
    return { counter : state.counter -1  };
 
  default : 
  return state  ; 

  }
}