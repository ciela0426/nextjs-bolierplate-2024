"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../../../../store";

interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
