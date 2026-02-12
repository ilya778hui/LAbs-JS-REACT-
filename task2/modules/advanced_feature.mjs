// advanced_feature.mjs - Advanced feature: Export to JSON (dynamic import on interaction)

export const exportToJSON = (todos) => {
  console.log('Exporting to JSON...');
  return JSON.stringify(todos);
};