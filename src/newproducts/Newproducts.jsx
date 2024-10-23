import React from 'react'
import { useGetProductsQuery } from '../services/products'

function Newproducts() {
    var {isLoading,data}=useGetProductsQuery();
    console.log(isLoading,data)
  return (

    <div>
        <h1>Newproducts</h1>
        {
            isLoading&&<h3>Aagu abbai....</h3>
        }
        {
            !isLoading&&data.map((p)=>{
                return <li>
                    {p.title}
                </li>
            })
        }
    </div>
  )
}

export default Newproducts