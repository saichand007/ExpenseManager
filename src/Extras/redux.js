import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//action generator for Adding Expense
const  addExpense=({description="gift",note="aqq",amount=200,createdAt=0}={})=>({
    type:"ADDEXPENSE",
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }

});

//action generator for Removing Expense
const removeExpense=({id}={})=>
({
    type:"REMOVEEXPENSE",
     id
    
});


//action generator for Editing Expense
const editExpense=({id}={})=>({
    type:'EDITEXPENSE',
    id
});


// intialising expense state
const expensesState=[];


//Reducer for Expense state
const expensesReducer=(state=expensesState,action)=>{
    switch(action.type)
    {
    
    case "ADDEXPENSE":
    return  [...state,action.expense];   //array spread operator
    
    case "REMOVEEXPENSE":
    return state.filter((expense)=> expense.id !== action.id); 

    case "EDITEXPENSE":
    return state.map((expense)=> {
        if(expense.id === action.id){
            return {...expense,description:"coffee"}  //object spread operator
        }

        else
        return  expense;
      
    });

     default:
     return state;
    }
}






//action generator for filter
const filterCreator=(text="")=>({
    type:"EDITFILTER",
    text
   
});


//action generator for filter  sortBy with amount
const sortByAmount=(sortBy)=>({
    type:"AMOUNTFILTER",
    sortBy
   
});

//action generator for filter  sortBy with date
const sortByDate=(sortBy)=>({
    type:"DATEFILTER",
    sortBy
   
});

//action generator for filter  with a startDate
const fstartDate=(startDate)=>({
    type:"STARTFILTER",
    startDate
   
});

//action generator for filter  with a endDate
const fendDate=(endDate)=>({
    type:"ENDFILTER",
    endDate
   
});




//intialising filter state
const filtersState={ text:"",sortBy:"",startDate:"undefined",endDate:"undefined"};

//Reducer for filter state
const filtersReducer=(state=filtersState,action)=>{
    switch(action.type)
    {
        case "EDITFILTER":
            return {...state,text:action.text};

         case "AMOUNTFILTER":
            return {...state,sortBy:"amount"};

        case "DATEFILTER":
            return {...state,sortBy:"date"};
         
        case "STARTFILTER":
             return{...state,startDate:action.startDate};  

        case "ENDFILTER":
             return{...state,endDate:action.endDate}

        default:
        return state;
    }
}





// combining both reducers and filtering the data

const expenseVisible=(expenses,{text,sortBy,startDate,endDate})=>{
    
    return expenses.filter((expense)=>
    {
    const startDateMatch= typeof startDate !=='number' || expense.createdAt >= startDate;
    const endDateMatch=typeof endDate !=='number' || expense.createdAt <= endDate;
    const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());;
    return startDateMatch && endDateMatch && textMatch;
      }).sort((a,b)=>{

        if(sortBy=== 'date')
        {
            return a.createdAt<b.createdAt ? 1 : -1;
        }

        else if (sortBy==='amount')
        {
            return a.amount<b.amount ?1:-1;
        }
      })
};


//creating a store with miltiple reducers handler
export const store = createStore(combineReducers({expenses: expensesReducer,filters: filtersReducer}));

// subscribing to store to watch every updated state
store.subscribe(()=>{
    const state=store.getState();
     const visibility=expenseVisible(state.expenses,state.filters);
    console.log(visibility);
});

//dispacthing the actions for expense reducer
const one=store.dispatch(addExpense({description:"Rent",note:"new not",amount:100,createdAt: 1000}));
const two=store.dispatch(addExpense({createdAt: 500}));
//const editing=store.dispatch(editExpense({id:two.expense.id}));
//const remove=store.dispatch(removeExpense({id:two.expense.id}));
    

//dispacthing the actions for filters reducer
//const filone=store.dispatch(filterCreator('rent'));
//const filtwo=store.dispatch(filterCreator());
const filthree=store.dispatch(sortByAmount());
//const filfour=store.dispatch(sortByDate());
const filfive=store.dispatch(fstartDate(400));
const filsix=store.dispatch(fendDate(1900));


//getting the current state of the store
console.log(store.getState());



      



