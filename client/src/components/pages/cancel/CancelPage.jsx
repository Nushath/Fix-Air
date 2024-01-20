import React from 'react'
import './CancelPage.css'
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap'

const CancelPage = () => {
  return (
    <div className='cancel-page'>
        <div className='cancel-page1'>
            <h1 className="cancel-head">
                We're sorry to see you go
            </h1>

            <Button className="continue-btn">
                <Link to="/" className="link-text">Continue</Link>
            </Button>
        </div>
    </div>
  )
}

export default CancelPage
