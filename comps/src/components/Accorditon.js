import React from "react";
import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accorditon = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
    // if (expandedIndex === nextIndex) {
    //   setExpandedIndex(-1);
    // } else {
    //   setExpandedIndex(nextIndex);
    // }
  };

  const renderedItems = items.map((items, index) => {
    const isExpaned = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpaned ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={items.id}>
        <div
          className="flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {items.label}
          {icon}
        </div>
        <div>
          {isExpaned && <div className="border-b p-5">{items.content}</div>}
        </div>
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accorditon;
