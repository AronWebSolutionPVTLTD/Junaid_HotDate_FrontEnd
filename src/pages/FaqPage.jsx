import React, { useState } from "react";
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
  const faqs = [
    {
      question: 'Can I use the Hot-Date app on multiple devices?',
      answer: 'Yes, you can use the Hot-Date app on multiple devices. Simply log in with your account credentials, and your data will be synchronized across all your devices.',
    },
    {
      question: 'How do I report inappropriate behavior or profiles?',
      answer: 'If you encounter inappropriate behavior or profiles, use the reporting feature within the app. This helps us maintain a safe and enjoyable community. Our team will review the report and take appropriate action.',
    },
    {
      question: 'What should I do if I forgot my password?',
      answer: 'If you forget your password, use the "Forgot Password" option on the login screen. Follow the instructions sent to your registered email to reset your password and regain access to your account.',
    },
    {
      question: 'Is there a premium subscription for additional features?',
      answer: "Yes, Hot-Date offers a premium subscription with additional features such as advanced matching, ad-free experience, and more. Visit the app's subscription page to learn about the available plans and their benefits.",
    }, {
      question: 'How can I see recent users on Hot-Date app?',
      answer: "To view recent users, navigate to the Recent section on the app. Here, you'll find a list of users who have recently joined or been active. Swipe, like, and start connecting with new people!",
    },
    {
      question: 'How do I find users near me?',
      answer: 'To discover users near you, go to the "Nearby" feature in the app. This section displays profiles of users in your proximity. Adjust your location settings for accurate results and explore potential matches nearby.',
    },
    {
      question: 'Can I create events on Hot-Date app?',
      answer: 'Yes, you can! Hot-Date app allows users to create events. Simply go to the "Events" section, click on "Create Event," fill in the details, and invite other users to join. Its a great way to plan and share exciting activities.',
    },
    {
      question: 'How can I join events created by other users?',
      answer: 'To join an event, visit the "Events" section and explore the available activities. Click on an event you are interested in and select the Join option. You can then chat with other participants and coordinate details.',
    },
    {
      question: 'What is a Club Card, and how can I create one?',
      answer: 'Club Cards are created by party and club owners to invite users to join their events. If you own a venue, go to the "Club Cards" section, click on "Create Card," and fill in the details. Users can discover and join your club events through these cards.',
    },
    {
      question: 'How can I send a friend request on Hot-Date app?',
      answer: 'To send a friend request, visit the profile of the user you want to connect with. Click on the "Add Friend" button, and once they accept your request, you can start chatting and planning activities together.',
    },
    {
      question: 'Is there a chat feature on Hot-Date app?',
      answer: 'Yes, Hot-Date app includes a chat feature. Once you match with someone or become friends, you can start chatting within the app. Use the chat to get to know each other better, plan events, or share exciting updates.',
    },
  ];
  
  return (
    <div className="bg-black-20">
      <div className="min-h-[350px] md:min-h-[320px] flex justify-center items-end bg-black rounded-b-50px">
        <div className="container mx-auto pb-20 text-center">
          <h3 className="font-secondary_font text-40px">FAQ</h3>
          <p className="text-lg">Lorem Ipsum is dummy content</p>
        </div>
      </div>
      <div className="pt-10 container mx-auto">
        <div className="grid gap-y-2 max-w-6xl mx-auto">
          {
            faqs.map((el,i)=>(
              <Accordion key={i} open={open === i} icon={<Icon id={i} open={open} />}>
              <AccordionHeader
                className="text-lg font-normal"
                onClick={() => handleOpen(i)}
              >
               {el.question}
              </AccordionHeader>
              <AccordionBody>
                {el.answer}
              </AccordionBody>
            </Accordion>
            ))
          }
{/*         
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader
              className="text-lg font-normal"
              onClick={() => handleOpen(2)}
            >
              What is Lorem Ipsum?
            </AccordionHeader>
            <AccordionBody>
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader
              className="text-lg font-normal"
              onClick={() => handleOpen(3)}
            >
              What is Lorem Ipsum?
            </AccordionHeader>
            <AccordionBody>
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader
              className="text-lg font-normal"
              onClick={() => handleOpen(4)}
            >
              What is Lorem Ipsum?
            </AccordionHeader>
            <AccordionBody>
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion> */}
        </div>
      </div>
      <div className="audit-dating__block relative py-4 md:py-16 md:pt-0 container mx-auto mt-14">
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 py-71px">
          {/* <img
            src="images/avn_award2-1.png"
            alt="award"
            className="max-w-200px md:max-w-full"
          /> */}
          <h2 className="text-white text-2xl sm:text-3xl xl:text-40px">
            #Best Adult Dating Site
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
