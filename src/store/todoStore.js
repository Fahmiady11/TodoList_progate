import create from 'zustand';
import { persist } from 'zustand/middleware';

const useTodoStore = create(
  persist((set) => ({
    todos: [],

    todosTemp: [],

    addTodo: (todo) =>
      set((state) => ({
        todos: [...state.todos, todo],
      })),

    removeTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),

    updateTodo: (change) =>
      set((state) => ({
        todos: [...state.todos.filter((todo) => todo.id !== change.id), change],
      })),

    getTodo: (id) =>
      set((state) => ({
        todosTemp: state.todos.filter((todo) => todo.id === id),
      })),

    toggleTodo: (id) =>
      set((state) => ({
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            todo.isDone = !todo.isDone;
          }
          return todo;
        }),
      })),
  })),
  {
    name: "todo-List",
    getStorage: () => localStorage,
  }
);

export default useTodoStore;
