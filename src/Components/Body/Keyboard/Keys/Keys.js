import React from "react";

function Keys({ k, changeKey }) {
  const handleClick = () => {
    changeKey(k);
  };
  return (
    <button className="keys" onClick={handleClick}>
      {k}
    </button>
  );
}

export default Keys;
