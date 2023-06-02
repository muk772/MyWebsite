import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-6 py-2 m-2 bg-gray-200 rounded-md hover:scale-110">
        {name}
      </button>
    </div>
  );
};

export default Button;
