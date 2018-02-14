import uuid from 'uuid';

//action generator for Adding Expense
export const  addExpense=({description="gift",note="aqq",amount=800,createdAt=0}={})=>({
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
export const removeExpense=({id}={})=>
({
    type:"REMOVEEXPENSE",
     id
    
});


//action generator for Editing Expense
export const editExpense=(id,updates)=>({
    type:'EDITEXPENSE',
    id,
    updates
});
