"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";

function Help() {
  const { theme } = useTheme();

  return (
    <div
      className={`max-w-3xl mx-auto mt-10 p-6 rounded-lg shadow-md ${
        theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-white"
      }`}
    >
      <h2
        className={`text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text ${
          theme === "light" ? "text-black" : "text-transparent"
        }`}
      >
        Help & FAQ
      </h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">How to Play</h3>
        <p className="mb-4">
          Welcome to Gojirun! Your objective is to help Gojira run and jump over obstacles. Use the following actions to play:
        </p>
        <ul className="list-disc list-inside">
          <li>Tap or click anywhere on the game area to make Gojira jump.</li>
          <li>Avoid tanks and other obstacles to keep running and achieve the highest score possible.</li>
        </ul>
        <p className="mt-4">Good luck, and try not to get caught!</p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Controls</h3>
        <ul className="list-disc list-inside">
          <li>Mouse Click / Tap - Jump</li>
          <li>Keyboard Spacebar - Jump</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">FAQs</h3>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqItem({ question, answer, theme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border rounded-lg ${
        theme === "light" ? "border-gray-300" : "border-gray-700"
      }`}
    >
      <button
        className={`flex justify-between w-full px-4 py-2 text-lg font-medium text-left transition-all duration-300 ${
          theme === "light"
            ? "text-gray-800 bg-gray-200 hover:bg-purple-300"
            : "text-purple-300 bg-gray-700 hover:bg-purple-500"
        } focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div
          className={`px-4 pt-4 pb-2 ${
            theme === "light" ? "text-gray-800" : "text-gray-200"
          }`}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

const faqData = [
  {
    question: "How do I make Gojira jump?",
    answer:
      "You can click/tap anywhere on the game area or press the spacebar to make Gojira jump.",
  },
  {
    question: "What happens if I hit an obstacle?",
    answer:
      "If Gojira hits an obstacle, the game is over, and you'll need to start again to improve your score.",
  },
  {
    question: "How do I increase my score?",
    answer:
      "Keep running and avoid all obstacles. The longer you run without hitting anything, the higher your score.",
  },
  {
    question: "Is there a way to pause the game?",
    answer:
      "Currently, the game does not support pausing. Make sure you're ready to keep playing once you start!",
  },
];

export default Help;
