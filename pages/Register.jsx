import React,{useState} from 'react'
import {  TextField ,Button } from '@mui/material'




const Todolayout = () => {
    const [todoList,setTodoList] = useState([]);
    const [addText,setAdd]=useState('');

    const addItemToList = ()=>{
        setTodoList((p)=>([...p,addText]))
        
    }

    const deleteItem = (id)=>{
       const list =  todoList.filter((itm,index)=>index !==id)
       setTodoList(list)
    }
    
    return (
        <div style={{ width:"50%",height:"60%",display:"flex",}}>

         <form >
            
            <TextField fullWidth label="Add" id="fullWidth" onChange={(e)=>setAdd(e.target.value)} /> 

            {
                todoList.map((itm,index)=> 
                (
                    <ul>
                        <li>{itm}</li>
                        
                        <Button variant="outlined" onClick={()=>deleteItem(index)}>Delete</Button>
  

                        
                        
                        
                    </ul>
                )
                  
                )
            }
          
            
         


            <Button variant="contained" sx={{marginTop:"100%"}} onClick={()=>addItemToList()}>ADD</Button>



          </form>

         
        </div>

        
    )
}

export default Todolayout
