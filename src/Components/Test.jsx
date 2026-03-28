import React, { Suspense, useState } from "react";
import Api_test from "./Api_test";

const Test = ({ id }) => {
  const handleClick = (para) => {
    alert(
      `Button in Test component with ID ${Number(id) + Number(para)} clicked!`,
    );
  };
  const [count, setCount] = useState(0);

  const handleClick2 = () => {
    setCount(count + 1);
    console.log(`Count: ${count}`);
  };
  const api = fetch("https://openapi.programming-hero.com/api/all").then(
    (res) => res.json(),
  );

  return (
    <>
      <div>
        <h1>Test Component</h1>
        <p>ID: {id}</p>
        <p>{`Count: ${count <= 10 ? `${count} - hit the click me button 2 and get more!` : `${count} - licked Over Then 10!`}`}</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse illo
          eligendi quaerat consequatur at recusandae blanditiis tempora
          provident officia, maiores quod veniam asperiores fugit, voluptate,
          suscipit magnam cupiditate architecto molestias. Atque accusantium
          assumenda, iusto totam laudantium tenetur ab numquam maiores
          perspiciatis excepturi expedita beatae?
        </p>
      </div>
      <button onClick={() => handleClick(20)}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>

      
      <Suspense fallback={<div>Loading...</div>}>
        <Api_test api={api} />
      </Suspense>
    </>
  );
};

export default Test;
