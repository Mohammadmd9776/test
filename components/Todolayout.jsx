import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
const Todolayout = () => {
  const [todoList, setTodoList] = useState([]);
  const [addText, setAdd] = useState("");
  const [search,setSearch]=useState('');
  var arr = []
  arr = todoList;


  const addItemToList = () => {
    setTodoList((p) => [...p, addText]);
  };

  const deleteItem = (id) => {
    const list = todoList.filter((itm, index) => index !== id);
    setTodoList(list);
    
  };

  const Searchbar=(val)=>{
      
    const list=todoList.filter((itm) => itm.includes(val));
    if(val == ''){
setTodoList(arr)
    }else{
        setTodoList(list)
    }
    
    
   

       
    
     

  }

  return (
    <div style={{ width: "100%", height: "60%", display: "flex" }}>

        <form >
      
        <div style={{ flex: 1, width: "50%" }}>
          <TextField
            style={{ width: 100, marginRight: 10 }}
            label="Add"
            id="fullWidth"
            onChange={(e) => setAdd(e.target.value)}
          />



          {todoList.map((itt,index)=>{

return(
    <ul style={{  display: "flex" }}>
    <li>{itt}</li>

    <IconButton aria-label="delete" size="small" onClick={() => deleteItem(index)} style={{  marginLeft:"20%" }}  >
    <DeleteIcon fontSize="inherit" />
    </IconButton>
  </ul>
)


          }
          )
           
          }

          <Button
            variant="contained"
            sx={{ marginTop: 10 }}
            onClick={() => addItemToList()}
          >
            ADD
          </Button>
        </div>

        </form>

       

        <div style={{ flex: 1, width: "50%",marginLeft:"50%" }}>
          <TextField
            style={{ width: 100, marginRight: 10 }}
            label="Search"
            id="fullWidth"
            onChange={(e) => Searchbar(e.target.value)}


            
          />




        </div>
        
     
    </div>
  );
};

export default Todolayout;
