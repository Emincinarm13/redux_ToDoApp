import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { add,remove } from './data/dataSlice'

export function Todo()
{
    const data=useSelector((state)=>state.data.note)
    const dispatch=useDispatch()
  return (
    <div className='app'>
        
        <input autoFocus type='text' id='text'></input>
        <button onClick={()=> dispatch(add(document.getElementById("text").value))}> add</button>
       
       <ul>
       {data.map(({id,content})=>{
            return <li key={id}>
                {content} <button onClick={()=> dispatch(remove(id))}>delete</button>
            </li>
        })}
       </ul>
    </div>
  )
}

