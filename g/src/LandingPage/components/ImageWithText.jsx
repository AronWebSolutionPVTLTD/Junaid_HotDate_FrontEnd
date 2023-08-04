import React from 'react'
import { Link } from 'react-router-dom'

const ImageWithText = () => {
    return (
        <section
        className="text-with-image text-white py-6 md:py-8 lg:py-20 find_partner relative z-0 ">
        <div className="container mx-auto relative z-0 before:absolute before:content-[''] before:w-[502px] before:h-[502px] before:right-0
        before:bg-no-repeat before:bg-cover before:bg-yellow before:blur-[150px] before:rounded-full before:bottom-[-20%] before:z-[-2]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="left-block flex justify-center lg:justify-end items-center">
                    <div className="inner-block max-w-500">
                        <p className="text-xl xl:text-35px sm:leading-45 font-light lg:max-w-[360px]">Find Partner, Hook-up, and Chat
                            Live at</p>
                        <h2 className="text-2xl md:text-4xl xl:text-50px sm:leading-75 font-bold mb-3 sm:mb-0">Kaizenglobe.com!</h2>
                        <p className="text-sm md:text-base xl:text-lg mb-4 leading-29">Millions of members worldwide and in
                            India * 48,657 Online Now!
                            Looking for sex? Hoping to meet someone special for a hot, sexual relationship or even just
                            a
                            quick fling? Sign up at Adult FriendFinder.com to access our thriving lifestyle community
                            and
                            satiate your need for amazing sexual experiences. Kaizen Glober has helped millions of
                            people
                            find traditional partners, swinger groups, threesomes, and a variety of other alternative
                            partners.</p>
                        <Link className="primary_btn">Sign Up for Free Now!</Link>
                    </div>
                </div>
                <div className="right-block flex justify-center items-center order-first sm:order-2">
                    <div className="right-block">
                        <img src="landingPage/images/partner.png" className="max-w-full" alt="partner" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ImageWithText