import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCard } from './productSlice'

function ProductList() {
var {products} =  useSelector(state=>state.productReducer) 
var dispatch= useDispatch()
console.log(products) 
  return (
    <div>
        <h1>Products</h1>
        {
            products?.map((p)=>{
                return <li>
                  {p.title.slice(0,20)}
                  <button onClick={()=>{dispatch(addToCard(products))}}>add to card</button>
                 </li>
            })

        }
    </div>
  )
}

export default ProductList