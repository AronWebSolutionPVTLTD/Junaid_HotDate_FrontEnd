import React,{ useState } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${
        id === open ? "rotate-180" : ""
    } h-5 w-5 transition-transform`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);
}

const FaqPage = () => {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <div className='bg-black-20'>
            <div className='min-h-[350px] md:min-h-[400px] flex justify-center items-end bg-black rounded-b-50px'>
                <div className='container mx-auto pb-20 text-center'>
                    <h3 className='font-secondary_font text-40px'>FAQ</h3>
                    <p className='text-lg'>Lorem Ipsum is dummy content</p>
                </div>
            </div>
            <div className='pt-10 container mx-auto'>
                <div className='grid gap-y-2 max-w-6xl mx-auto'>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader className='text-lg font-normal' onClick={() => handleOpen(1)}>
                    What is Lorem Ipsum?
                    </AccordionHeader>
                    <AccordionBody>
                    We're not always in the position that we want to be at. We're
                    constantly growing. We're constantly making mistakes. We're constantly
                    trying to express ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader className='text-lg font-normal' onClick={() => handleOpen(2)}>
                    What is Lorem Ipsum?
                    </AccordionHeader>
                    <AccordionBody>
                    We're not always in the position that we want to be at. We're
                    constantly growing. We're constantly making mistakes. We're constantly
                    trying to express ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader className='text-lg font-normal' onClick={() => handleOpen(3)}>
                    What is Lorem Ipsum?
                    </AccordionHeader>
                    <AccordionBody>
                    We're not always in the position that we want to be at. We're
                    constantly growing. We're constantly making mistakes. We're constantly
                    trying to express ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                    <AccordionHeader className='text-lg font-normal' onClick={() => handleOpen(4)}>
                    What is Lorem Ipsum?
                    </AccordionHeader>
                    <AccordionBody>
                    We're not always in the position that we want to be at. We're
                    constantly growing. We're constantly making mistakes. We're constantly
                    trying to express ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                </div>
            </div>
            <div className="audit-dating__block relative py-4 md:py-16 md:pt-0 container mx-auto mt-14">
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
    )
}

export default FaqPage