import Employee from "./employee";

const App = () => {
  let emp = [
    {
      name: "John",
      age: 25,
      designation: "Software Engineer",
    },
    {
      name: "Jane",
      age: 24,
      designation: "Senior Software Engineer",
    },
  ];

  return (
    <div>
      {emp.map((obj, index) => (
        <Employee key={index} {...obj} />
      ))}
    </div>
  );
};

export default App;
