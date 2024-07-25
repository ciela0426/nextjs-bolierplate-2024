"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@/app/_store";

interface InitialLayoutProps {
  children: ReactNode;
}

/**
 * for SEO
 * @author jiwoo park 2024.07.25
 */
const InitialLayout = ({ children }: InitialLayoutProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default InitialLayout;
