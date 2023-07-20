import React from 'react'

const ContactPage = () => {
    return (
        <>
        <div className='py-10 container mx-auto contact-page'>
            <div className='text-center max-w-6xl mx-auto'>
                <h3 className='font-secondary_font text-40px mb-5'>Contact Us</h3>
                <p className='text-sm md:text-lg'>If you need immediate help, please call our Customer Service support line: (669) 208-0363 24 hours a day, seven days a week. For billing questions, please call us toll-free: (888) 575-8383 or (669) 208-0364</p>
            </div>
            <form className="flex flex-col justify-center gap-y-4 sm:gap-y-6 max-w-2xl mx-auto mt-10"autoComplete="off">
                <div>
                    <div className="flex flex-wrap rounded-md input_field">
                        <label htmlFor="email" className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start">Email address</label>
                        <input 
                        type="email" 
                        id="email" 
                        name="email"  
                        // value={form.email}
                        // onChange={(e) => handleChange(e)} autoComplete="off"
                        className="bg-white border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-black font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        // placeholder="name@flowbite.com" 
                        required />
                    </div>
                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                </div>
                <div>
                    <div className="flex flex-wrap rounded-md input_field">
                        <label htmlFor="email" className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start">Username</label>
                        <input 
                        type="text" 
                        id="username" 
                        name="username"  
                        // value={form.email}
                        // onChange={(e) => handleChange(e)} autoComplete="off"
                        className="bg-white border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-black font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        // placeholder="name@flowbite.com" 
                        required />
                    </div>
                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                </div>
                <div>
                    <div className="flex flex-wrap rounded-md input_field">
                        <label htmlFor="email" className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start">Reason</label>
                        <select 
                        name="reason" 
                        id="reason"
                        className='bg-white border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-black font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between'>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </div>
                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                </div>
                <div className='p-[2px] gradient rounded-md'>
                    <textarea type="text" id="intro_msg"
                        rows={3}
                        name="introduction"
                        // value={form.introduction}
                        // onChange={(e) => handleChange(e)}
                        className="bg-white focus:outline-none focus-visible:none w-full border-gradient3 text-black font-normal xl:text-lg rounded-md text-sm px-2 xl:px-4 py-2.5 items-center flex justify-between"
                        required
                    ></textarea>
                </div>
                <button
                    className="gradient !py-3 w-full !text-lg xl:!text-25px capitalize !font-bold flex justify-center items-center text-white rounded-xl primary_btn"
                    // onClick={(e) => handleSignup(e)}
                >
                Send
                </button>
            </form>
        </div>
        <div className='bg-black'>
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
        </>
    )
}

export default ContactPage