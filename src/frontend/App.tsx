import React from "react";
import Button from "./components/Button"

function App() {

  let clickButton = () => {
    console.log('from app', this);
  };

  return (
    <>
      <h1>React APP</h1>
      <Button text={"click the button"} onClick={clickButton} />
    </>
  );
}

export default App;