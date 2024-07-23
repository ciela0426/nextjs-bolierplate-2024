"use client";

import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store";
import { increment, decrement, selectCount } from "@/store/counterSlice";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
