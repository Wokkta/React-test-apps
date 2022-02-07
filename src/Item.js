import React, { useState } from "react";
import './index.css';
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
      <div className="item-info ml-2">
        <h2 className="item-title text-30px">{info.name}</h2>
        <p className="item-desc">{info.desc}</p>
      </div>
      <div className="item-quantity flex items-center mb-50px">
        <button
          className="item-button ml-2 text-2xl  active:shadow-lg hover:opacity-80 disabled:opacity-40 disabled:cursor-disabled active:translate-y-px bg-white text-black border-1 rounded-3px cursor-pointer ease-out duration-200 transition-opacity shadow-lg  mr-2"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total text-2xl">{total ? total : ""}</h3>
        <button className="item-button ml-2 text-2xl  active:shadow-lg hover:opacity-80 disabled:opacity-40 disabled:cursor-disabled active:translate-y-px bg-white text-black border-1 rounded-3px cursor-pointer ease-out duration-200 transition-opacity shadow-lg  mr-2 " onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
