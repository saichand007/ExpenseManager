
// intialising expense state
const expensesState=[];


//Reducer for Expense state
export default (state=expensesState,action)=>{
    switch(action.type)
    {
    
    case "ADDEXPENSE":
    return  [...state,action.expense];   //array spread operator
    
    case "REMOVEEXPENSE":
    return state.filter(({id})=> id !== action.id); 

    case "EDITEXPENSE":
    return state.map((expense)=> {
        if(expense.id === action.id){
            return {...expense,...action.updates}  //object spread operator
        }

        else
        return  expense;
      
    });

     default:
     return state;
    }
}
