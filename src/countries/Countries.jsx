import React from 'react'
import { useGetcountriesQuery } from '../services/countries'

function Countries() {
   var {isLoading,data} =useGetcountriesQuery();
   console.log(isLoading,data)
  return (
    <div>
        <h1>Countries</h1>
        {
            isLoading&&<i>countries vastunai.....</i>
        }
        {
           !isLoading&&data.map((c)=>{
              return <li>
                    {c.name.common}
              </li>
           }) 
        }

    </div>
  )
}

export default Countries