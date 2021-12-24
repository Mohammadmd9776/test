import React,{useState} from 'react'
import styles from '../styles/Login.module.css'
import { Alert, TextField } from '@mui/material'
import { Button } from '@mui/material'





const Registerlayout = () => {
    const [pass,setPass] = useState('');
    const [rePass,setRePass] = useState('');

    const signupClicked=()=>{
       if(pass == rePass){
           console.log('ok')
       }else{
//Alert.alert('nok')
console.log('nok')
       }
    }
    
    return (
        <div style={{ width:"50%",height:"60%",justifyContent:'center',alignItems:"center",display:"flex",border:"1px solid black"}}  >
            <form >
            
            <div style={{marginBottom:10,alignItems:"center"}}>   
                <TextField id="outlined-basic" label="Name" variant="outlined" />
            </div> 

            <div style={{marginBottom:10,alignItems:"center"}}>   
                <TextField id="outlined-basic" label="Email" variant="outlined" />
            </div> 
             
            <div style={{marginBottom:10,alignItems:"center"}}>   
                <TextField onChange={(val)=>setPass(val.target.value)} id="outlined-basic" label="Password" variant="outlined"   />
            </div> 

            <div style={{marginBottom:10,alignItems:"center"}}>   
                <TextField onChange={(val)=>setRePass(val.target.value)} id="outlined-basic" label="Repassword" variant="outlined" />

            
                  
    
                
            </div> 



            <div style={{marginTop:20,alignItems:"center",flex:1,width:"100%",justifyContent:'center',display:"flex"}}>
                <Button variant="outlined" sx={{backgroundColor:"white",borderRadius:10}}
                onClick={()=>signupClicked()} >Signin</Button>
              
                   

                    
                
                
                
                
                
                
                
                
                
               
            </div>

                  </form>
            </div>

    
        
    )
}

export default Registerlayout
