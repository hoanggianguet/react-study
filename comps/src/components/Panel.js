import React from "react";
import className from "classnames";

const Panel = ({ children, classNames, ...rest }) => {
  const finalClassName = className(
    "border rounded p-3 shadow w-full",
    classNames
  );
  return (
    <div {...rest} className={finalClassName}>
      {children}
    </div>
  );
};

export default Panel;
