// lazy_component.mjs - Lazy component: Statistics (dynamic import on visibility)

export const getStats = (todos) => {
  const count = todos.length;
  console.log(`Stats: ${count} todos.`);
  return count;
};