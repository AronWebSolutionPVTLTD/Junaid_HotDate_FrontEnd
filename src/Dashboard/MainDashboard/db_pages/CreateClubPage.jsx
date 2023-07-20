import React from 'react'

const CreateClubPage = () => {
    return (
        <div className='bg-white rounded-40px'>
            <div className='text-center p-5 py-10 text-black'>
                <h3 className='text-2xl sm:text-4xl mb-2'>Create your Club</h3>
                <p className='text-lg'>Let’s Create a Notorious Club</p>
            </div>
            <div className='flex flex-wrap bg-black rounded-40px '>
                <div className='w-full md:w-3/5 xl:w-full 2xl:w-3/5 '>
                    <div className="sign-up__form flex flex-col justify-center gap-30 py-6 px-6 lg:py-11 lg:px-14">
                        <h2 className="text-white text-2xl sm:text-3xl xl:text-5xl text-center xl:text-start font-bold mb-6">Club Details</h2>

                        <form className="flex flex-col justify-center gap-y-4 sm:gap-y-6" autoComplete="off">
                            <div className="flex flex-wrap rounded-md input_field_2">
                            <label htmlFor="club_name" className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start">
                                    Club Name*</label>
                                <input type="text" id="club_name" name="club_name" autoComplete="off"
                                    className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                    required />
                            </div>
                            <div className="flex flex-wrap rounded-md input_field_2">
                                <label htmlFor="location"
                                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                            lg:text-start">Location</label>
                                <input type="text" id="location" name="location" autoComplete="off"
                                    className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                    placeholder="name@flowbite.com" required />
                            </div>
                            <div className="flex flex-col gap-30">
                                <label htmlFor="Description"
                                    className="gradient w-full h-[49px] flex items-center justify-center text-lg text-white  font-normal leading-29 rounded-md mb-6">Description</label>
                                <div className='p-[2px] gradient rounded-md'>
                                    <textarea type="text" id="Description"
                                        rows={3}
                                        name="Description"
                                        // value={form.introduction}
                                        // onChange={(e) => handleChange(e)}
                                        className="bg-black focus:outline-none focus-visible:none w-full border-gradient3 text-gray font-normal xl:text-lg rounded-md text-sm px-2 xl:px-4 py-2.5 text-center md:text-start items-center flex justify-between"
                                        required>
                                    </textarea>
                                </div>
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
                            <div>
                            <p className='text-lg'>CLUB TYPE *</p>
                            </div>
                            <div className='radio_btn_wrapper'>
                                <div className='radio_field'>
                                    <input type="radio" id="private_place" className='hidden' name='event_type' />
                                    <label htmlFor='private_place'>
                                        <span className='radio_circle'></span>
                                        <span className='radio_text'>Private Place</span>
                                    </label>
                                </div>
                                <div className='radio_field'>
                                    <input type="radio" id="public_place" className='hidden' name='event_type' />
                                    <label htmlFor='public_place'>
                                        <span className='radio_circle'></span>
                                        <span className='radio_text'>Public Place</span>
                                    </label>
                                </div>
                                <div className='radio_field'>
                                    <input type="radio" id="virtual_date" className='hidden' name='event_type' />
                                    <label htmlFor='virtual_date'>
                                        <span className='radio_circle'></span>
                                        <span className='radio_text'>Virtual Date</span>
                                    </label>
                                </div>
                            </div>
                            {/* <p>{formErrors.introduction}</p> */}
                            <button className="gradient !py-3 w-full !text-lg xl:!text-25px capitalize !font-bold flex justify-center items-center text-white rounded-xl primary_btn">Submit</button>
                            
                        </form>
                    </div>
                </div>
                <div className='md:w-2/5 xl:w-full 2xl:w-2/5'>
                    <img src="images/create-club-mod.png" alt="Create-club" 
                    className='block h-full w-full rounded-t-40px md:p-0 p-5 rounded-b-40px md:rounded-b-none md:rounded-br-40px md:rounded-r-40px xl:rounded-b-40px xl:rounded-tl-40px 2xl:rounded-l-none 2xl:rounded-r-40px object-cover object-center aspect-square md:aspect-auto xl:aspect-square 2xl:md:aspect-auto' />
                </div>
            </div>
        </div>
    )
}

export default CreateClubPage