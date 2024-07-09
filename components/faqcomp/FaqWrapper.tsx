"use client";
import React, { useState } from "react";
import { Faq } from "./Faq";

export const FaqWrapper = () => {
  const faqs = [
    {
      id: 1,
      question: "What is the Season of Solutions?",
      answer: [
        "Season of Solutions is a month-long innovation challenge organized by the GDSC Club, designed to take participants through the journey of ideation to execution. Participants will brainstorm ideas, build prototypes, and present their final projects to a panel of judges.",
      ],
    },
    {
      id: 2,
      question: "What are the phases of the event?",
      answer: [
        "Ideation Phase: Participants brainstorm and develop innovative ideas.",
        "Prototyping Phase: Participants build and refine their prototypes in the Protolab.",
        "Launchpad Phase: Participants showcase their innovations and present them to a panel of judges.",
      ],
    },
    {
      id: 3,
      question: "Why should I participate?",
      answer: [
        "Skill Development: Enhance your creativity,problem-solving, and technical skills.",
        "Networking:Connect with peers, mentors, and industry professionals.",
        "Recognition: Opportunity to showcase your innovations and win prizes.",
      ],
    },
    {
      id: 4,
      question: "How can I register for the event?",
      answer: ["The registration deadline is [date]", "Registration link:"],
    },
    {
      id: 5,
      question: "Who can participate in the Season of Solutions?",
      answer: ["The event is open to all students from any College"],
    },
    {
      id: 6,
      question: "How can I contact the organizers for more information?",
      answer: ["For any queries, please contact us:"],
    },
    {
      id: 7,
      question: "What kind of ideas are we expected to  brainstorm?",
      answer: [
        "Participants are encouraged to brainstorm innovative solutions that address real-world challenges.",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  function handleclick(index: number) {
    setActiveIndex(activeIndex === index ? null : index);
  }
  return (
    <div id="faq" className="flex flex-col items-center  mb-32 p-8 sm:p-2">
      <h1 className="font-impact text-white mb-5 sm:mb-10 lg:mb-15 text-2xl lg:text-5xl xl:text-7xl xl:mb-20">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      {faqs.map((faq, index) => (
        <Faq
          key={index}
          question={faq.question}
          answer={faq.answer}
          isActive={activeIndex === index}
          onclick={() => {
            handleclick(index);
          }}
          id={faq.id}
        />
      ))}
    </div>
  );
};
