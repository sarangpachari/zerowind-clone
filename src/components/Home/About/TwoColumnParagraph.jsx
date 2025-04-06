import React from "react";

const TwoColumnParagraph = ({ text }) => {
  const words = text.split(" ");

  return (
    <div className="max-w-7xl mx-auto columns-1 md:columns-2 gap-6 text-justify">
      {words.map((word, index) => (
        <span key={index} className="inline-block mr-1 whitespace-nowrap">
          {word}
        </span>
      ))}
    </div>
  );
};

export default TwoColumnParagraph;
