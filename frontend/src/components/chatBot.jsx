import React, { useState, useEffect } from 'react';
import './chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const defaultQuestions = [
    'Tell me more about your services',
    'How can I generate more leads?',
    'Can you help with lead nurturing?',
  ];

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;
    const newMessages = [...messages, { text: userInput, isUser: true }];
    setMessages(newMessages);
    setUserInput('');

    // Simulate bot response (you can replace this with an actual chatbot API)
    setTimeout(() => {
      let botResponse;
      switch (userInput.toLowerCase()) {
        case 'tell me more about your services':
          botResponse = {
            text:
              'Our services include lead generation, sales, and marketing solutions.',
          };
          break;
        case 'how can I generate more leads?':
          botResponse = {
            text:
              'You can generate more leads by optimizing your website, using social media, and running targeted ad campaigns.',
          };
          break;
        case 'can you help with lead nurturing?':
          botResponse = {
            text:
              'Yes, we can assist you with lead nurturing strategies to convert leads into customers.',
          };
          break;
        default:
          botResponse = { text: "I'm sorry, I don't have an answer to that question." };
          break;
      }
      setMessages([...newMessages, botResponse]);
    }, 1000);
  };

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleQuestionClick = (question) => {
    // Handle clicking on a default question option
    const newMessages = [
      ...messages,
      { text: question, isUser: true }, // Display the question as a user message
    ];
    setMessages(newMessages);
    // Simulate bot response with the answer (you can replace this with actual answers)
    setTimeout(() => {
      let botResponse;
      switch (question.toLowerCase()) {
        case 'tell me more about your services':
          botResponse = {
            text:
              'Our services include lead generation, sales, and marketing solutions.',
          };
          break;
        case 'how can I generate more leads?':
          botResponse = {
            text:
              'You can generate more leads by optimizing your website, using social media, and running targeted ad campaigns.',
          };
          break;
        case 'can you help with lead nurturing?':
          botResponse = {
            text:
              'Yes, we can assist you with lead nurturing strategies to convert leads into customers.',
          };
          break;
        default:
          botResponse = { text: "I'm sorry, I don't have an answer to that question." };
          break;
      }
      setMessages([...newMessages, botResponse]);
    }, 1000);
  };

  useEffect(() => {
    if (isChatOpen) {
      // Display a welcome message and default questions as options when the chatbot opens
      setMessages([
        { text: 'Welcome! How can I assist you today?', isUser: false },
        ...defaultQuestions.map((question) => ({
          text: question,
          isUser: false,
          isOption: true, // Mark default questions as options
        })),
      ]);
    }
  }, [isChatOpen]);

  return (
    <div className={`App ${isChatOpen ? '' : 'closed'}`}>
      {isChatOpen && (
        <div className="chat-container">
          <button className="close-button" onClick={handleCloseChat}>
            &#x2716;
          </button>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.isUser ? 'user' : 'bot'}`}
                onClick={() =>
                  message.isOption ? handleQuestionClick(message.text) : null
                }
                style={
                  message.isOption ? { cursor: 'pointer', fontWeight: 'bold' } : null
                }
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={userInput}
              onChange={handleUserInput}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <button className='send-button' onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
      {!isChatOpen && (
        <button className="chat-button" onClick={handleOpenChat}>
          Open Chat
        </button>
      )}
    </div>
  );
}

export default Chatbot;