import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'


const Input = (props)=> {
   const {label, name, ...rest}= props
    return (
        <div style={{marginBottom:20}}> 

           <div>
           <label htmlFor={name} >{label}</label>
           </div>
        
            
            <Field id={name} name={name} {...rest} />
            
             
             <ErrorMessage name={name} component={TextError } />
             
            
        </div>
    )
}

export default Input
