import react ,{useState,useCallback} from 'react';
import {Container,Row,Col,Form,Button,Alert} from 'react-bootstrap';
import { faFontAwesomeIcon, FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye,faEyeSlash}from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';
//import Login from './compo/Login';
function ResetPassword2(){
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const [success,setSuccess]=useState('');
  const [matchError,setMatchError]=useState('');
  const[showPassword,setShowPassword]=useState(false);
  const[error,setError]=useState('');
  const[emailError,setEmailError]=useState('');
  const[email,setEmail]=useState('');
   const[isLoggedIn,setIsLoggedIn]=useState(false);
  const navigate= useNavigate();
  const handleResetSuccess=useCallback(()=>{navigate('/compo/Login');},[navigate]);
  const handleSubmit=(event)=>{
    event.preventDefault();
     let hasError=false;
     if(!hasError){console.log(handleResetSuccess())}
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
){setPasswordError('Password must be at least 8 characters long and contain at least on uppercase letter,one lowercase letter, and one special CharacterData.');setMatchError('');setSuccess(''); return;}
  setPasswordError('');   
if( confirmPassword&&password!==confirmPassword){
  setMatchError('password does not match');setSuccess(''); return;
} 
setMatchError('');
 
//setSuccess('Password Changed successfully') ;  
// Navigate('/Login');
  };console.log('Email:',email);
  console.log('Password:',password);
  return(
    <Container className='d-flex justify-ontent-center align-items-center'  style={{minHeight:'100vh',width:'100%'}}>
      <Row className='w-100'>
        <Col md={8} className='mx-auto p-4 border rounded shadow ' style={{minHeight:'600px',backgroundColor:'AliceBlue',position:'relative'}}>
        <h2 className='   text-center ' style={{marginBottom:'100px'}}>
          Reset Password</h2>
          <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='formBasicEmail' className='mb-4' style={{width:'75%', marginLeft:'auto',marginRight:'auto',display:'block'}}>
                      
                      <Form.Control type='email' placeholder=' Email ' value={email} onChange={(e)=>setEmail(e.target.value)} style={{height:'50px'}}/>
                        {emailError&& <Form.Text className='text-danger'  style={{fontSize:'16px'}}>{emailError}</Form.Text>}
                      </Form.Group>
          
            <Form.Group controlId='formBasicPassword' className='mb-4' style={{width:'75%', marginLeft:'auto',marginRight:'auto',display:'block'}}>
                <div style={{position:'relative'}}>
                <Form.Control type={showPassword?'text':'password'} placeholder=' New password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{height:'50px'}}/>
                  <span style={{position:'absolute',top:'10px',right:'10px',cursor:'pointer'}} onClick={()=>setShowPassword(!showPassword)}>  
                     <FontAwesomeIcon icon={showPassword?faEyeSlash:faEye}/> 
                  </span>
                </div>
                {passwordError&& <Form.Text className='text-danger' style={{fontSize:'16px'}}>{passwordError}</Form.Text>}
                </Form.Group>
            <Form.Group controlId='formBasicConfirmPassword' className='mb-5' style={{width:'75%', marginLeft:'auto',marginRight:'auto',display:'block'}}>
              
               <div style={{position:'relative'}}>
              <Form.Control type={showPassword?'text':'password'} placeholder='Confirm New Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}style={{height:'50px'}}/>
              <span style={{position:'absolute',top:'10px',right:'10px',cursor:'pointer'}} onClick={()=>setShowPassword(!showPassword)}>  
                     <FontAwesomeIcon icon={showPassword?faEyeSlash:faEye}/> 
              </span>
              </div>
               {matchError&& <Form.Text className='text-danger' style={{fontSize:'16px'}}>{matchError}</Form.Text>}
               {success&& <Form.Text className='text-danger' style={{fontSize:'16px'}}>{success}</Form.Text>}
              </Form.Group>
             
              <Button variant='primary' type='submit' style={{display:'block',margin:'0 auto '}} className='w-50 mt-3 mb-4'>
                Reset Password</Button></Form></Col>
      </Row>
    </Container>
  );
  
}
export default ResetPassword2;