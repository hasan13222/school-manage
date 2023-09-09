import React from "react";

const SectionHead = ({title, description}) => {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <p>
        {description}
      </p>
    </div>
  );
};

export default SectionHead;
