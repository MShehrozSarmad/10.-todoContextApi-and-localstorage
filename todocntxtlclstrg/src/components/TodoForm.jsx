import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
    const [todo, settodo] = useState('')

    const {addTodo} = useTodo()

    const addtdo = (e) => {
        e.preventDefault();
        if(!todo) return;
        addTodo({todo: todo, completed: false}) //as property name of object and value variable name is same, so {todo: todo}, could be written as {todo}
        console.log('hello here ===>',todo);
        settodo('')
    }

  return (
    <form onSubmit={addtdo} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}    //wriring
        onChange={(e) => settodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
