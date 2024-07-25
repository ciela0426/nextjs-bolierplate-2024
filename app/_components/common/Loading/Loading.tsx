"use client";

import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/_store";
import { selectLoading } from "@/app/_store/loading/loading";

/**
 * test code for redux
 * @author jiwoo park
 */
const Loading = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Loading: {String(loading)}</h1>
    </div>
  );
};

export default Loading;
