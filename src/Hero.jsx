import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context'

const Hero = () => {
    const {closeSubmenu} = useGlobalContext();

    return (
        <section className="hero" onMouseOver={closeSubmenu}>
            <div className="hero-center">
                <article className='hero-info'>
                    <h1>Payments infrasctucture for the internet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt aperiam quo
                        dicta quas autem architecto distinctio vitae quia tempore quaerat doloribus,
                        voluptates pariatur magnam assumenda id accusantium repudiandae commodi
                        consectetur molestiae praesentium omnis.</p>
                    <button className='btn'>Start Now</button>
                </article>
                <article className='hero-images'>
                    <img src={phoneImg} className='phone-img' alt="phone" srcSet=""/>
                </article>
            </div>
        </section>
    )
}

export default Hero
