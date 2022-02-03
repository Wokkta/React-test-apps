import React from "react";
export default function AddItem({ onAddItem, name, desc, setDesc, setName }) {
  return (
    <form onSubmit={onAddItem}>
      <div>
        <label htmlFor="Name">Name</label>
        <input
          id="Name"
          type="text"
          placeholder="Название товара"
          className="ui-textfield"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <input
          id="desc"
          type="text"
          placeholder="Описание товара"
          className="ui-textfield"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="form-footer">
        {(name, desc) ? (
          <div className="validation"></div>
        ) : (
          <div className="validation">Заполните все пункты</div>
        )}
        <label htmlFor="submit">Submit</label>
        <input
          type="submit"
          id="submit"
          className="ui-button"
          value="Добавить"
          disabled={!(name, desc)}
        />
      </div>
    </form>
  );
}
