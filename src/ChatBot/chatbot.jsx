import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
function Bot() {
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
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
  return <ThemeProvider theme={theme}>
<ChatBot className="Chat_Bot_Bg" steps={steps} floating={true} />;
</ThemeProvider> 
}

export default Bot;
