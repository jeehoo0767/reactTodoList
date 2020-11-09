import React from 'react';
import './TodoListTemplate.css';
import palette from './Palette'

const TodoListTemplate = ({pallet, form, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
    <div className="palette">
        {palette}
    </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;