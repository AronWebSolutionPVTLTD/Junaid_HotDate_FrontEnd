import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = () => {
    return (
        <div className='grid gap-y-10 justify-items-center justify-center md:flex items-center md:justify-between my-10 md:my-16'>
            <div className='flex-1 flex justify-center'>
                <Link className='primary_btn min-w-[200px] text-center h-16 inline-flex justify-center items-center'>Next Page</Link>
            </div>
            <div className='flex items-center'>
                <span className='cursor-pointer text-sm w-8 h-8 flex items-center justify-center'>1</span>
                <span className='cursor-pointer text-sm w-8 h-8 flex items-center justify-center border border-white'>2</span>
                <span className='cursor-pointer text-sm w-8 h-8 flex items-center justify-center'>3</span>
            </div>
        </div>
    )
}

export default Pagination