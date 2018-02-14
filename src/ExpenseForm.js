import 'react-dates/initialize';
import React,{Component} from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



class ExpenseForm extends Component {
  
    constructor(props){
        super(props);
       this.state ={
            description: props.expense ? props.expense.description: "",
            note: props.expense ? props.expense.note:"",
            amount: props.expense ? (props.expense.amount / 100).toString():"",
            createdAt: props.expense ? moment(props.expense.createdAt):moment(),
            calendarFocused: false,
            error:""
        };
    }
    descriptionChange=(e)=>
    {
     const description=e.target.value;
     this.setState(()=>({description}));
    }
   noteChange=(e)=>{
       const note=e.target.value;
       this.setState(()=>({note}));
   }

   amountChange=(e)=>{
       const amount=e.target.value;
       if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.setState(() => ({ amount }));
      }
   }

   dateChange=(createdAt)=>{
       this.setState(()=>({createdAt}))
   }

   focusChange=({focused})=>{
       this.setState(()=>({calendarFocused:focused}))
   }

  onSubmit=(e)=>{
       e.preventDefault();

       if(!this.state.description || !this.state.amount)
       {
          this.setState(()=>({error:"Plase enter details"}));
       }
       else
       {
         this.setState(()=>({error:""}));

         this.props.onPassing({
            description:this.state.description,
            amount:parseFloat(this.state.amount, 10) * 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
        });
       }    
  }



    render()
    {
        return (
            <div>
                {this.state.error && <h4>{this.state.error }</h4>}

                <form  onSubmit={this.onSubmit}>

                <input type="text" placeholder="Description" 
                  value={this.state.description} autoFocus onChange={this.descriptionChange} /><br/>
              
                <input type="text" placeholder="Amount" value={this.state.amount}
                onChange={this.amountChange}/><br/>
                
                <textarea placeholder="Optional Text" value={this.state.note}
                onChange={this.noteChange} ></textarea><br/>
                 <SingleDatePicker  
                 date={this.state.createdAt}
                 onDateChange={this.dateChange}
                 focused={this.state.calendarFocused}
                 onFocusChange={this.focusChange}
                 numberOfMonths={1}
                 isOutsideRange={() => false}
                 /><br/> <br/>
                <button>Add Expense</button><br/>

                </form>
            </div>
        );
    }
}

export default ExpenseForm;