import React from 'react'
import {Formik , Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import { Button } from '@mui/material'
import Link from 'next/link'

const Loginasl = () => {
    const initialValues ={
        email:'',
        password:'',
    }

    const validationSchema = Yup.object({
        email:Yup.string().email('Invalid email format').required('Required'),
        password:Yup.string().required('Required')
    })

    const onSubmit = values =>{
        console.log('Form data', values)
    }




    return (
        <div  style={{ width:"50%",height:"60%",justifyContent:'center',alignItems:"center",display:"flex"}} 
        >

    <Formik 
      initialValues={ initialValues}
      validationSchema={ validationSchema}
      onSubmit={onSubmit}>

          {
              formik =>{
                  return <Form>
                      <FormikControl
                      control='input'
                      type='email'
                      label='Email'
                      name='email'/>
                      
                      <FormikControl
                      control='input'
                      type='password'
                      label='password'
                      name='password'/>

            <div style={{marginTop:20,alignItems:"center",flex:1,width:"100%",justifyContent:'center',display:"flex"}}>
            <Link href={'/Todo'}>
                <a><Button variant="outlined" sx={{backgroundColor:"white",borderRadius:10}} >Signin</Button> </a>
            </Link>
                
                
            
            
                  
           
         </div>


         <div  style={{marginTop:20,alignItems:"center",flex:1,width:"100%",justifyContent:'center',display:"flex"}}>
             <Link href={'/Register'}>
                <a><Button variant="outlined" sx={{backgroundColor:"white",borderRadius:10}} >Signup</Button> </a>
            </Link>

      </div>
                      

                  </Form>
              }
          }
    
    
    </Formik>
    </div>
    )
}

export default Loginasl
