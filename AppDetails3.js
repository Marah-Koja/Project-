
import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Image, Button, Navbar, Form, FormControl,ProgressBar } from 'react-bootstrap';
import { FaArrowLeft, FaBars, FaFontAwesome, FaRegStar, FaSearch, FaStar, FaStarHalfAlt } from 'react-icons/fa';

function AppDetails3() {
  //   هذه البيانات سيتم جلبها من قاعدة البيانات
  const {Id}=useParams();
  const [appData, setAppData] = useState({
    name: 'Health Connect',
    rating: 2.80,
    ratingCount: 1234, // مثال لعدد المقيمين
    imageUrl: 'URL_صورة_التطبيق',
    positivePercentage: 70,
    negativePercentage: 15,
    neutralPercentage: 10,
    Id:1,
    appurl: 'http://play.google.com/store/apps/details?id=com.google.andriod.apps.healthdata'
 });
 const [allApps,setAllApps]=useState([{Id:1,name:'Health Connect'}])

  //  useEffect  لجلب البيانات من قاعدة البيانات عند تحميل المكون
  // useEffect(() => {
  //   fetch(`/api/app-details/${Id}`)
  //     .then(response => response.json())
  //     .then(data => setAppData(data));
  // }, []);
  const[searchTerm,setSearchTerm]=useState('');
  const handleSearchInputChange=(event)=>{
    setSearchTerm(event.target.value);};
  const searchForApp=(searchTerm)=>{
    const lowerSearchTerm=searchTerm.toLowerCase();
    return allApps.find(app=>app.name.toLowerCase().includes(lowerSearchTerm))
  }
  const handleSearch=()=>{const searchTermWithoutSpaces=searchTerm.replace(/\s/g,'').toLowerCase();
      const foundApp=allApps.find((app)=>{
        const appNameWithoutSpaces=app.name.replace(/\s/g,'').toLowerCase();
        return appNameWithoutSpaces===searchTermWithoutSpaces;
      });
      if( foundApp){
       
        navigate(`/compo/appDetails3/${foundApp.Id}`)
      }else {navigate('/compo/NoAppFound')
        
      }
    }
 const handleSearchSubmit=()=>{const foundApp=searchForApp(searchTerm);
  if(foundApp){navigate(`/app/${foundApp.Id}`)}
 else{
    navigate('/compo/NoAppFound')
  }
 }
 const navigate =useNavigate();
 const handleBackToMain=()=>{
      navigate('/')
    }
  
  const renderStars = (rating) => {
   
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars>=0.5;
    const remaining=rating-fullStars;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
     
      
     
       stars.push(<FaStar key={`full-${i}`} className="text-warning" />);}
        if (remaining>0 && remaining<0.25){
          stars.push(<FaStarHalfAlt key={'quarter-half'} className="text-warning"  />);
     
       }else if (remaining>=0.25&& remaining<0.75){stars.push(<FaStarHalfAlt key={'quarter-half'} className="text-warning"/>);}
       else if(remaining>=0.75 && remaining<1){stars.push(<FaStar key={'full-plus'} className="text-warning" />);}
       const partialStarCount=remaining>0 ?1:0;
        const emptyStars =5-fullStars-partialStarCount;
        for (let i=0;i<emptyStars;i++){
          stars.push(<FaRegStar key={`empty-${i}`} className='text-secondary'/>);
        }
       //if (hasHalfStar) {
        
       // stars.push(<FaStarHalfAlt key={'half-colored'} className="text-warning" style={{opacity:0.5}} />);
      //const emptyStars=5-fullStars-(hasHalfStar?1:0);
     // for(let i=0 ;i< emptyStars ;i++){
       // stars.push(<FaStar key={`empty-${i}`} className='text-secondary'/>);
      //}
     
    
    return stars;
  };

  return (
  <div>
    <Navbar bg='primary' variant='dark' className='shadow-sm sticky-top mb-4'>
      <Container fluid className='d-flex align-items-center'>
        <div>
        <Link to='/compo/Login' className='btn btn-outline-light'>Login</Link></div>
        <span className='text-white fw-bold' style={{fontSize:'1.8rem'}}>Last Updates</span>
          <Form className='d-flex'>
            <FormControl type='search' placeholder='Search Apps' className='me-2' aria-label='Search' value={searchTerm} onChange={handleSearchInputChange}/>
            <div className='input-group-append' style={{cursor:'pointer'}} onClick={handleSearch}>
              <span className='input-group-text bg-transparent border-0 text-white'><FaSearch style={{fontSize:'1.5rem'}}/></span>
            </div>
          </Form></Container></Navbar>
        <Container>
      <Row className="mb-3">
        <Col xs="auto" className='arrow-col text-start' style={{verticalAlign:'middle',cursor:'pointer'}} onClick={handleBackToMain}>
          <FaArrowLeft size={25}  style={{verticalAlign:'middle'}}/>
          </Col>
          <Col className="text-start">
          <h1 className="mb-4 ms-2" style={{fontSize:'28px'}}>App Details</h1>
        </Col>
      </Row>

      <Row className="align-items-center mb-3">
        <Col xs="auto" className='mb-5'>
          <Image src={appData.imageUrl} alt={appData.name} roundedCircle style={{ width: '50px', height: '50px' }} />
        </Col>
        <Col className="text-start">
          <h3 style={{fontWeight:'bold'}}>{appData.name}</h3>
          <div style={{fontSize:'25px'}}>
            {renderStars(appData.rating)} 
            <span className="ms-2 text-muted">({appData.ratingCount})</span> 
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col >
       
          <a href={appData.appurl} target='_blank' style={{borderRadius:'5px',display:'inline-block',width:'auto',marginLeft:'120px'
          }}>
            <Image
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
             
              style={{ display:'block',width:'auto',height:'100px',objectFit:'contain' }}
            />
           
           
          </a>
        </Col>
      </Row>

      <hr className="mb-3" />

      <div>
        <h4 style={{marginTop:'15px' ,marginBottom:'25px',marginLeft:'10px'}}>Description</h4>
        <div className="mb-2 d-grid gap-2" >
          <div className="d-flex align-items-center">
            <div className="me-2 " style={{paddingRight:'0.5em',marginBottom:'10px',fontSize:'18px'}}>Positive</div>
           
            <ProgressBar now={appData.positivePercentage} label={ `${appData.positivePercentage}%`}style={{width:'40%', height:'20px'}} variant='success' />
            <div className="ms-2 " >{appData.positivePercentage}%</div>
          </div>
        </div>
        <div className="mb-2">
          <div className="d-flex align-items-center">
            <div className="me-2" style={{marginBottom:'15px',fontSize:'18px'}}>Negative</div>
            <ProgressBar now={appData.negativePercentage} label={ `${appData.negativePercentage}%`}style={{width:'40%', height:'20px'}} variant='danger'  />
           
            <div className="ms-2">{appData.negativePercentage}%</div>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <div className="me-2" style={{paddingRight:'0.6em',fontSize:'18px'}}>Neutral</div>
            <ProgressBar now={appData.neutralPercentage} label={ `${appData.neutralPercentage}%`}style={{width:'40%', height:'20px'}} variant='secondary'  />
            
            <div className="ms-2">{appData.neutralPercentage}%</div>
          </div>
        </div>
      
      </div>
    </Container></div>
  );
}

export default AppDetails3;

