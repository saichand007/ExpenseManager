
import { removeExpense } from './Actions/expenses';
/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

it('renders without crashing',()=>{
  const action= removeExpense({id:"123"});
  expect(action).toEqual({
   type:"REMOVEEXPENSE",
   id:"123"
  });
});