import { useSelector } from 'react-redux';
import './App.css';
import ProductList from './features/products/ProductList';
import produts from "./features/products/products.json"
import Newproducts from './newproducts/Newproducts';
import Countries from './countries/Countries';
import NewTodos from './features/products/todos/NewTodos';
import Navebar from './componets/Navebar';
import { Outlet } from 'react-router';

function App() {
  var {cartItem}=useSelector(state=>state.productReducer)
  console.log(produts)
  return (
    <div>
     {/* <b>Cart Count:{cartItem?.length}</b> */}
  
    {/* <Newproducts></Newproducts> */}
    {/* <Countries></Countries> */}
    <Navebar></Navebar>
   <Outlet></Outlet>
    </div>
  );
}

export default App;
