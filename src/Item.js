import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <div className="item-info">
        <h2 className="item-title">{info.name}</h2>
        <p className="item-desc">{info.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="bg-white c-black border border-lightgray px-5 py-20 min-w-50 text-16 rounded-3 cursor-pointer easy-out duration-200 mr-10 ml-10"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total">{total ? total : ""}</h3>
        <button className="item-button" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
