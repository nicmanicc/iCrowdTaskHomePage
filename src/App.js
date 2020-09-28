import React from 'react';
import './App.css';

import NavBar from './components/navbar'
import HeaderImage from './components/headerImage'
import FeaturedRequesters from './components/featured-requesters/featuredRequesters'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Footer from './components/Footer/footer'



function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <HeaderImage />
      <h1 class='textCenter'>FEATURED REQUESTERS</h1>
      <Container>
        <Row>
          <FeaturedRequesters />
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
