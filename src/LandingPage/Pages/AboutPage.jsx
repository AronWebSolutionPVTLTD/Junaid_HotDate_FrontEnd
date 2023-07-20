import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
    return (
        <div className='bg-black-20'>
            <div className='min-h-[700px] relative flex items-center justify-center z-1'>
                <img src='images/about-ban.png' alt='about-ban' className='absolute top-0 left-0 w-full h-full -z-1 object-cover' />
                <div className='container mx-auto text-center'>
                    <h3 className='text-4xl font-secondary_font mb-2'>Join the world's largest</h3>
                    <p className='text-5xl font-bold mb-5'>Adult Dating Site</p>
                    <Link className='primary_btn'>JOIN NOW!</Link>
                </div>
            </div>
            <section className="text-with-image  text-white py-6 md:py-8 lg:py-20 meet-member relative z-0">
                <div className="container mx-auto">
                    <div className="flex flex-wrap gap-y-10 pt-10 lg:pt-0">
                        <div className="w-full lg:w-2/5 left-block flex justify-center text-center lg:text-start items-center">
                            <div className="inner-block max-w-[415px]">
                                <p className="text-2xl md:text-3xl lg:text-35px lg:leading-45 font-light max-w-[270px] mb-5 mx-auto lg:mx-0">Hot Date Adult Finder</p>
                                <p className="text-sm md:text-base xl:text-lg mb-5 lg:leading-29 mx-auto lg:mx-0">is about the joy of being an adult… to live the life you want to live without caring what other people may think about you. We are the social networking site that treats you like an adult. Express yourself.</p>
                                <Link className="primary_btn">JOIN NOW!</Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-3/5 right-block flex justify-center items-center rounded-2xl lg:rounded-58">
                            <div className="right-block w-full rounded-2xl lg:rounded-58">
                                <img src="landingPage/images/couple-love-kissing-bed-home.png" className="w-full rounded-2xl lg:rounded-58" alt="partner" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-5 mb-0'>
                <div className='container mx-auto'>
                    <div className='gradient rounded-50px p-[2px] text-center'>
                        <div className='rounded-50px bg-black p-5 py-14'>
                            <h3 className='text-2xl lg:text-4xl font-light mb-8 max-w-5xl mx-auto'>Since 1996, our mission has been to help you make connections with other interesting, sexy, and fun people.</h3>
                            <p className='text-base leading-8 lg:text-lg mb-8 max-w-6xl mx-auto'>Sexuality is diverse and personal. We provide a world where you can get the most out of your sexuality. Our mission at AdultFriendFinder is to create opportunities and experiences to live more passionately.We unite people who love the freedom of embracing their sensual side. The real pleasure of Adult Friend Finder is that you become a part of a wild yet caring community where passion, exploration, and engagement are key.Find your dream lover tonight. Indulge your imagination, connect with fellow members, and take your passion to the next level.. You deserve people who embrace your gender, your appearance, and turn ons. We're here for you.You’re unique and passionate.Level up your sexual life. We’re here for you.Your passion is a gift. Embrace the joy of life.We can tell that this is the start of a passionate friendship.Welcome to your new life. Welcome to AdultFriendFinder.</p>
                            <Link className='primary_btn'>JOIN NOW!</Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className=''>
                <div className="audit-dating__block relative py-4 md:py-16 container mx-auto">
                    <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 py-71px">
                    <img
                        src="images/avn_award2-1.png"
                        alt="award"
                        className="max-w-200px md:max-w-full"
                    />
                    <h2 className="text-white text-2xl sm:text-3xl xl:text-40px">
                        #1 Adult Dating Site
                    </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage