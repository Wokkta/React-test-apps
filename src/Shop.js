import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import ItemsList from "./ItemsList";
import Item from "./Item.js";
import AddItem from "./AddItem";
export default function Shop() {
  const [items, setItems] = useState(() => {
    let value = localStorage.getItem("items");
    if (!value) {
      return [];
    }
    value = JSON.parse(value);
    return value;
  });
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState(uuid());
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    if (items.length === 0) {
      document.title = "Товары отсутствуют";
    } else {
      if (items.length < 5) {
        document.title = String(items.length) + " товара";
      } else {
        document.title = String(items.length) + " товаров";
      }
    }
  }, [items]);
  function handleAddItem(event) {
    event.preventDefault();
    setItems([...items, { name: name, desc: desc, id: id }]);
    setName("");
    setDesc("");
    setId(uuid());
  }
  function handleDeleteItem(id) {
    setItems(items.filter((e) => e.id !== id));
  }
  return (
    <>
      <AddItem
        onAddItem={handleAddItem}
        name={name}
        desc={desc}
        setDesc={setDesc}
        setName={setName}
      />

      <div>
        {!items.length && <p className="ui-title">Добавьте первый товар</p>}
      </div>
      <ItemsList items={items} Item={Item} onDeleteItem={handleDeleteItem} />
    </>
  );
}
