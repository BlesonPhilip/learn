import React from "react";
import PackageDetails from "./components/packagedetails";
import Button from "./components/button";

const App = () => {
  const onAlert = (event) => {
    event.target.innerText = "clicked";
    alert("Button clicked");
  };

  return (
    <div>
      <PackageDetails />;
      <Button label={"click me"} onAlert={onAlert} />
    </div>
  );
};

export default App;
