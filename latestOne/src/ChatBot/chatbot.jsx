import ChatBot from "react-simple-chatbot";

function Bot() {
  const steps = [
    {
      id: "Grret",
      message: "Hii,Welcome to our Website",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
      trigger: "user",
    },
    {
      id: "user",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hii {previousValue} , please tell your issue",
      trigger: "Ques",
    },
    {
      id: "Ques",
      options: [
        { value: 1, label: "Number 1" },
        { value: 2, label: "Number 2" },
        { value: 3, label: "Number 3" },
      ],
      end: true,
    },
  ];
  return <ChatBot steps={steps} floating={true} />;
}

export default Bot;
