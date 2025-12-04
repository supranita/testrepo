import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const FAQItem = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between p-5 border-b border-gray-200"
      >
        <h1 className="lg:text-4xl md:text-2xl text-base font-semibold">
          {question}
        </h1>
        <div>
          <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
        </div>
      </div>
      {isOpen && (
        <div className="px-5 py-8 lg:text-base text-xs">{children}</div>
      )}
    </>
  );
};

export default FAQItem;