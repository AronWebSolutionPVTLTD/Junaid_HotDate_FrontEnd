import React from 'react'

const ModelDetailForm = () => {
    return (
        <div className='bg-white rounded-40px'>
            <div className='text-center p-5 py-10 text-black'>
                <h3 className='text-2xl sm:text-4xl'>Model Details</h3>
            </div>
            <div className='flex flex-wrap bg-black rounded-40px '>
                <div className='w-full md:w-3/5 xl:w-full 2xl:w-3/5 '>
                    <div className="sign-up__form flex flex-col justify-center gap-30 py-6 px-6 lg:py-11 lg:px-14">
                        <h2 className="text-white text-2xl sm:text-3xl xl:text-5xl text-center xl:text-start font-bold mb-6">Fill your Details</h2>

                        <form className="flex flex-col justify-center gap-y-4 sm:gap-y-6" autoComplete="off">
                            <div className="flex flex-wrap rounded-md input_field_2">
                            <label htmlFor="first_name" className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start">
                                    First Name</label>
                                <input type="text" id="first_name" name="first_name" autoComplete="off"
                                    className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                    required />
                            </div>
                            <div className="flex flex-wrap rounded-md input_field_2">
                            <label htmlFor="last_name" className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start">
                                    Last Name</label>
                                <input type="text" id="last_name" name="last_name" autoComplete="off"
                                    className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                    required />
                            </div>
                            <div className="flex flex-wrap rounded-md input_field_2">
                            <label htmlFor="dob" className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start">
                                    D.O.B</label>
                                <input type="date" id="dob" name="dob" autoComplete="off"
                                    className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                    required />
                            </div>
                            <div className="flex flex-wrap rounded-md input_field_2">
                            <label htmlFor="looking_for" className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start">
                                    Looking For</label>
                                <input type="text" id="looking_for" name="looking_for" autoComplete="off"
                                    className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                    required />
                            </div>
                            <div className="flex flex-wrap rounded-md input_field_2">
                            <label htmlFor="marital_status" className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start">
                                    Marital Status</label>
                                <input type="text" id="marital_status" name="marital_status" autoComplete="off"
                                    className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                    required />
                            </div>
                            <div className="flex flex-wrap rounded-md input_field_2">
                            <label htmlFor="body_type" className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start">
                                    Body Type</label>
                                <input type="text" id="body_type" name="body_type" autoComplete="off"
                                    className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                    required />
                            </div>
                            <div className="flex flex-wrap rounded-md input_field_2">
                            <label htmlFor="language" className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start">
                                    Language</label>
                                <input type="text" id="language" name="language" autoComplete="off"
                                    className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                    required />
                            </div>
                            <div className='grid sm:grid-cols-2 gap-4'>
                                <label className='flex w-full bg-gray-900 py-[10px] px-4 text-lg items-center cursor-pointer rounded-md'>
                                    <span className='w-6 block mr-2'><img src='images/gallery-icon.png' alt='gallery-icon' /></span>
                                    Upload Event Images
                                    <input type='file' className='hidden' />
                                </label>
                                <label className='flex w-full bg-gray-900 py-[10px] px-4 text-lg items-center cursor-pointer rounded-md'>
                                    <span className='w-6 block mr-2'><img src='images/video-upload-icon.png' alt='gallery-icon' /></span>
                                    Upload Event Videos
                                    <input type='file' className='hidden' />
                                </label>
                            </div>
                            <button className="gradient !py-3 w-full !text-lg xl:!text-25px capitalize !font-bold flex justify-center items-center text-white rounded-xl primary_btn">Submit</button>
                            
                        </form>
                    </div>
                </div>
                <div className='md:w-2/5 xl:w-full 2xl:w-2/5'>
                    <img src="images/model-detail.png" alt="create-event" 
                    className='block h-full w-full rounded-t-40px md:p-0 p-5 rounded-b-40px md:rounded-b-none md:rounded-br-40px md:rounded-r-40px xl:rounded-b-40px xl:rounded-tl-40px 2xl:rounded-l-none 2xl:rounded-r-40px object-cover object-center aspect-square md:aspect-auto xl:aspect-square 2xl:md:aspect-auto' />
                </div>
            </div>
        </div>
    )
}

export default ModelDetailForm