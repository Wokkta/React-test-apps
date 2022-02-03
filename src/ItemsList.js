import React from "react";
export default function ItemsList({ items, Item, onDeleteItem }) {
  return (
    <ul className="ui-list">
      {items.map((el) => (
        <li key={el.id} className="ui-item-list">
          <Item info={el} />
          <button className="btn-delete" onClick={() => onDeleteItem(el.id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
