// core.mjs - Core TodoList class (Ch. 5, “Classes with Constructors, Getters, and Setters”)

export class TodoList {
  #todos = [];

  addTodo(text, status = 'pending') {
    this.#todos.push({ text, status });
  }

  getTodos() {
    return this.#todos;
  }
}