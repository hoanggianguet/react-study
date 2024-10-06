import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary outline rounded>Click me!!</Button>
      </div>
      <div>
        <Button secondary outline rounded>Click me!!</Button>
      </div>
      <div>
        <Button success outline rounded>Click me!!</Button>
      </div>
      <div>
        <Button warning outline rounded>Click me!!</Button>
      </div>
      <div>
        <Button danger outline rounded>Click me!!</Button>
      </div>
    </div>
  );
}

export default App;
