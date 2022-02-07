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
          className="ui-textfield m-2 py-1 px-1 rounded border-2 border-solid border-zinc-300 text-base"
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
          className="ui-textfield m-2 py-1 px-1 rounded border-2 border-solid border-zinc-300 text-base"
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
          className="ui-button   m-2 hover:opacity-0.8 disabled:opacity-80 disabled:cursor-disabled active:shadow-sm active:translate-y-px bg-blue-700 text-white rounded cursor-pointer transition-opaity duration-200 easy-out text-16 px-2 py-2 w-40 shadow-lg"
          value="Добавить"
          disabled={!(name, desc)}
        />
      </div>
    </form>
  );
}
