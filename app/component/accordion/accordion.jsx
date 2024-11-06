"use client";
import React, { useState } from "react";
import PropTypes from "prop-types"; // Add this import

function A_Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={` ${
        isOpen ? "bg-secondaryBlue text-white" : "bg-white text-black"
      }  rounded-lg px-6 py-2`}
    >
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full py-4 text-left  focus:outline-none"
      >
        <span className="text-2xl font-semibold">{title}</span>
        <span
          className={`h-12 aspect-square rounded-full border border-primaryBlue flex justify-center items-center transform transition-transform ${
            isOpen ? "rotate-90 border-white" : "rotate-0"
          }`}
        >
          →
        </span>
      </button>
      {isOpen && (
        <div className="py-2 ">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default A_Accordion;

A_Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
