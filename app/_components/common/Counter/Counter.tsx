"use client";

import { useSelector } from "react-redux";
import {
  increment,
  decrement,
  selectCount,
} from "@/app/_store/slice/counterSlice";
import { useAppDispatch } from "@/app/_store";

/**
 * test code for redux
 * @author jiwoo park
 */
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
