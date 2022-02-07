import React from "react";
export default function ItemsList({ items, Item, onDeleteItem }) {
  return (
    <ul className="ui-list list-none m-0 p-0">
      {items.map((el) => (
        <li key={el.id} className="ui-item-list ml-2 mb-80px">
          <Item info={el} />
          <button className="btn-delete ml-10  border-solid border-2 border-ligthgray rounded shadow-lg" onClick={() => onDeleteItem(el.id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
