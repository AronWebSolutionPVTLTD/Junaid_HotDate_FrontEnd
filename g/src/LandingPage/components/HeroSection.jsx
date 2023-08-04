import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <section className='relative min-h-[80vh] sm:min-h-[95vh] rounded-b-2xl sm:rounded-b-50px hero_section z-[99] flex items-center'>
            {/* <div className='w-7/12 h-full relative'>
                <img src='landingPage/images/hero-img.png' className='block w-full h-full object-cover rounded-bl-50px' />
            </div> */}
            <div className='container mx-auto relative'>
                <div className='text-white max-w-xs sm:max-w-470px sm:ml-auto'>
                    <p className='text-2xl sm:text-40px font-secondary_font'>Join the world's largest</p>
                    <h3 className='text-3xl sm:text-5xl font-bold'>dating and social network for adults.</h3>
                    <Link className='uppercase primary_btn mt-5'>Join now</Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection