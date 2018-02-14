import {createStore} from 'redux';


//Action Generators which return  action objects
const incrementCount = ({text=1}={})=>({          //destructing object of es6
    type:"INCREMENT",                            // returnning action object
    text
}); 

const decrementCount=({text=1}={})=>({
    type:"DECREMENT",
    text
})

const resetCount=()=>({
    type:"RESET"
  
})

const setCount=({num})=>({
    type:"SET",
    num
})


// Reducer is a function  which  returns new state based on the action passed to it
const Reducer=(state={counter:0},action)=>{
    switch(action.type)
    {
        case "INCREMENT":
        return {
            counter:state.counter + action.text
        }

        case "DECREMENT":
       
        return {
           
            counter:state.counter - action.text
        }

        case "RESET":
        return {
            counter: -1
        }

        case "SET":
        return {
            counter:action.num
        }

        default:
        return state;
    }
  
}

//Store which updates the object state based on the Reducer
 export  const store=createStore(Reducer);

// subscribe which watches the every state updated and renders it
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());   
})


// action is dispatched  to store from the action generators
store.dispatch(incrementCount({text:5}) );
store.dispatch(incrementCount() );


store.dispatch(decrementCount({text:5}));
store.dispatch(decrementCount());

store.dispatch(resetCount() );
              
store.dispatch(setCount({num:202}) );     