import react,{useState} from'react';
import {Container,Row,Col,Form,Button,Alert} from'react-bootstrap';
function ForgotPassword({onBack}){
  const[email,setEmail]=useState('');
  const[error,setError]=useState('');
  const[emailError,setEmailError]=useState('');
  const handleSubmit=(event)=>{
    event.preventDefault();
     let hasError=false;
    if(!email){
      setEmailError('please enter your email .');hasError=true;} else{setEmailError('');}
   
     
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email&&!emailRegex.test(email))
    {setEmailError('please enter correct email');
      hasError=true;
    }
  }
    
  return(
    <Container  style={{ display:'grid',placeItems:'center'}}>
      <Row className='w-100'>
        <Col md={8} className='mx-auto p-4 border rounded shadow ' style={{minHeight:'600px',backgroundColor:'AliceBlue',position:'relative'}}>
          <h2 className=' text-center' style={{marginBottom:'100px'}} >Recover Your Password</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formBasicEmail' className='mb-5 ' style={{width:'75%', marginLeft:'auto',marginRight:'auto',display:'block',height:'20%'}}>
              <Form.Control type='email' placeholder='Enter Your Email ' value={email} onChange={(e)=>setEmail(e.target.value)} style={{height:'50px'}}/>
            </Form.Group>
            {emailError&& <Form.Text className='text-danger' style={{fontSize:'16px'}}>{emailError}</Form.Text>}
            <Button variant='primary' type='submit' style={{display:'block',margin:'0 auto'}} className='w-50 mt-3 mb-5'>
              Send
            </Button>
            <a href='#' className='mt-3 d-block' style={{textAlign:'center'}} onClick={onBack}>
              Back To Login
            </a>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default ForgotPassword;
