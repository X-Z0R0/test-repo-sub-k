import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isVisible, setIsVisible] = useState(true); // State to manage chatbot visibility
  const messagesEndRef = useRef(null);

  // Scroll to the bottom when a new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the user's message to the chat
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: 'user' },
      ]);

      // Add the "Received" message after a slight delay to simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Received', sender: 'bot' },
        ]);
      }, 500);
    }

    setMessage('');
  };

  const toggleChatbot = () => {
    setIsVisible(!isVisible); // Toggle visibility state
  };

  return (
    <>
      <div className={`chatbot-container ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <p>{msg.text}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input-container" onSubmit={handleSubmit}>
          <input
            type="text"
            className="chatbot-input"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="chatbot-submit">
            Send
          </button>
        </form>
      </div>

      {/* Arrow button for toggling visibility */}
      <button
        className={`chatbot-toggle-btn ${!isVisible ? 'visible-btn' : ''}`}
        onClick={toggleChatbot}
      >
        {isVisible ? '↑' : '↓'} {/* Arrow changes based on visibility */}
      </button>
    </>
  );
};

export default Chatbot;
