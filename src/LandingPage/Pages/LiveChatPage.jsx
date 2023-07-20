import React from 'react'
import MemberBroadcastCard from '../components/MemberBroadcastCard'

const LiveChatPage = () => {
    return (
        <div className='bg-black-20'>
            <div className='live_chat_sec min-h-[700px] relative flex items-end justify-start z-1'>
                <img src='landingPage/images/live-chat-banner.png' alt='live-chat-banner' className='absolute top-0 left-0 w-full h-full -z-1 object-cover object-center' />
                <div className='relative max-w-7xl mx-auto pb-5 sm:pb-20 px-5 z-1'>
                    <h3 className='text-2xl sm:text-4xl font-secondary_font mb-2'>Live Member Webcams & Chat</h3> 
                    <p className='text-3xl sm:text-5xl font-bold mb-2 max-w-xl'>on Kaizen Globe Adult Dating Site</p>
                    <p className='text-sm sm:text-lg'>Watch live member cams and indulge in hot live sex chat at AdultFriendFinder.com. Our streaming webcams with live chat enable our members to connect live online no matter their location. Cam to cam sessions take online sex dating and cybersex chat to new interactive levels. Whether you are a man, woman, transgender or swinger couple, Adult Friend Finder member cams can connect you with partners eager to share your fantasies. Join the fun with thousands of members online right now!</p>
                </div>
            </div>
            <div className='py-10'>
                <div className='container mx-auto'>
                    <div className='text-center'> 
                        <h3 className='text-2xl md:text-5xl font-bold mb-3'>Real Members Broadcasting</h3>
                        <p className='text-base md:text-lg'>In 5 minutes, you can be chatting live via webcam with some of the hottest people in the world. It's happening 24x7 on AdultFriendFinder.com.
                            <strong className='block'>120,202,200* active members worldwide | 118,691 new photos this week | 34,514* members online now!</strong>
                        </p>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 mt-10'>
                        <MemberBroadcastCard />
                        <MemberBroadcastCard />
                        <MemberBroadcastCard />
                        <MemberBroadcastCard />
                        <MemberBroadcastCard />
                    </div>
                </div>
            </div>
            <div className="audit-dating__block relative py-4 md:py-16 md:pt-0 container mx-auto">
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
    )
}

export default LiveChatPage