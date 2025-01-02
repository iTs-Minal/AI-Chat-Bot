import { FaRocketchat } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import "./ChatBotApp.css";
import { useEffect, useState } from "react";

const ChatBotApp = ({
  onGoBack,
  chats,
  setChats,
  activeChat,
  setActiveChat,
  onNewChat,
}) => {
  const [inputValue, setInputValue] = useState("");

  const [messages, setMessages] = useState(chats[0]?.messages || []);

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  useEffect(() => {
    const activeChatObj = chats.find((chat) => chat.id === activeChat);
    setMessages(activeChatObj ? activeChatObj.messages : []);
  }, [activeChat, chats]);

  const sendMessage = () => {
    if (inputValue.trim() === "") return;

    const newMessage = {
      type: "prompt",
      text: inputValue,
      timestamp: new Date().toLocaleTimeString(),
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInputValue("");

    const updatedChats = chats.map((chat) => {
      if (chat.id === activeChat) {
        return {
          ...chat,
          messages: updatedMessages,
        };
      }
      return chat;
    });
    setChats(updatedChats);
  };

  const handleSelectChat = (id) => {
    setActiveChat(id);
  };

  return (
    <div className="chat-app">
      <div className="chat-list">
        <div className="chat-list-header">
          <h2>Chat List</h2>
          <span className="rocket-chat-icon" onClick={onNewChat}>
            <FaRocketchat />
          </span>
        </div>
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-list-item ${chat.id=== activeChat ? "active" : ""}`}
            onClick={() => handleSelectChat(chat.id)}
          >
            <h4>{chat.id}</h4>
            <span className="delete-icon">
              <MdDeleteForever />
            </span>
          </div>
        ))}
      </div>
      <div className="chat-window">
        <div className="chat-title">
          <h3>Chat With AI</h3>
          <span className="backarrow-icon" onClick={onGoBack}>
            <IoArrowBackCircleSharp />
          </span>
        </div>
        <div className="chat">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.type === "prompt" ? "prompt" : "response"}
            >
              {msg.text}
              <span>{msg.timestamp}</span>
            </div>
          ))}

          <div className="typing">Typing...</div>
        </div>
        <form className="msg-form" onSubmit={(e) => e.preventDefault()}>
          <span className="emoji-icon">
            <MdEmojiEmotions />
          </span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="msg-input"
            placeholder="Enter Your Message..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <span className="send-icon" onClick={sendMessage}>
            <IoSend />
          </span>
        </form>
      </div>
    </div>
  );
};

export default ChatBotApp;
