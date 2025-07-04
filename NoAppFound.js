import react from'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container ,Row,Col,Navbar} from 'react-bootstrap';
import {FaSearch,FaArrowLeft} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'
function NoAppFound(){
  const navigate =useNavigate();
  const handleBackToMain=()=>{
    navigate('/')
  }
  return(
    <Container  style={{ display:'grid',placeItems:'center'}}>
      <Row className='w-100'>
       <Col md={8} className='mx-auto p-4 border rounded shadow  ' 
       style={{minHeight:'600px',backgroundColor:'AliceBlue', position:'relative',marginTop:'65px'}}>
         <div style={{cursor:'pointer'}} onClick={handleBackToMain}>
         <FaArrowLeft size={25}  style={{verticalAlign:'middle'}}/></div>
        <div  style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)' }}>
        <FaSearch style={{ fontSize: '250px',color:'#808080'}} /> 
        </div>
        <h1 className=' text-center' style={{marginTop:'400px',fontSize:'50px'}}>No App Found</h1>
        </Col>
      </Row>
    </Container>
  )
}
export default NoAppFound;