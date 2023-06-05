import { createSlice } from "@reduxjs/toolkit";

const initialState={
    note:[
        { id:1, content:"go to gym"},
        { id:2, content:"coding"}]
}

export const dataSlice=createSlice({
    name:"data",
    initialState,
    reducers:{
        add:(state,action)=>{
            let newData={
                id:Math.random(),
                content:action.payload
            }
            state.note.push(newData)
            document.getElementById("text").value=" ";
            
          
        },
        remove:(state,action)=>{
            // console.log(action.payload.id)
            let {note}=state;
            state.note=note.filter((item)=>item.id!==action.payload);
        }

    }
})

export const {add,remove}=dataSlice.actions
export default dataSlice.reducer