import { useState } from 'react'
import './formInput.css'

const FormInput = (props) => {
    const [focused, setFocused]  = useState(false)
    const {label, onChange, errorMessage, id, ...inputProps} = props

    function handleFocus(e){
        setFocused(true)
    }
  return (
    <div className='formInput'>
        <label>{label}</label>
        <input
        {...inputProps}
        onChange={onChange} 
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={()=> inputProps.name === 'confirmPassword' && setFocused(true)}
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
