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
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);
  const handleOpen = (value) => {
    if(alwaysOpen){
      setAlwaysOpen(false)
    }
    setOpen(open === value ? 0 : value);
  };
  const handleAlwaysOpen = () => {
    if(open!==0){
      setOpen(0)
    }
    setAlwaysOpen((cur) => !cur)
  };
  const faqs = [
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
    {
      question: "What is the swinger lifestyle?",
      answer:
        "The swinger lifestyle is a form of consensual non-monogamy where individuals or couples engage in sexual activities with others outside their primary relationship. It often involves couples swapping partners for sexual experiences, but the extent of involvement varies from soft swaps (limited to certain activities) to full swaps (engaging in intercourse)."
    },
    {
      question: "Is swinging the same as an open relationship or polyamory?",
      answer:
        "No, swinging is distinct from open relationships and polyamory. Swinging primarily focuses on sexual exploration and typically involves couples engaging in sexual activities with others. Open relationships and polyamory, on the other hand, emphasize emotional connections and can involve multiple romantic and sexual partners."
    },
    {
      question: "How do I find other swingers or lifestyle events?",
      answer:
        "There are various ways to connect with the swinger community:\n" +
        "- Online swinger websites and forums: Many dedicated websites and forums exist where swingers can create profiles, interact with others, and find events in their area.\n" +
        "- Swinger clubs and parties: Many cities have swinger clubs or host lifestyle parties where like-minded individuals can meet and socialize.\n" +
        "- Social media: Some swingers use social media platforms to connect and organize events discreetly."
    },
    {
      question: "How can I ensure safety in the swinger lifestyle?",
      answer:
        "Safety is paramount in the swinger community. Here are some key safety tips:\n" +
        "- Communicate openly with your partner(s) about boundaries, desires, and limits.\n" +
        "- Use protection, such as condoms, to prevent the spread of sexually transmitted infections.\n" +
        "- Verify consent from all parties involved before engaging in any sexual activity.\n" +
        "- Get to know potential partners and exchange relevant health information.\n" +
        "- Trust your instincts and leave any situation that makes you uncomfortable."
    },
    {
      question: "What should I expect at a swinger event or party?",
      answer:
        "Expectations can vary depending on the event and location. Typically, swinger events provide a safe, non-judgmental space for adults to socialize, dance, and potentially engage in sexual activities if they choose to. It’s important to respect the rules and guidelines of the event and obtain clear consent before initiating any sexual activity."
    },
    {
      question: "Can anyone become a swinger?",
      answer:
        "Swinging is consensual, and participation is entirely voluntary. Anyone interested in exploring the lifestyle can do so, provided they communicate openly, respect boundaries, and prioritize safety and consent. It’s essential to be honest about your intentions and desires with potential partners."
    },
    {
      question: "How do I deal with jealousy in the swinger lifestyle?",
      answer:
        "Jealousy is a common emotion in any non-monogamous relationship. Open and honest communication with your partner(s) is key to addressing jealousy. Establish boundaries and agreements that make both partners comfortable. It’s also essential to work on self-confidence and self-esteem to better manage jealousy when it arises."
    },
    {
      question: "Are swingers at risk of contracting sexually transmitted infections (STIs)?",
      answer:
        "Any sexual activity carries some risk of STIs. Swingers should use protection, get regular STI testing, and be open about their sexual health with potential partners. Responsible sexual behavior and safer sex practices are essential in minimizing these risks."
    },
    {
      question: "What are the key considerations in the swinger lifestyle?",
      answer:
        "Remember that the swinger lifestyle is about consent, communication, and exploring consensual sexual experiences with like-minded individuals. It’s important to prioritize the emotional and physical well-being of all parties involved in any swinger encounter."
    }
  ];
  
  
  const accordioncss={
    color:"orange",
    fontWeignt:"500",
    fontSize:"16px"
  }

  return (
    <div className="bg-black-20">
      <div className="min-h-[350px] md:min-h-[320px] flex justify-center items-end bg-black rounded-b-50px">
        <div className="container mx-auto pb-20 text-center">
          <h3 className="font-secondary_font text-40px">FAQ</h3>
          <p className="text-lg">Frequently Asked Questions</p>
        </div>
      </div>
      <div className="pt-10 container mx-auto">
        <div className="grid gap-y-2 max-w-6xl mx-auto">
          
    
   <Accordion style={{ borderLeft: alwaysOpen  ? '4px solid #f19815' : 'none',paddingLeft: alwaysOpen ? '4px' : 'none' }} open={alwaysOpen}>
        <AccordionHeader onClick={handleAlwaysOpen}>Can I use the Hot-Date app on multiple devices?</AccordionHeader>
        <AccordionBody style={{color:"orange",fontSize:"16px"}}>Yes, you can use the Hot-Date app on multiple devices. Simply log in with your account credentials, and your data will be synchronized across all your devices.

        </AccordionBody>
      </Accordion>
      {
  faqs.map((el, i) => (
    <Accordion key={i + 1} open={open === i + 1}  style={{ borderLeft: open === i + 1 ? '4px solid #f19815' : 'none',paddingLeft: open === i + 1 ? '4px' : 'none' }} icon={<Icon id={i + 1} open={open} /> }>
      <AccordionHeader
        className="text-lg font-medium"
        onClick={() => handleOpen(i + 1)}
      >
        {el.question}
      </AccordionHeader>
      <AccordionBody style={open === i + 1 && accordioncss}>
        {el.answer.includes('\n-') ? (
          <ul>
            {el.answer.split('\n-').map((item, index) => (
              <li key={index}>{index>=1 && `${index}).`}{item}</li>
            ))
            }
          </ul>
        ) : (
          el.answer
        )}
      </AccordionBody>
    </Accordion>
  ))
}

        </div>
      </div>
      <div className="audit-dating__block relative py-4 md:py-16 md:pt-0 container mx-auto mt-14">
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 py-71px">
          <h2 className="text-white text-2xl sm:text-3xl xl:text-40px">
            #Best Adult Dating Site
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
