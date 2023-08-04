import React from 'react'
import { Link } from 'react-router-dom'

const ImageTextOverlay = () => {
    return (
        <section
        className="mt-16 hero__section adult-community-image banner_2 relative adult-community z-0 flex justify-center xl:justify-center items-start bg-adult-community-image bg-no-repeat min-h-[80vh] sm:min-h-screen
        ">
        <div className="container">
            <div
                className="content flex justify-center xl:justify-end items-center xl:items-end text-white md:ms-[55%] max-w-500 mx-auto md:mx-0">
                <div
                    className="inner-block relative z-1 flex flex-col justify-center xl:justify-start items-center md:items-start text-center md:text-start before:transform before:translate-x-1/2 before:absolute before:content-[''] before:w-[502px] before:h-[502px] before:top-0 before:right-0 before:bg-red-500 before:blur-[200px] before:rounded-502 before:-z-1">
                    <p className="text-xl md:text-xl xl:text-35px leading-45 font-light">Become a Part of the</p>
                    <h2 className="text-2xl md:text-4xl xl:text-50px font-bold">
                    <span className='font-normal block'>Kaizen Globe®</span>
                    Adult Community</h2>
                    <p className="text-sm md:text-base xl:text-lg mb-4 leading-29">Looking for erotica, dating advice, and
                    information about sex? At
                    AdultFriendfinder.com, we have thousands of articles and member blogs devoted to sex, and sex
                    dating. Educate yourself on an endless number of erotic topics, and get real community member
                    input
                    on dating, fetishes, swinging, alternative dating, and much more!</p>
                    <Link className="primary_btn">Register for free now!</Link>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ImageTextOverlay