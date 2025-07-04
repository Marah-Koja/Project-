import React,{useCallback, useState} from 'react';
import {Form, Button,Container,Row,Col} from'react-bootstrap';
//import ForgotPassword from './compo/ForgotPassword';
import { faFontAwesomeIcon, FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye,faEyeSlash, faSignOutAlt}from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
//import AppMain4 from './compo/AppMain4';
//import { Visibility } from '@material-ui/icons/Visibility';
//import { VisibilityOff } from '@material-ui/icons/VisibilityOff';
function Login(){
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[showForgotPassword,setShowForgotPassword]=useState(false);
  const[showPassword,setShowPassword]=useState(false);
  const[passwordError,setPasswordError]=useState('');
  const[emailError,setEmailError]=useState('');
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  const navigate=useNavigate();
  const handleLoginSuccess=useCallback(()=>{navigate('/');},[navigate]);
  const handleSubmit=(event)=>{
    event.preventDefault();
     let hasError=false;
     if(!hasError){handleLoginSuccess()}
    if(!email){
      setEmailError('Please Enter Your Email .');hasError=true;} else{setEmailError('');}
    if(!password){
      setPasswordError('Please Enter Your Password.');hasError=true;}else{ setPasswordError(''); }
     
    const emailRegex=/^[^\s@]+@[^\s@]+\.[a-zA-Z]{3,}$/;
    if(email&&!emailRegex.test(email))
    {setEmailError('please enter correct email');
      hasError=true;
    }
    if( password&&password.length<8||!/[A-Z]/.test(password)
          || !/[a-z]/.test(password)||!/d/.test(password)
          ||!/[^A-Za-z0-9]/.test(password)  
  ){setPasswordError('Password must be at least 8 characters long and contain at least on uppercase letter,one lowercase letter, and one special CharacterData.');return;hasError=true}
  if (hasError) {return;}  
   setIsLoggedIn(true);
}
    console.log('Email:',email);
    console.log('Password:',password);
  const handleForgotPasswordClick=useCallback((event)=>{event.preventDefault(); setShowForgotPassword(true); navigate('/compo/ResetPassword2')},[]);
 // if(isLoggedIn){return <AppMain4/>;}
  const handleBackToLogin=()=>{ setShowForgotPassword(false);};
  const togglePasswordVisibility=()=>{setShowPassword(!showPassword);}
 // if(showForgotPassword){
   //return<ForgotPassword onBack={handleBackToLogin}/>;
  //}
  const handleLogout=()=>{
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('user');
    

  }
  return(
    <Container  className='d-flex justify-content-center align-items-center'  style={{minHeight:'100vh',width:'100%',}}>
      <Row className='w-100'  >
        <Col md={8} className='mx-auto p-4 border rounded shadow ' style={{minHeight:'600px',backgroundColor:'AliceBlue',position:'relative'}}>
        <h2 className='   text-center ' style={{marginBottom:'100px'}}>LOGIN</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicEmail' className='mb-4' style={{width:'75%', marginLeft:'auto',marginRight:'auto',display:'block'}}>
            
            <Form.Control type='email' placeholder=' Email ' value={email} onChange={(e)=>setEmail(e.target.value)} style={{height:'50px'}}/>
              {emailError&& <Form.Text className='text-danger'  style={{fontSize:'16px'}}>{emailError}</Form.Text>}
            </Form.Group>
          <Form.Group controlId='formBasicPasssword' className='mb-5' style={{width:'75%', marginLeft:'auto',marginRight:'auto',display:'block'}} >
           
            <div style={{position:'relative'}}>
             <Form.Control type={showPassword?'text':'password'} placeholder=' Password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{height:'50px'}}/>
             <span style={{position:'absolute',top:'10px',right:'10px',cursor:'pointer'}} onClick={()=>setShowPassword(!showPassword)}>
            
              <FontAwesomeIcon icon={showPassword?faEyeSlash:faEye}/> 
             </span>
            </div>
             {passwordError && <Form.Text className='text-danger'  style={{fontSize:'16px'}}>{passwordError}</Form.Text>}
            </Form.Group>
          <Button variant='primary' type='submit' style={{display:'block',margin:'0 auto '}}  className='w-50 mt-3 mb-4'>
           Login</Button>  
            </Form>
            <a href='/forgot-password'  className='mt-3 d-block' style={{textAlign:'center'}} onClick={handleForgotPasswordClick}>Forgot Your Password ?</a>
             <Button variant='secondary' onClick={handleLogout} className='position-absolute bottom-0 end-0  me-2 mb-2' style={{backgroundColor:'#6495ED'}}>
              Log Out<FontAwesomeIcon icon={faSignOutAlt} style={{marginLeft:'10px'}}/>
             </Button>
            </Col>
      </Row>
    </Container>
  );

}
 export default Login;