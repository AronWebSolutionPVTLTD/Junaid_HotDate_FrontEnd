import React from 'react'
import EventCard from '../db_components/EventCard'
import Pagination from '../db_components/Pagination'

const EventPage = () => {
    return (
        <div className='bg-black pt-0 sm:pt-8 py-8 px-6 rounded-2xl xl:rounded-r-none min-h-full'>
            <div className='sticky top-0 bg-black z-[9] py-5 flex justify-between'>
                <div className='flex flex-wrap gap-2 sm:gap-5 flex-1'>
                    <div className='gradient p-[2px] rounded-t-3xl md:rounded-t-50px flex-1 cursor-pointer'>
                        <div className='bg-black h-14 md:h-[100px] flex items-center justify-center rounded-t-3xl md:rounded-t-50px'>
                        <h3 className='px-5 rounded-t-50px clipped_text bg-gradient-to-r from-orange to-red-500 bg-clip-text text-base sm:text-3xl md:text-5xl font-bold'>Hot Dates</h3>
                        </div>
                    </div>
                    <div className='bg-white-shade p-[2px] rounded-t-3xl md:rounded-t-50px flex-1 cursor-pointer'>
                        <div className='bg-black justify-center h-14 md:h-[100px] flex items-center rounded-t-3xl md:rounded-t-50px'>
                            <h3 className='px-5 rounded-t-50px bg-transparent text-white-shade text-base sm:text-3xl md:text-5xl font-bold'>Parties</h3>
                        </div>
                    </div>
                    <div className='flex-none grid items-center'>
                        <div className='w-5 sm:w-6'><img src="images/filter-icon.png" alt="filter-icon" className='max-w-full cursor-pointer' /></div>
                        <div className='w-5 sm:w-6'><img src="images/bell-icon.png" alt="bell-icon" className='max-w-full cursor-pointer' /></div>
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
            <Pagination />
        </div>
    )
}

export default EventPage 