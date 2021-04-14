import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function Card() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destination!</h1>
            <div className='cards__container'>
                <div className='cards__wraper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='https://res.cloudinary.com/e-shopping-snavy/image/upload/v1618386490/sea3_qua9nc.jpg'
                        text='Explore the beautiful place in Ocean around the world'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src='https://res.cloudinary.com/e-shopping-snavy/image/upload/v1618386494/maunt1_vxa9nw.jpg'
                        text='Travel to the Kalisimbi Mountain in Northern Province of Rwanda'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='https://res.cloudinary.com/e-shopping-snavy/image/upload/v1618386493/animal2_fbxfaa.jpg'
                        text='Visit Akagera Park and see the beautifull rare animals in Rwanda'
                        label='Mystery'
                        path='/services'
                        />
                        <CardItem
                        src='https://res.cloudinary.com/e-shopping-snavy/image/upload/v1618387810/hotspring1_imzysm.jpg'
                        text='Explore beautifull HotSpring'
                        label='Adventure'
                        path='/products'
                        />
                        <CardItem
                        src='https://res.cloudinary.com/e-shopping-snavy/image/upload/v1618387818/waterfall1_toqtli.jpg'
                        text='Explore beautifull waterfall in Rwanda'
                        label='Adrenaline'
                        path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
