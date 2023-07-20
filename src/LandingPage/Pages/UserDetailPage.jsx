import React from 'react'
import {MdClose,MdCheck} from 'react-icons/md'

const UserDetailPage = () => {
    return (
        <div className='bg-black-20'>
            <div className='min-h-[350px] md:min-h-[400px] flex justify-center items-end bg-black rounded-b-50px'>
                <div className='container mx-auto pb-20 text-center'>
                    <h3 className='font-secondary_font text-40px'>User Details</h3>
                    <p className='text-lg'>Lorem Ipsum is dummy content</p>
                </div>
            </div>
            <div className='pt-10 container px-5 mx-auto'>
                <div className='flex flex-wrap items-stretch bg-black rounded-2xl max-w-5xl mx-auto'>
                    <div className='w-full sm:w-2/5 md:w-1/5'>
                        <img src='landingPage/images/book-model.png' alt='book-model' className='w-full h-full object-center object-cover aspect-[5/4] rounded-2xl' />
                    </div>
                    <div className='w-full sm:w-3/5 md:w-4/5 border-b-2 sm:border-b-0 sm:border-r-2 border-orange rounded-2xl'>
                        <div className='h-full p-5 grid content-between rounded-2xl max-w-3xl gap-y-10'>
                            <div>
                                <div className='flex flex-wrap sm:flex-nowrap justify-between sm:gap-5'>
                                    <h3 className='flex items-center text-lg sm:text-[22px] font-bold gap-2'>
                                    Emily Johns
                                    <p className='flex items-center text-sm font-light gap-1'><span className='block w-3 h-3 rounded-full bg-green-500'></span> Online</p>
                                    </h3>
                                    <p className='cursor-pointer text-xs sm:text-lg font-light'>Update</p>
                                </div>
                                <p className='text-lg font-light mt-1'><span>26 F</span>  |  <span>London</span></p>
                            </div>
                            <p className='text-lg font-light'>"Looking For Hookups"</p>
                        </div>
                    </div>
                </div>

                <div className='max-w-5xl mx-auto pt-20'>
                    <div className='px-8'>
                        <span className='inline-block py-3 px-8 text-lg rounded-t-lg bg-white text-black min-w-[200px] text-center'>Profile</span>
                    </div>
                    <div className='bg-white rounded-lg py-10 px-3 lg:px-8 grid lg:grid-cols-2 gap-5 items-start'>
                        <div className='grid gap-y-5'>
                            <div className='p-5 bg-black-20 rounded-2xl'>
                                <div className='flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange'>
                                    <p className='text-base sm:text-2xl'>Profile</p>
                                    <p className='cursor-pointer text-xs sm:text-lg'>Edit</p>
                                </div>
                                <p className='text-sm sm:text-lg'>Nothing</p>
                            </div>
                            <div className='p-5 bg-black-20 rounded-2xl'>
                                <div className='flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange'>
                                    <p className='text-base sm:text-2xl'>Details</p>
                                    <p className='cursor-pointer text-xs sm:text-lg'>Edit</p>
                                </div>
                                <div className='grid gap-y-2 pb-3 mb-3 border-b border-orange'>
                                    <p className='text-sm sm:text-lg grid grid-cols-2 gap-3'>
                                        <span className='block'>Member Since:</span>
                                        <span className='block text-right'>19/6/2023</span>
                                    </p>
                                    <p className='text-sm sm:text-lg grid grid-cols-2 gap-3'>
                                        <span className='block'>Sexual Orientation:</span>
                                        <span className='block text-right'>Straight</span>
                                    </p>
                                    <p className='text-sm sm:text-lg grid grid-cols-2 gap-3'>
                                        <span className='block'>Looking For:</span>
                                        <span className='block text-right'>Men</span>
                                    </p>
                                </div>
                                <div className='grid gap-y-2'>
                                    <p className='text-sm sm:text-lg grid grid-cols-2 gap-3'>
                                        <span className='block'>Birthdate:</span>
                                        <span className='block text-right'>February 17, 1997</span>
                                    </p>
                                    <p className='text-sm sm:text-lg grid grid-cols-2 gap-3'>
                                        <span className='block'>Relocate?:</span>
                                        <span className='block text-right'>Yes</span>
                                    </p>
                                    <p className='text-sm sm:text-lg grid grid-cols-2 gap-3'>
                                        <span className='block'>Marital Status:</span>
                                        <span className='block text-right'>Single</span>
                                    </p>
                                    <p className='text-sm sm:text-lg grid grid-cols-2 gap-3'>
                                        <span className='block'>Body Type:</span>
                                        <span className='block text-right'>Average</span>
                                    </p>
                                    <p className='text-sm sm:text-lg grid grid-cols-2 gap-3'>
                                        <span className='block'>Race:</span>
                                        <span className='block text-right'>Asian</span>
                                    </p>
                                    <p className='text-sm sm:text-lg grid grid-cols-2 gap-3'>
                                        <span className='block'>Speaks:</span>
                                        <span className='block text-right'>English</span>
                                    </p>
                                </div>
                            </div>
                            <div className='p-5 bg-black-20 rounded-2xl'>
                                <div className='flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange'>
                                    <p className='text-base sm:text-2xl'>My Kinks</p>
                                    <p className='cursor-pointer text-xs sm:text-lg'>Edit</p>
                                </div>
                                <p className='text-sm sm:text-lg'>You currently have no kinks</p>
                            </div>
                            <div className='p-5 bg-black-20 rounded-2xl'>
                                <div className='flex flex-wrap justify-between items-center font-normal pb-3 mb-3 border-b border-orange'>
                                    <p className='w-3/5 sm:w-4/5 pr-3 text-base sm:text-2xl'>Compatibility</p>
                                    <div className='w-2/5 sm:w-1/5 grid grid-cols-2 text-sm'>
                                        <span className='block text-center'>You</span>
                                        <span className='block text-center'>Him</span>
                                    </div>
                                </div>
                                <div className='grid gap-y-3'>
                                    <div className='text-sm sm:text-lg flex flex-wrap justify-between items-center'>
                                        <p className='w-3/5 sm:w-4/5 pr-3'>Gender :</p>
                                        <div className='w-2/5 sm:w-1/5 grid grid-cols-2 text-base sm:text-2xl'>
                                            <span className='flex justify-center items-center text-center text-white'><MdClose /></span>
                                            <span className='flex justify-center items-center text-center text-white'><MdClose /></span>
                                        </div>
                                    </div>
                                    <div className='text-sm sm:text-lg flex flex-wrap justify-between items-center'>
                                        <p className='w-3/5 sm:w-4/5 pr-3'>Distance :</p>
                                        <div className='w-2/5 sm:w-1/5 grid grid-cols-2 text-base sm:text-2xl'>
                                        <span className='flex justify-center items-center text-center text-green-500'><MdCheck /></span>
                                            <span className='flex justify-center items-center text-center text-green-500'><MdCheck /></span>
                                        </div>
                                    </div>
                                    <div className='text-sm sm:text-lg flex flex-wrap justify-between items-center'>
                                        <p className='w-3/5 sm:w-4/5 pr-3'>Age :</p>
                                        <div className='w-2/5 sm:w-1/5 grid grid-cols-2 text-base sm:text-2xl'>
                                            <span className='flex justify-center items-center text-center text-white'><MdCheck /></span>
                                            <span className='flex justify-center items-center text-center text-white'><MdCheck /></span>
                                        </div>
                                    </div>
                                    <div className='text-sm sm:text-lg flex flex-wrap justify-between items-center'>
                                        <p className='w-3/5 sm:w-4/5 pr-3'>Gender :</p>
                                        <div className='w-2/5 sm:w-1/5 grid grid-cols-2 text-base sm:text-2xl'>
                                            <span className='flex justify-center items-center text-center text-white'><MdClose /></span>
                                            <span className='flex justify-center items-center text-center text-white'><MdClose /></span>
                                        </div>
                                    </div>
                                    <div className='text-sm sm:text-lg flex flex-wrap justify-between items-center'>
                                        <p className='w-3/5 sm:w-4/5 pr-3'>Distance :</p>
                                        <div className='w-2/5 sm:w-1/5 grid grid-cols-2 text-base sm:text-2xl'>
                                        <span className='flex justify-center items-center text-center text-green-500'><MdCheck /></span>
                                            <span className='flex justify-center items-center text-center text-green-500'><MdCheck /></span>
                                        </div>
                                    </div>
                                    <div className='text-sm sm:text-lg flex flex-wrap justify-between items-center'>
                                        <p className='w-3/5 sm:w-4/5 pr-3'>Age :</p>
                                        <div className='w-2/5 sm:w-1/5 grid grid-cols-2 text-base sm:text-2xl'>
                                            <span className='flex justify-center items-center text-center text-white'><MdCheck /></span>
                                            <span className='flex justify-center items-center text-center text-white'><MdCheck /></span>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            <div className='p-5 bg-black-20 rounded-2xl'>
                                <div className='flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange'>
                                    <p className='text-base sm:text-2xl'>Bling!</p>
                                    <p className='cursor-pointer text-xs sm:text-lg'>Bling Manager</p>
                                </div>
                                <p className='text-sm sm:text-lg'>AdmaxAron currently doesn't have any Bling.</p>
                            </div>
                            <div className='p-5 bg-black-20 rounded-2xl'>
                                <div className='pb-3 mb-3 border-b border-orange'>
                                    <div className='flex justify-between gap-3 font-normal'>
                                        <p className='text-base sm:text-2xl'>Top Fans: <span>(0)</span></p>
                                        <p className='cursor-pointer text-xs sm:text-lg flex items-center gap-1'>
                                            <span className='cursor-pointer'>Settings</span>
                                            <span>|</span>
                                            <span className='cursor-pointer'>View All</span>
                                        </p>
                                    </div>
                                    <p className='text-sm sm:text-lg mt-3'>AdmaxAron currently doesn't have any Bling.</p>
                                </div>
                                <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
                                    <div className='group'>
                                        <div className='relative'>
                                            <img src="landingPage/images/hot-woman.png" alt="hot-woman" className='w-full aspect-4/3' />
                                            <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center'>
                                                <p className='text-xs text-white group-hover:bg-white group-hover:text-[#FFCA00] p-1 ease-in duration-300'>Be a Top Fan</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3 justify-between text-[10px] bg-white text-orange px-1'>
                                            <p className='flex items-center gap-1'>
                                                <img src="landingPage/images/star-icon.png" alt="star-icon" className='h-3' />
                                                <span>#1</span>
                                            </p>
                                            <p>50 pts</p>
                                        </div>
                                    </div>
                                    <div className='group'>
                                        <div className='relative'>
                                            <img src="landingPage/images/hot-woman.png" alt="hot-woman" className='w-full aspect-4/3' />
                                            <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center'>
                                                <p className='text-xs text-white group-hover:bg-white group-hover:text-[#FFCA00] p-1 ease-in duration-300'>Be a Top Fan</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3 justify-between text-[10px] bg-white text-orange px-1'>
                                            <p className='flex items-center gap-1'>
                                                <img src="landingPage/images/star-icon.png" alt="star-icon" className='h-3' />
                                                <span>#1</span>
                                            </p>
                                            <p>50 pts</p>
                                        </div>
                                    </div>
                                    <div className='group'>
                                        <div className='relative'>
                                            <img src="landingPage/images/hot-woman.png" alt="hot-woman" className='w-full aspect-4/3' />
                                            <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center'>
                                                <p className='text-xs text-white group-hover:bg-white group-hover:text-[#FFCA00] p-1 ease-in duration-300'>Be a Top Fan</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3 justify-between text-[10px] bg-white text-orange px-1'>
                                            <p className='flex items-center gap-1'>
                                                <img src="landingPage/images/star-icon.png" alt="star-icon" className='h-3' />
                                                <span>#1</span>
                                            </p>
                                            <p>50 pts</p>
                                        </div>
                                    </div>
                                    <div className='group'>
                                        <div className='relative'>
                                            <img src="landingPage/images/hot-woman.png" alt="hot-woman" className='w-full aspect-4/3' />
                                            <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center'>
                                                <p className='text-xs text-white group-hover:bg-white group-hover:text-[#FFCA00] p-1 ease-in duration-300'>Be a Top Fan</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3 justify-between text-[10px] bg-white text-orange px-1'>
                                            <p className='flex items-center gap-1'>
                                                <img src="landingPage/images/star-icon.png" alt="star-icon" className='h-3' />
                                                <span>#1</span>
                                            </p>
                                            <p>50 pts</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-5 bg-black-20 rounded-2xl'>
                                <div className='flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange'>
                                    <p className='text-base sm:text-2xl'>Fan of: <span>(0)</span></p>
                                    <p className='cursor-pointer text-xs sm:text-lg'>View All</p>
                                </div>
                                <p className='text-sm sm:text-lg'>Nothing</p>
                            </div>
                            <div className='p-5 bg-black-20 rounded-2xl'>
                                <div className='flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange'>
                                    <p className='text-base sm:text-2xl'>Activities</p>
                                    <p className='cursor-pointer text-xs sm:text-lg'></p>
                                </div>
                                <p className='text-sm sm:text-lg'>Nothing</p>
                            </div>
                        </div>
                        <div className='grid gap-y-3'>
                            <div className='p-5 bg-black-20 rounded-2xl'>
                                <div className='flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange'>
                                    <p className='text-base sm:text-2xl'>My Friends</p>
                                    <p className='cursor-pointer text-xs sm:text-lg'></p>
                                </div>
                                <p className='text-sm sm:text-lg'>You do not have friends in your network. Invite your friends to join!</p>
                            </div>
                            <div className='p-5 bg-black-20 rounded-2xl'>
                                <div className='flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange'>
                                    <p className='text-base sm:text-2xl'>Interest Groups</p>
                                    <p className='cursor-pointer text-xs sm:text-lg'>View All</p>
                                </div>
                                <p className='text-sm sm:text-lg'>Nothing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="audit-dating__block relative py-4 md:py-16 md:pt-0 container mx-auto mt-14">
                <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 py-71px">
                <img
                    src="images/avn_award2-1.png"
                    alt="award"
                    className="max-w-200px md:max-w-full"
                />
                <h2 className="text-white text-base sm:text-2xl sm:text-3xl xl:text-40px">
                    #1 Adult Dating Site
                </h2>
                </div>
            </div>
        </div>
    )
}

export default UserDetailPage