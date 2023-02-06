import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import { Todos } from "./Components/Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, task: "Go To Gym", completed: false },
    { id: 1, task: "Read book", completed: false },
  ]);
  const handleComplete = (todo) => {
    console.log(todo);
    setTodos(
      todos.map((t) => {
        if (todo.id === t.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      })
    );
  };

  const handleDelete = (id) => {
    const findedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(findedTodo);
  };
  return (
    <div className="App">
      <TodoForm todos={todos} setTodos={setTodos} />
      <Todos
        todos={todos}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
