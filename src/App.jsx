const App = () => {
  console.log(import.meta.env.VITE_API_KEY);
  return <div>{import.meta.env.VITE_API_KEY}</div>;
};

export default App;
