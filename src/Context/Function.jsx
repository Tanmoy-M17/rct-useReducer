import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
export const Functioncontext=createContext();

const initialState=[];
const reducer=(state,action)=>{
    switch(action.type){
        case "add":{
        return [ ...state,{id:uuidv4(), Task:action.value , isCompleated:false} ]
          } 
        case "remove":{
            return state.filter((todo)=>(todo.id!==action.id))
        }
        case "toggle": {
          console.log(action.id,state);
           return{
            ...state,todo:state.filter((data)=>{
              if(data.id===action.id){
                return{
                  ...data,
                  isCompleated:!data.isCompleated
                }
              }
            else{
              return data;
            }
          })
           }  
          }
        default:{
            return state;
        }
    }
}



export const FunctionProvider=({children})=>{

    const [state,dispatch]= useReducer(reducer,initialState); 

    // const [Todo,setTodo]=useState([]);
  return  <Functioncontext.Provider value={{state,dispatch}}>{children}</Functioncontext.Provider>
}