"use client";

import { useChat } from "ai/react";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

function Chat() {
  const { messages, handleSubmit, handleInputChange, input } = useChat();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-5 flex flex-col">
        <h1 className="text-2xl font-bold mb-5">Chat AI</h1>
        <div className="mb-5 overflow-auto flex-1">
          <h2 className="text-xl mb-2">Chat History</h2>
          <ul className="space-y-2">
            {messages.map((m, index) =>
              m.role === "assistant" ? (
                <li key={index} className="p-2 bg-gray-700 rounded-md">
                  {m.content}
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col p-5">
        <div className="flex-1 overflow-auto mb-5">
          <ul className="space-y-4">
            {messages.map((m, index) => (
              <li
                key={index}
                className={`p-3 rounded-md ${
                  m.role === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-300 text-black self-start"
                }`}
              >
                <strong>{m.role === "user" ? "User: " : "Assistant: "}</strong>
                {m.content}
              </li>
            ))}
          </ul>
        </div>
        <form className="flex space-x-2" onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={handleInputChange}
            className="flex-1 p-2 outline-none rounded-md border border-gray-300"
            type="text"
            placeholder="Typing..."
          />
          <button
            type="submit"
            className="bg-gray-500 rounded-[50%] w-[50px] h-[50px] px-[10.5px] py-2"
          >
            <FaArrowUp className="text-[30px] text-gray-700" />
          </button>
          {/* <button
            className="bg-green-500 rounded-md p-2 text-white"
            type="submit"
          >
            Submit
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default Chat;
