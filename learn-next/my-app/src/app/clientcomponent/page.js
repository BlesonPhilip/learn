"use client";

export default function ClientComponent() {
  console.log("ClientComponent rendered");
  return (
    <div>
      <h1>Client Component</h1>
      <p>This component is rendered on the client side.</p>
      <button onClick={() => alert("clicked")}>click me</button>
    </div>
  );
}
