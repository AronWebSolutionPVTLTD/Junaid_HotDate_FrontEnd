import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './eventCard.css'

const EventCard = () => {
    const [startDate, setDate] = useState(new Date)
    const defaultEndDate = new Date()
    const today = new Date()
    defaultEndDate.setDate(defaultEndDate.getDate() + 7)
    const selectDateHandler = (d) => {
        setDate(d)
    }
    return (
        <div className='w-full cursor-pointer'>
            <img src="images/event-img.png" alt="event-img" className='w-full object-cover aspect-11/10 rounded-t-2xl' />
            <div className='bg-light-grey p-4 rounded-b-2xl'>
                <div className='flex flex-wrap justify-between gap-x-3 gap-y-2'>
                    <h3 className='text-lg'>Ani Party</h3>
                    <div className='date_picker relative'>
                        <img src="images/calendar-icon.png" alt="calendar-icon" className='absolute top-1/2 left-0 transform -translate-y-1/2' />
                        <DatePicker
                        dateFormat="yyyy/MM/dd"
                        selected={startDate}
                        onChange={selectDateHandler} 
                        minDate={today}
                        todayButton={"Today"}/>
                    </div>
                </div>
                <p className='text-xs my-3'><strong className='font-semibold'>PRIVATE PARTY by</strong> <span className='text-yellow-2'>ROCKYNIKKI</span></p>
                <div className='flex items-center justify-between'>
                    <p className='flex items-center gap-1 font-light text-xs'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 18 19" fill="none">
                            <mask id="mask0_47_207" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="16">
                            <path d="M0 0.5H18V18.5H0V0.5Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_47_207)">
                            <path d="M9 17.9727C6.89063 14.8086 3.19922 10.5195 3.19922 6.82812C3.19922 3.62957 5.80145 1.02734 9 1.02734C12.1986 1.02734 14.8008 3.62957 14.8008 6.82812C14.8008 10.5195 11.1094 14.8086 9 17.9727Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 9.46484C7.54618 9.46484 6.36328 8.28194 6.36328 6.82812C6.36328 5.37431 7.54618 4.19141 9 4.19141C10.4538 4.19141 11.6367 5.37431 11.6367 6.82812C11.6367 8.28194 10.4538 9.46484 9 9.46484Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                        </svg>
                        Delhi
                    </p>
                    <div className='flex items-center gap-2'>
                        <img src="images/male-user.png" alt="male-user" />
                        <img src="images/woman-avatar.png" alt="woman" />
                        <img src="images/toilet.png" alt="couple" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard