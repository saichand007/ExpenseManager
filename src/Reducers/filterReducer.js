import moment from 'moment';

//intialising filter state
const filtersState={ text:"",
                    sortBy:"",
                   startDate:moment().startOf('month'),
                   endDate:moment().endOf('month')      };

//Reducer for filter state
export default (state=filtersState,action)=>{
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

