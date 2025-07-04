import { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Navbar, Form, FormControl, ProgressBar, Card } from 'react-bootstrap';
import { FaArrowLeft, FaBars, FaFontAwesome, FaRegStar, FaSearch, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link, BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
//import AppDetails3 from './compo/AppDetails3';

function AppMain4() {
  //const [app,setApp]=useState('')
  const [isPressed, setIsPressed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 // const navigate = useNavigate();
  const [appData, setAppData] = useState([{
    name: 'Health Connect',
    rating: 2.80,
    ratingCount: 1234, // مثال لعدد المقيمين
    imageUrl: 'URL_صورة_التطبيق',
    Id: 1,
    description: "   Symptom checker using artificial intelligence and personalized medical information",
    positiverating: '80'
  },
  {
    name: 'Health Connect',
    rating: 2.80,
    ratingCount: 1234, // مثال لعدد المقيمين
    imageUrl: 'URL_صورة_التطبيق',
    description: '  Symptom checker using artificial intelligence and personalized medical information',
    positiverating: '80',
    Id:2,
    appurl: 'http://play.google.com/store/apps/details?id=com.google.andriod.apps.healthdata'
  }])
  const [allApps,setAllApps]=useState([{Id:1,name:'Health Connect'}])
  const handlePress = () => { setIsPressed(true) };
  const handleRelease = () => { setIsPressed(false) };
  const handleSearchChange = (event) => { setSearchTerm(event.target.value) }
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
  const handleSearchInputChange=(event)=>{
      setSearchTerm(event.target.value);};
  const searchForApp=(searchTerm)=>{
  const lowerSearchTerm=searchTerm.toLowerCase();
      return allApps.find(app=>app.name.toLowerCase().includes(lowerSearchTerm))
    }
  const[searchTerm,setSearchTerm]=useState('');
  const handleSearchSubmit=()=>{const foundApp=searchForApp(searchTerm);
    if(foundApp){navigate(`/compo/AppDetails3/${foundApp.Id}`)}
    else{
      navigate('/compo/NoAppFound')
    }
   }
  const navigate =useNavigate();
  const handleBackToMain=()=>{
        navigate('/compo/AppMain4')
      }
  const handleCardClick=(Id)=>{navigate(`/compo/AppDetails3/${Id}`)}
 
  const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const remaining = rating - fullStars;
  const stars = [];
   for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-warning" />);
    }
    if (remaining > 0 && remaining < 0.25) {
      stars.push(<FaStarHalfAlt key={'quarter-half'} className="text-warning" />);

    } else if (remaining >= 0.25 && remaining < 0.75) { stars.push(<FaStarHalfAlt key={'quarter-half'} className="text-warning" />); }
    else if (remaining >= 0.75 && remaining < 1) { stars.push(<FaStar key={'full-plus'} className="text-warning" />); }
    const partialStarCount = remaining > 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - partialStarCount;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className='text-secondary' />);
    } return stars;
  };

  // useEffect(() => {
  // Replace '/api/apps' with your actual API endpoint
  // fetch('/api/apps')
  //.then(response => {
  //if (!response.ok) {
  //throw new Error(`HTTP error! status: ${response.status}`);
  // }
  //return response.json();
  //})
  //.then(data => {
  //setAppData(data);
  //setLoading(false);
  //})
  //.catch(error => {
  //setError(error);
  //setLoading(false);
  //});
  //}, []);

  //if (loading) {
  //return <div>Loading apps...</div>;
  //}

  //if (error) {
  // return <div>Error loading apps: {error.message}</div>;
  //}

  return (
    <div>
      <Navbar bg='primary' variant='dark' className='shadow-sm sticky-top mb-5'>
        <Container fluid className='d-flex align-items-center'>
          <div>
            <Link to='/compo/Login' className='btn btn-outline-light'>Login</Link></div>
          <span className='text-white fw-bold' style={{ fontSize: '1.8rem' }}>Last Updates</span>
          <Form className='d-flex' inline onSubmit={handleSearchSubmit}>
            <FormControl type='search' placeholder='Search Apps' className='me-2' aria-label='Search' value={searchTerm} onChange={handleSearchInputChange} />
            <div className='input-group-append' style={{ cursor: 'pointer' }} onClick={handleSearch}>
              <span className='input-group-text bg-transparent border-0 text-white'><FaSearch style={{fontSize:'1.5rem'}}/></span>
               
            </div>
          </Form></Container></Navbar>
      <Container className="mt-4" >
        <Row xs={1} md={1} lg={1} className="g-4">
          {appData.map(appData => (
            <Col key={appData.Id}  style={{cursor:'pointer'}} className='col-12  '>
              <Link to={`/compo/AppDetails3/${appData.Id}`} style={{textDecoration:'none',color:'inherit'}}>
              < div className='card shadow-sm bg-light' style={{ height: '175px', cursor: 'pointer', 
                boxShadow: '0 4px 8px rgba(0,123,255,0.5)' }} >
                < div className='card-Body d-flex   align-items-center justify-content-start' style={{ height: '100%' }}>
                  <div className="me-3">
                    <img src={appData.imageUrl} alt={appData.name} style={{ width: '50px', height: '50px', objectFit: 'contain', marginRight: '60px', marginLeft: '20px' }} />
                  </div>
                  <div className='flex-grow-1 '>
                    <Card.Title className="mb-1 fw-bold text-dark " style={{ fontSize: '25px', marginBottom: '20px', display: 'flex', marginLeft: '60px',marginTop:'10px' }}>{appData.name}</Card.Title>
                    <Card.Text className="small text-muted" style={{ fontSize: '15px', flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap', width: '50%' }}>{appData.description}</Card.Text>
                    <div className="mt-2 text-warning" style={{ display: 'flex', marginLeft: '90px', fontSize: '20px',marginBottom:'20px' }}>
                      {renderStars(appData.rating)} </div></div>
                  <div className='ms-3 text-secondary fw-bold' style={{ marginTop: '90px', marginRight: '30px', fontSize: '20px', display: 'flex', justifyContent: 'flex-end' }}>{appData.positiverating}%</div>
                </div></div>
                </Link>
            </Col>
          ))}
        </Row>
      </Container></div>
  );
}

export default AppMain4;

