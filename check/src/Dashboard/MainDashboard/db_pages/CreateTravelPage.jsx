import React, { useState } from 'react'

const CreateTravelPage = () => {
    return (
        <div className="bg-white rounded-40px">
            <div className="text-center p-5 py-10 text-black">
                <h3 className="text-2xl sm:text-4xl mb-2">Create Your Travel Page</h3>
                <p className="text-lg">Let’s Create a Notorious Travel</p>
            </div>
            <div className="flex flex-wrap bg-black rounded-40px ">
                <div className="w-full md:w-3/5 xl:w-full 2xl:w-3/5 ">
                <div className="sign-up__form flex flex-col justify-center gap-30 py-6 px-6 lg:py-11 lg:px-5 lg:pl-10">
                    <h2 className="text-white text-2xl sm:text-3xl xl:text-5xl text-center xl:text-start font-bold mb-6">
                    Destination Details
                    </h2>

                    <form
                    className="flex flex-col justify-center gap-y-4 sm:gap-y-6"
                    autoComplete="off"
                    >
                    <div className="flex flex-wrap rounded-md input_field_2">
                        <label
                        htmlFor="age_1"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                                    lg:text-start"
                        >
                        Person-1 Age
                        </label>
                        <input
                        type="text"
                        id="age_1"
                        name="age_1"
                        // value={club.location}
                        // onChange={handleChange}
                        autoComplete="off"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        // placeholder="name@flowbite.com"
                        required
                        />
                    </div>
                    <div className="flex flex-wrap rounded-md input_field_2">
                        <label
                        htmlFor="age_2"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                                    lg:text-start"
                        >
                        Person-2 Age
                        </label>
                        <input
                        type="text"
                        id="age_2"
                        name="age_2"
                        // value={club.location}
                        // onChange={handleChange}
                        autoComplete="off"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        // placeholder="name@flowbite.com"
                        required
                        />
                    </div>
                    <div className="flex flex-wrap rounded-md input_field_2">
                        <label
                        htmlFor="loc_from"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                                    lg:text-start"
                        >
                        Traveling From
                        </label>
                        <input
                        type="text"
                        id="loc_from"
                        name="loc_from"
                        // value={club.club_name}
                        // onChange={handleChange}
                        autoComplete="off"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        required
                        />
                    </div>
                    <div className="flex flex-wrap rounded-md input_field_2">
                        <label
                        htmlFor="loc_to"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                                    lg:text-start"
                        >
                        Traveling To
                        </label>
                        <input
                        type="text"
                        id="loc_to"
                        name="loc_to"
                        // value={club.location}
                        // onChange={handleChange}
                        autoComplete="off"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        // placeholder="name@flowbite.com"
                        required
                        />
                    </div>
                    <div className="flex flex-wrap rounded-md input_field_2">
                        <label
                        htmlFor="start_date"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                                    lg:text-start"
                        >
                        Start Date
                        </label>
                        <input
                        type="date"
                        id="start_date"
                        name="start_date"
                        // value={club.location}
                        // onChange={handleChange}
                        autoComplete="off"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        // placeholder="name@flowbite.com"
                        required
                        />
                    </div>
                    <div className="flex flex-wrap rounded-md input_field_2">
                        <label
                        htmlFor="end_date"
                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] sm:h-[49px] flex items-center justify-start sm:px-2 lg:px-4 text-sm mb-1 sm:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center 
                                                    lg:text-start"
                        >
                        End Date
                        </label>
                        <input
                        type="date"
                        id="end_date"
                        name="end_date"
                        // value={club.location}
                        // onChange={handleChange}
                        autoComplete="off"
                        className="bg-black border md:rounded-l-none rounded-md md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        // placeholder="name@flowbite.com"
                        required
                        />
                    </div>
                    <div>
                        <div className="flex flex-wrap rounded-md input_field">
                        <label
                            htmlFor="interests"
                            className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                        >
                            Interests
                        </label>
                        <select
                            name="interests"
                            id="interests"
                            className="bg-black border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                        >
                            <option>Girl with Girl</option>
                            <option>Soft Swap</option>
                            <option>Full Swap</option>
                        </select>
                        </div>
                        {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                    </div>
                    <div className="flex flex-col gap-30">
                        <label
                        htmlFor="Description"
                        className="gradient w-full h-[49px] flex items-center justify-center text-lg text-white  font-normal leading-29 rounded-md mb-6"
                        >
                        Description
                        </label>
                        <div className="p-[2px] gradient rounded-md">
                        <textarea
                            type="text"
                            id="Description"
                            rows={3}
                            name="Description"
                            // value={club.Description}
                            // onChange={handleChange}
                            className="bg-black focus:outline-none focus-visible:none w-full border-gradient3 text-gray font-normal xl:text-lg rounded-md text-sm px-2 xl:px-4 py-2.5 text-center md:text-start items-center flex justify-between"
                            required
                        ></textarea>
                        </div>
                    </div>
                    {/* <p>{formErrors.introduction}</p> */}
                    <button
                        className="gradient !py-3 w-full !text-lg xl:!text-25px capitalize !font-bold flex justify-center items-center text-white rounded-xl primary_btn"
                        // onClick={handleClub}
                    >
                        Submit
                    </button>
                    </form>
                </div>
                </div>
                <div className="md:w-2/5 xl:w-full 2xl:w-2/5  md:p-5">
                <img
                    src="images/lovely-couples.png"
                    alt="Create-travel"
                    className="block h-full w-full rounded-40px md:p-0 p-5 rounded-b-40px  object-cover object-center aspect-square md:aspect-auto xl:aspect-square 2xl:md:aspect-auto"
                />
                </div>
            </div>
            </div>
    )
}

export default CreateTravelPage