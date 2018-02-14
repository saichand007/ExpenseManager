

//action generator for filter
export const filterCreator=(text="")=>({
    type:"EDITFILTER",
    text
   
});


//action generator for filter  sortBy with amount
export const sortByAmount=(sortBy)=>({
    type:"AMOUNTFILTER",
    sortBy
   
});

//action generator for filter  sortBy with date
export const sortByDate=(sortBy)=>({
    type:"DATEFILTER",
    sortBy
   
});

//action generator for filter  with a startDate
export const fstartDate=(startDate)=>({
    type:"STARTFILTER",
    startDate
   
});

//action generator for filter  with a endDate
export const fendDate=(endDate)=>({
    type:"ENDFILTER",
    endDate
   
});

