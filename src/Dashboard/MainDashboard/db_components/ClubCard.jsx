import React from 'react'
import {BsChevronRight} from 'react-icons/bs'

const ClubCard = () => {
    return (
        <div className='w-full cursor-pointer p-3 bg-light-grey rounded-2xl flex flex-wrap sm:grid grid-cols-2'>
            <div className='w-2/5 sm:w-full'>
                <img src="images/club-img.png" alt="event-img" className='w-full object-cover aspect-11/10 rounded-2xl' />
            </div>
            <div className='w-3/5 sm:w-full px-4 pr-6 grid content-between relative'>
                <div className=''>
                    <h3 className='text-base sm:text-lg sm:leading-5 break-all max-w-[100px]'>Hot Wifes Cuckholds</h3>
                    <span className='text-xs'>by Ritul</span>
                </div>
                <div className='grid text-[10px] gap-y-1'>
                    <p className='flex items-center gap-1 font-light'>
                        <img src="images/loc-icon.png" alt="Location-icon" />
                        Delhi, IND
                    </p>
                    <p className='flex items-center gap-1 font-light'>
                        <img src="images/group-icon.png" alt="Group" />
                        186
                    </p>
                    <p className='flex items-center gap-1 font-light'>
                        <img src="images/date-icon.png" alt="Group" />
                        Since Aug 16, 2022
                    </p>
                </div>
                <span className='flex text-base absolute top-1/2 right-0 transform -translate-y-1/2'><BsChevronRight /></span>
            </div>
        </div>
    )
}

export default ClubCard