import React from 'react'
import { Link } from 'react-router-dom'

const MembersModels = () => {
    return (
        <div className='bg-black sm:pt-8 py-8 px-6 rounded-2xl xl:rounded-r-none min-h-full'>
            <div className='xl:w-11/12'>
                <div className='relative rounded-2xl'>
                    <img src="images/member-models.png" alt="member-models" className='aspect-video object-cover w-full rounded-2xl' />
                    <h3 className='text-xl sm:text-40px font-bold absolute left-0 bottom-0 p-5'>Emily Jason</h3>
                </div>
                <div className='flex items-center gap-5 pb-3 border-b border-white/50 mt-6 mb-10'>
                    <span className='cursor-pointer'>Photos & Videos</span>
                    <span className='cursor-pointer inline-block ml-5'>About Me</span>
                </div>
                <div className='grid gap-2 sm:gap-5 grid-cols-2 mb-10'>
                    <div className='relative rounded-2xl'>
                        <img src="images/model-img.png" alt="model-img.png" className='w-full aspect-4/3 object-cover rounded-2xl' />
                        <div className='absolute bottom-5 left-5 rounded-md bg-black/80 py-1 px-2 sm:py-2 sm:px-5 text-xs sm:text-base flex items-center gap-2'>
                            <img src="images/upload-img.png" alt="upload-img" className='h-[18px] sm:h-[25px]' />
                            4
                        </div>
                    </div>
                    <div className='relative rounded-2xl'>
                        <img src="images/model-img.png" alt="model-img.png" className='w-full aspect-4/3 object-cover rounded-2xl' />
                        <div className='absolute bottom-5 left-5 rounded-md bg-black/80 py-1 px-2 sm:py-2 sm:px-5 text-xs sm:text-base flex items-center gap-2'>
                            <img src="images/upload-img.png" alt="upload-img" className='h-[18px] sm:h-[25px]' />
                            4
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5'>
                    <div className='relative rounded-2xl group ease-in duration-300'>
                        <img src="images/model-2.png" alt="model-img.png" className='w-full aspect-4/3 object-cover rounded-2xl' />
                        <div className='absolute ease-in duration-300 top-0 left-0 w-full h-full rounded-2xl sm:opacity-0 sm:group-hover:opacity-100 flex items-center justify-center bg-black/25 cursor-pointer'>
                            <img src="images/play-icon.png" alt="play-icon" className='h-[25px]' />
                            <div className='absolute bottom-2 sm:bottom-5 left-2 sm:left-5 rounded-md bg-black/80 py-1 px-2 sm:py-2 sm:px-5 text-xs sm:text-base flex items-center gap-2'>
                                <img src="images/play-icon.png" alt="play-icon" className='h-[16px]' />
                                1:39
                            </div>
                        </div>
                    </div>
                    <div className='relative rounded-2xl group ease-in duration-300'>
                        <img src="images/model-2.png" alt="model-img.png" className='w-full aspect-4/3 object-cover rounded-2xl' />
                        <div className='absolute ease-in duration-300 top-0 left-0 w-full h-full rounded-2xl sm:opacity-0 sm:group-hover:opacity-100 flex items-center justify-center bg-black/25 cursor-pointer'>
                            <img src="images/play-icon.png" alt="play-icon" className='h-[25px]' />
                            <div className='absolute bottom-2 sm:bottom-5 left-2 sm:left-5 rounded-md bg-black/80 py-1 px-2 sm:py-2 sm:px-5 text-xs sm:text-base flex items-center gap-2'>
                                <img src="images/play-icon.png" alt="play-icon" className='h-[16px]' />
                                1:39
                            </div>
                        </div>
                    </div>
                    <div className='relative rounded-2xl group ease-in duration-300'>
                        <img src="images/model-2.png" alt="model-img.png" className='w-full aspect-4/3 object-cover rounded-2xl' />
                        <div className='absolute ease-in duration-300 top-0 left-0 w-full h-full rounded-2xl sm:opacity-0 sm:group-hover:opacity-100 flex items-center justify-center bg-black/25 cursor-pointer'>
                            <img src="images/play-icon.png" alt="play-icon" className='h-[25px]' />
                            <div className='absolute bottom-2 sm:bottom-5 left-2 sm:left-5 rounded-md bg-black/80 py-1 px-2 sm:py-2 sm:px-5 text-xs sm:text-base flex items-center gap-2'>
                                <img src="images/play-icon.png" alt="play-icon" className='h-[16px]' />
                                1:39
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap gap-5 justify-between mt-20'>
                    <Link className='primary_btn capitalize !font-normal'>Click here to register yourself as a model</Link>
                    <Link className='primary_btn !font-semibold'>Next Page</Link>
                </div>
            </div>
        </div>
    )
}

export default MembersModels