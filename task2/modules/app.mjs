// app.mjs - Main application (static imports, Ch. 5, “Static Imports”)
// Demonstrates different import patterns

import { TodoList } from './core.mjs'; // Named import
import * as Utils from './utils.mjs'; // Module Object
import { TODO_STATUS } from './constants.mjs'; // Named import

export const initApp = () => {
  const todoList = new TodoList();
  todoList.addTodo('Buy milk', TODO_STATUS.PENDING);
  Utils.logMessage('App initialized with static imports.');
  return todoList;
};