import { useState, useMemo, useEffect, useRef } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  const sqrt = useMemo(() => getSqrt(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="from-control w-25"
      />
      <br />
      <h3 className="my-3">
        The squrt of {number} is: {sqrt}
      </h3>
      <button className="btn btn-primary my-2" onClick={onClick}>
        Re Render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
}

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }
  console.log("Expensive function called");
  return Math.sqrt(n);
}

export default UseMemoExample;
