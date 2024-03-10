import Example from "./components/Example/Example";
import MyComponent from "./components/MyComponent/MyComponent";

const App = () => {
  const total = Math.round(0 / 0) || 0;

  return (
    <>
      <Example>
        <p style={{ height: "1em" }}>Test</p>
      </Example>
      <MyComponent />
      <p>Test: {total}</p>
    </>
  );
};

export default App;
