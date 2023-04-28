import { useMemo, useState } from "react"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { startCreatingWithEmailPassword } from "../../store/auth/thunks"

const formData = {
  email:'',
  password: '',
  displayName:''
}

const formValidations = {
  email: [ (value) => value.includes('@') , 'El correo debe de tener un @' ] ,  
  password: [  (value) => value.length >= 6 , 'La contraseña debe tener mas de 6 digitos' ]  ,
  displayName: [  (value) => value.length > 1 , 'El nombre es obligatorio' ]  ,
}

export const RegisterPage = () => {

  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status , errorMessage } = useSelector( state => state.auth )
  const isCheckingAuthentication = useMemo(() => status === 'checking', [ status ])

  const { displayName , email , password , onInputChange , formState,
          isFormValid , passwordValid , emailValid , displayNameValid
        } = useForm( formData , formValidations)


        

  const onSubmit = ( e ) => { 
    e.preventDefault()
    setFormSubmitted(true)

    if (!isFormValid)return

    dispatch(startCreatingWithEmailPassword(formState))
  }

  return (
    <div className="login toDos_general_Container" id='register'>
    <div className="login_container register_container">
      <div>
        <h2>Crear Cuenta</h2>
        <form onSubmit={onSubmit} >
          <div className="login_input_box">
            <input 
                type="text"
                name="displayName"
                placeholder="Nombre Completo"
                value={ displayName }
                onChange={onInputChange}
                aria-invalid={ !!displayNameValid && formSubmitted}
                aria-describedby="name-helper-text"
             />
          </div>
          { displayNameValid && formSubmitted &&  <p id="name-error-text" style={{color:'red'}}>{ displayNameValid }</p>}
          <div className="login_input_box">
            <input 
                type="email" 
                name="email"
                placeholder="Correo Electronico"
                value={ email }
                onChange={onInputChange}
                aria-invalid={ !!emailValid && formSubmitted}
                aria-describedby="email-helper-text"
            />
          </div>
          { emailValid && formSubmitted &&  <p id="email-error-text" style={{color:'red' }}>{ emailValid }</p>}
          <div className="login_input_box">
            <input 
                type="password" 
                name="password"
                value={ password }
                placeholder="Contraseña"
                onChange={onInputChange}
                aria-invalid={ !!passwordValid && formSubmitted}
                aria-describedby="password-helper-text"
             />
          </div>
          { passwordValid && formSubmitted &&  <p id="password-error-text" style={{color:'red' , paddingBottom: '15px' }}>{ passwordValid }</p>}
          <div>
            <p style={{ color:'red' , paddingBottom:'10px', display:`${!!errorMessage ? '' : 'none'}`}}>{ errorMessage }</p>
         </div>
          <div className="login_buttons">
            <button style={{ width:'100%'}} type="submit" disabled={ isCheckingAuthentication }>Crear Cuenta</button>
          </div>
        
        </form>
      </div>
     
      
      <div className="anchor_redirection">
         <span>¿ Ya tienes una cuenta ? </span><a href='login' > Ingresa</a>
      </div> 
    </div>
  </div>
  )
}
