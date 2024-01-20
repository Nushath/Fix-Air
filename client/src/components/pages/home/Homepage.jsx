import React from 'react';
import { Tab, Tabs, Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,MDBBtn,MDBInput } from 'mdb-react-ui-kit';
import ChatBot from 'react-simple-chatbot'
import {Link} from "react-router-dom";
import './Homepage.css'
import RadioButton from '../../buttons/RadioButton';
import card1 from '../../../assets/images/card images/card1.jpg' 
import card2 from '../../../assets/images/card images/card2.jpg' 
import card3 from '../../../assets/images/card images/card3.jpg' 
import card4 from '../../../assets/images/card images/card4.jpg' 
import card5 from '../../../assets/images/card images/card5.jpg'
import card6 from '../../../assets/images/card images/card6.jpg'
import card7 from '../../../assets/images/card images/card7.jpg'
import card8 from '../../../assets/images/card images/card8.jpg'


const Homepage = () => {
  

 //Show username on login



//  BOOKING ICONS
 const flight = <i class="bi bi-airplane-fill"></i>
 const briefcase = <i class="bi bi-briefcase-fill"></i>
 const checkin= <i class="bi bi-list-check"></i>
 const status = <i class="bi bi-clock-fill"></i>
 const rightarrow = <i class="bi bi-arrow-right"></i>

// DROPDOWNS TO BOOK FLIGHT 





  return (
    <main>
     
    {/* WELCOME TEXT */}
      <h1 className='welcome'>Fly Beyond Boundaries</h1>
      <p className='desc'>Find your next flight with us and enjoy the comfort of flying in style.</p>

    {/* CHATBOT */}
    <ChatBot
    steps={[
      
      {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!',
        end: true,
      },
    ]}

    floating={true}
  />

    {/* BOOKING  */}
    <section id='booking'>
      <div className='book'>
      <Tabs
      defaultActiveKey="flight-book"
      id="justify-tab-example"
      className="mb-3"
      justify
      >
      <Tab className='tabs' eventKey="flight-book" title={<span>{flight} Book a Flight</span>}>
      <Form id='booking-tabs'>
        <Container className='container-home'>
          {/* <RadioButton>{RadioButton}</RadioButton> */}
          <Row className='row-home'>
            <RadioButton>{RadioButton}</RadioButton>
            <Col>
              <label className='labels'>Flying from 
                <input type='text' id='departure' name='departure' className='form-control' placeholder='Departure' required />
              </label>
                &nbsp;&nbsp;&nbsp;&nbsp;
              <label className='labels'>Flying to
                <input type='text' id='destination' name='destination' className='form-control' placeholder='Destination' required />
              </label>
                &nbsp;&nbsp;&nbsp;&nbsp;
              <label className='labels'>Departure Date
                <input type='date' id='departure-date' name='departure-date' className='form-control' required />
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <label className='labels'>Return Date
                <input type='date' id='return-date' name='return-date' className='form-control' required />
              </label>
            </Col>

            <Row>
              {/* Code for Passanger */}
            <label className='labels'>Passanger
              <input name=""  placeholder='From' required/>
            </label>
            <label className='labels'>
              Cabin Class
              <select id='class' name='class' className='selectedClass' required>
                <option value="economy">Economy Class</option>
                <option value="premium">Premium Economy Class</option>
                <option value="business">Business Class</option>
                <option value="first">First Class</option>
              </select>

            </label>
            <button className='labels' >
              <Link type='submit' to="/booking-results">SEARCH</Link>
            </button>
            </Row>            
          </Row>
        </Container>
      </Form>
        
      </Tab>
      <Tab className='tabs' eventKey="manage-book" title={<span>{briefcase} Manage Booking</span>}>
        <Form id='booking-form2'>
        
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label className='labels'>Your Last Name
              <input type='text' id='pass-name' name='pass-name' className='form-control' placeholder='As in the Passport' required />
            </label>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label className='labels'>Booking Reference
              <input type='text' id='book-refer' name='book-refer' className='form-control' placeholder='06 digit code on your Ticket' required />
            </label>

            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type='submit' className='labels'>Search</button>
        </Form>
      </Tab>

      <Tab className='tabs' eventKey="check-in" title={<span>{checkin} Check in</span>}>
        <Form id='booking-form3'>

          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className='labels'>Your Last Name
            <input type='text' id='pass-name' name='pass-name' className='form-control' placeholder='As in the Passport' required />
          </label>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label className='labels'>Booking Reference
            <input type='text' id='book-refer' name='book-refer' className='form-control' placeholder='06 digit code on your Ticket' required />
          </label>

          &nbsp;&nbsp;&nbsp;&nbsp;
          <button type='submit' className='labels'>Search</button>
        </Form>
      </Tab>

      <Tab className='tabs' eventKey="flight-status" title={<span>{status} Flight Status</span>}>
        <Form id='booking-form4'>

          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className='labels'>Flight Number URL
            <input type='text' id='flight-num' name='flight-num' className='form-control' placeholder='Flight Number URL' required />
          </label>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label className='labels'>Date
            <input type='text' id='date' name='date' className='form-control' placeholder='Enter the Date' required />
          </label>

          &nbsp;&nbsp;&nbsp;&nbsp;
          <button type='submit' className='labels'>Search</button>
        </Form>
      </Tab>
    </Tabs>
      </div>
    </section>

    {/* EXPLORE */}
    <section id='explore'>
      <h1 className='explore-head'>Featured Destinations</h1>
      <p className='explore-para'>From iconic landmarks to hidden gems, embark on a Journey of Discovery with our curated selection of featured Destinations</p>
    
      <div className='card-group'>
        <Card className='Card'>
          <Card.Img className='Card-Img' variant="top" src={card1} />
            <Card.Body className='Card-body'>
              <Card.Title className='Card-Title'>France</Card.Title>
              <Card.Text className='Card-Text'>
                Become a Member of Fixs Air & Enjoy flight rewards, upgrades, 
                extra baggages & other exclusive benefits
              </Card.Text>
              <Button className='Card-Btn'>Read More &nbsp;<span>{rightarrow}</span></Button>
            </Card.Body>
        </Card>
        <Card className='Card'>
          <Card.Img className='Card-Img' variant="top" src={card2} />
            <Card.Body className='Card-body'>
              <Card.Title className='Card-Title'>Bali</Card.Title>
              <Card.Text className='Card-Text'>
                Best Place in the World for Relaxation & to learn Culture
              </Card.Text>
              <Button className='Card-Btn'>Read More &nbsp;<span>{rightarrow}</span></Button>
            </Card.Body>
        </Card>
        <Card className='Card'>
          <Card.Img className='Card-Img' variant="top" src={card3} />
            <Card.Body className='Card-body'>
              <Card.Title className='Card-Title'>Dubai</Card.Title>
              <Card.Text className='Card-Text'>
                Explore a New World in Dubai. Exciting Activities & Many more Waiting for you.
              </Card.Text>
              <Button className='Card-Btn'>Read More &nbsp;<span>{rightarrow}</span></Button>
            </Card.Body>
        </Card>
        <Card className='Card'>
          <Card.Img className='Card-Img' variant="top" src={card4} />
            <Card.Body className='Card-body'>
              <Card.Title className='Card-Title'>Egypt</Card.Title>
              <Card.Text className='Card-Text'>
                A Land of Ancient Traditions & Wounders, beckons to discover it's rich Heritage.
              </Card.Text>
              <Button className='Card-Btn'>Read More &nbsp;<span>{rightarrow}</span></Button>
            </Card.Body>
        </Card>
      </div>
    </section>

    {/* PROMOTION & DEALS */}
    <section id='promotion & deals'>
      <h1 className='promo-head'>Promotion & Deals</h1>
      <p className='promo-para'>
        Celebrate the joy of travel with our Exclusive special Offers. Discover unbeatable deals 
        on flights & Packages that will turn your Dream gateway into reality.
      </p>

      <div className='card-group2'>
        <Row>
          <Col>
          <Card className='Card2'>
            <Card.Img className='Card-Img2'variant="top" src={card5} />
            <Card.Body className='Card-body2'>
              <Card.Title className='Card-Title2'>Solo Traveler Discount</Card.Title>
              <Card.Text className='Card-Text2'>
                Need Time for Yourself? Get in touch with our Exclusive Solo Traveler Offer. Grab it Now!
              </Card.Text>
              <Button className='Card-Btn2'>Read More &nbsp;<span>{rightarrow}</span></Button>
            </Card.Body>
          </Card>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Card className='Card2'>
            <Card.Img className='Card-Img2'variant="top" src={card7} />
            <Card.Body className='Card-body2'>
              <Card.Title className='Card-Title2'>Explore Exotic Destinations</Card.Title>
              <Card.Text className='Card-Text2'>
                Unearth hidden Gems with our Special Offers to Exotic Locations. The World is your Oyster.
              </Card.Text>
              <Button className='Card-Btn2'>Read More &nbsp;<span>{rightarrow}</span></Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className='Card2'>
            <Card.Img className='Card-Img2'variant="top" src={card6} />
            <Card.Body className='Card-body2'>
              <Card.Title className='Card-Title2'>Family-Friendly Discount</Card.Title>
              <Card.Text className='Card-Text2'>
                Traveling with the loved ones? Enjoy Saving that makes family adventures even more Affordable.
              </Card.Text>
              <Button className='Card-Btn2'>Read More &nbsp;<span>{rightarrow}</span></Button>
            </Card.Body>
          </Card>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Card className='Card2'>
            <Card.Img className='Card-Img2'variant="top" src={card8} />
            <Card.Body className='Card-body2'>
              <Card.Title className='Card-Title2'>Student Special</Card.Title>
              <Card.Text className='Card-Text2'>
                Just Graduated? Fly with us to your Future Destinations. 
              </Card.Text>
              <Button className='Card-Btn2'>Read More &nbsp;<span>{rightarrow}</span></Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>





      </div>








    </section>

    {/* FOOTER */}
    <MDBFooter bgColor='black' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='footer-follow'>Follow Us on:</span>
        </div>

        <div>
        <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' className='about-us' />
                About us
              </h6>
              <p className='slogan'>
              FIXS Aviation Limited, DBA FiXsAir, is a Sri Lankan airline. It operates scheduled passenger services within Sri Lanka, as well as international cargo flights to several cities in the Middle East, Asia and Africa, and also operates charter flights to India.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>SERVICES</h6>
              <p>
                <a href='#!' className='text-reset'>
                  AIR CARGO
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  TRAINING
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  SRI LANKAN HOLDINGS
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  SRI LANKAN CATERING
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Colombo, Sri Lanka
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                fixsair@.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <form action=''>
          <MDBRow>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0 email-add'>
              <MDBInput type='text' id='form5Example2' label='Email address' placeholder='Enter Email Address'/>
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn>Subscribe</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://fixAir.com/'>
          FIXSAIR.COM
        </a>
      </div>
    </MDBFooter>


    </main>
  )
}


export default Homepage
