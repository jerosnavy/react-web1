import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src='https://res.cloudinary.com/e-shopping-snavy/image/upload/v1618386490/animal1_qimpr3.jpg' alt='snavys logo' />
            <h1>ADVENTURE AWAITS</h1>
            <p>what are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRILER <i className='far fa-play-circle'/></Button>
            </div>
        </div>
    )
}

export default HeroSection
