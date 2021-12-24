import React ,{useState}from 'react'
import styles from '../styles/Login.module.css'
import Link from 'next/link'
import {  TextField } from '@mui/material'
import { Button } from '@mui/material'

import Router from 'next/router'



 
const Login = () => {
    const [email,setemail] = useState('');
const [Pass,setPass] = useState('');


    const emaill=()=>{


        if(email=="mohammad@gmail.com",Pass=="1234"){

           
Router.push('/Todo')







        }else{
            alert("wron!")}
    }



    return (
        <div style={{ width:"50%",height:"60%",justifyContent:'center',alignItems:"center",display:"flex",border:"1px solid black"}}  >
            
            <form >
            <div>
                  <TextField id="outlined" label="Email" variant="outlined"  type={"email"} onChange={(e)=>setemail(e.target.value)}/>
            </div>
            
                  <TextField id="outlined" label="Password" variant="outlined" sx={{marginTop:3}} type={"password"}  onChange={(e)=>setPass(e.target.value)}/>
            
            <div style={{marginTop:20,alignItems:"center",flex:1,width:"100%",justifyContent:'center',display:"flex"}}>
                  <Button variant="outlined" sx={{backgroundColor:"white",borderRadius:10}} onClick={()=>emaill()}>Signin</Button>
            </div>
            <div  style={{marginTop:20,alignItems:"center",flex:1,width:"100%",justifyContent:'center',display:"flex"}}>
            <Link href={'/Register'}>
                <a><Button variant="outlined" sx={{backgroundColor:"white",borderRadius:10}} >Signup</Button> </a>
            </Link>

                

                
            </div>
            </form>
            
        </div>
    )
}

export default Login
