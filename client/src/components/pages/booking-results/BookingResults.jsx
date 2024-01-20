import React from 'react'
import './BookingResults.css'
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BookingResults = () => {

  const flight = <i class="bi bi-airplane-fill"></i>

  

  return (
    <div className='booking-result'>
      <div className="separator">{flight} &nbsp;&nbsp;  
        Select Flight (05 Options)
      </div>
      <p className='p'>All times are displayed Local for Selected city</p>
      <div className='container-1'>
        <Container fluid sd>
          <Row>
            <h3>1. Total LKR 67,000 <span>For 01 Passenger</span></h3>
          </Row>
          <Row className='row-1'>
            <Col className='col-1'>25th February 2024
              <h4>Outbound</h4>
            </Col>
            <Row className='row-11'>
              <Col>
                CMB <br />
                <h3>02:55</h3>
              </Col>
              <Col>
                02 Stops
              </Col>
              <Col>
                CHH <br />
                <h3>19:10</h3>
              </Col>
              <Col>
                Connections <br />
                DXB,BOM
              </Col>
              <Col>
                Class <br />
                Economy
              </Col>
            </Row>
              <Col className='col-1'>
                <p>UK0563 Operated by Vistara</p>
              </Col>
          </Row>

          <Row className='row-1'>
            <Col className='col-1'>10th March 2024
              <h4>Inbound</h4>
            </Col>
            <Row className='row-11'>
              <Col>
                CHH <br />
                <h3>09:25</h3>
              </Col>
              <Col>
                02 Stops
              </Col>
              <Col>
                CMB <br />
                <h3>21:55</h3>
              </Col>
              <Col>
                Connections <br />
                DXB,BOM
              </Col>
              <Col>
                Class <br />
                Economy
              </Col>
            </Row>
              <Col className='col-1'>
                <p>SG0057 Operated by SpiceJet</p>
              </Col>
          </Row>
          <br />
          <Row>
            <Col className='col-10'>
              <p>Fare:&nbsp;&nbsp;&nbsp;LKR 67,000 + LKR 43,393 taxes and fares</p>
            </Col>
            <Col className='col-2'>
              LKR 110,393
              <br /><br />
              <button className='selectbtn'>
                <Link className='selectbtn' to="/seat-selection">SELECT</Link>
              </button>
            </Col>
          </Row>
          
          <hr />

                                        {/* SECOND PRICE  */}
          <Row>
            <h3>2. Total LKR 60,000 <span>For 01 Passenger</span></h3>
          </Row>
          <Row className='row-1'>
            <Col className='col-1'>25th February 2024
              <h4>Outbound</h4>
            </Col>
            <Row className='row-11'>
              <Col>
                CMB <br />
                <h3>10:00</h3>
              </Col>
              <Col>
                02 Stops
              </Col>
              <Col>
                CHH <br />
                <h3>12:00</h3>
              </Col>
              <Col>
                Connections <br />
                CMB,DMM
              </Col>
              <Col>
                Class <br />
                Economy
              </Col>
            </Row>
              <Col className='col-1'>
                <p>SG2341 Operated by SpiceJet</p>
              </Col>
          </Row>

          <Row className='row-1'>
            <Col className='col-1'>10th March 2024
              <h4>Inbound</h4>
            </Col>
            <Row className='row-11'>
              <Col>
                CHH <br />
                <h3>09:25</h3>
              </Col>
              <Col>
                02 Stops
              </Col>
              <Col>
                CMB <br />
                <h3>20:50</h3>
              </Col>
              <Col>
                Connections <br />
                DXB,BOM
              </Col>
              <Col>
                Class <br />
                Economy
              </Col>
            </Row>
              <Col className='col-1'>
                <p>SG0057 Operated by SpiceJet</p>
              </Col>
          </Row>
          <br />
          <Row>
            <Col className='col-10'>
              <p>Fare:&nbsp;&nbsp;&nbsp;LKR 60,000 + LKR 43,393 taxes and fares</p>
            </Col>
            <Col className='col-2'>
              LKR 93,393
              <br /><br />
              <button className='selectbtn'>
                <Link className='selectbtn' to="/seat-selection">SELECT</Link>
              </button>
            </Col>
          </Row>

          <hr />

          {/* THIRD PRICE  */}
          <Row>
            <h3>3. Total LKR 75,000 <span>For 01 Passenger</span></h3>
          </Row>
          <Row className='row-1'>
            <Col className='col-1'>25th February 2024
              <h4>Outbound</h4>
            </Col>
            <Row className='row-11'>
              <Col>
                CMB <br />
                <h3>05:30</h3>
              </Col>
              <Col>
                02 Stops
              </Col>
              <Col>
                CHH <br />
                <h3>07:20</h3>
              </Col>
              <Col>
                Connections <br />
                DXB,BOM
              </Col>
              <Col>
                Class <br />
                Economy
              </Col>
            </Row>
              <Col className='col-1'>
                <p>EK2124 Operated by flydubai</p>
              </Col>
          </Row>

          <Row className='row-1'>
            <Col className='col-1'>10th March 2024
              <h4>Inbound</h4>
            </Col>
            <Row className='row-11'>
              <Col>
                CHH <br />
                <h3>20:25</h3>
              </Col>
              <Col>
                02 Stops
              </Col>
              <Col>
                CMB <br />
                <h3>23:55</h3>
              </Col>
              <Col>
                Connections <br />
                DXB,BOM
              </Col>
              <Col>
                Class <br />
                Economy
              </Col>
            </Row>
              <Col className='col-1'>
                <p>SG0057 Operated by SpiceJet</p>
              </Col>
          </Row>
          <br />
          <Row>
            <Col className='col-10'>
              <p>Fare:&nbsp;&nbsp;&nbsp;LKR 75,000 + LKR 43,393 taxes and fares</p>
            </Col>
            <Col className='col-2'>
              LKR 118,393
              <br /><br />
              <button className='selectbtn'>
                <Link className='selectbtn' to="/seat-selection">SELECT</Link>
              </button>
            </Col>
          </Row>

          <hr />

          {/* FOURTH PRICE  */}
          <Row>
            <h3>4. Total LKR 80,000 <span>For 01 Passenger</span></h3>
          </Row>
          <Row className='row-1'>
            <Col className='col-1'>25th February 2024
              <h4>Outbound</h4>
            </Col>
            <Row className='row-11'>
              <Col>
                CMB <br />
                <h3>02:55</h3>
              </Col>
              <Col>
                02 Stops
              </Col>
              <Col>
                CHH <br />
                <h3>19:10</h3>
              </Col>
              <Col>
                Connections <br />
                DXB,BOM
              </Col>
              <Col>
                Class <br />
                Business
              </Col>
            </Row>
              <Col className='col-1'>
                <p>UK0563 Operated by Vistara</p>
              </Col>
          </Row>

          <Row className='row-1'>
            <Col className='col-1'>10th March 2024
              <h4>Inbound</h4>
            </Col>
            <Row className='row-11'>
              <Col>
                CHH <br />
                <h3>09:25</h3>
              </Col>
              <Col>
                02 Stops
              </Col>
              <Col>
                CMB <br />
                <h3>21:55</h3>
              </Col>
              <Col>
                Connections <br />
                DXB,BOM
              </Col>
              <Col>
                Class <br />
                Business
              </Col>
            </Row>
              <Col className='col-1'>
                <p>SG0057 Operated by SpiceJet</p>
              </Col>
          </Row>
          <br />
          <Row>
            <Col className='col-10'>
              <p>Fare:&nbsp;&nbsp;&nbsp;LKR 67,000 + LKR 43,393 taxes and fares</p>
            </Col>
            <Col className='col-2'>
              LKR 110,393
              <br /><br />
              <button className='selectbtn'>
                <Link className='selectbtn' to="/seat-selection">SELECT</Link>
              </button>
            </Col>
          </Row>

          <hr />

          {/* FIFTH PRICE  */}
          <Row>
            <h3>5. Total LKR 76,000 <span>For 01 Passenger</span></h3>
          </Row>
          <Row className='row-1'>
            <Col className='col-1'>25th February 2024
              <h4>Outbound</h4>
            </Col>
            <Row className='row-11'>
              <Col>
                CMB <br />
                <h3>02:55</h3>
              </Col>
              <Col>
                02 Stops
              </Col>
              <Col>
                CHH <br />
                <h3>19:10</h3>
              </Col>
              <Col>
                Connections <br />
                DXB,BOM
              </Col>
              <Col>
                Class <br />
                Economy
              </Col>
            </Row>
              <Col className='col-1'>
                <p>UK0563 Operated by Vistara</p>
              </Col>
          </Row>

          <Row className='row-1'>
            <Col className='col-1'>10th March 2024
              <h4>Inbound</h4>
            </Col>
            <Row className='row-11'>
              <Col>
                CHH <br />
                <h3>09:25</h3>
              </Col>
              <Col>
                02 Stops
              </Col>
              <Col>
                CMB <br />
                <h3>21:55</h3>
              </Col>
              <Col>
                Connections <br />
                DXB,BOM
              </Col>
              <Col>
                Class <br />
                Business
              </Col>
            </Row>
              <Col className='col-1'>
                <p>SG0057 Operated by SpiceJet</p>
              </Col>
          </Row>
          <br />
          <Row>
            <Col className='col-10'>
              <p>Fare:&nbsp;&nbsp;&nbsp;LKR 76,000 + LKR 43,393 taxes and fares</p>
            </Col>
            <Col className='col-2'>
              LKR 119,393
              <br /><br />
              <button className='selectbtn'>
                <Link className='selectbtn' to="/seat-selection">SELECT</Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>    
  )
}

export default BookingResults
