import React from 'react';
import{Link} from 'react-router-dom';


const ExpenselistItem=(props)=>(

    <div>
        <Link to={`/edit/${props.id}`}>
        <p>Description : {props.description}</p></Link>
        <p>Amount : {props.amount}</p>
        
       
     </div>
);


export default ExpenselistItem;