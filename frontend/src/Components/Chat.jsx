import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000");

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prevMsgs) => [...prevMsgs, msg]);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="px-4 py-2 bg-gray-300">Chat Application</div>
      <div className="flex-1 overflow-y-scroll p-4">
        {messages.map((msg, index) => (
          <p key={index} className="text-gray-700">
            {msg}
          </p>
        ))}
      </div>
      <form onSubmit={sendMessage} className="bg-gray-200 p-4">
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="border w-full p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 ml-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
