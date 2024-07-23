import { ReactNode } from "react";

import "../assets/styles/reset.scss";
import ClientProvider from "./components/layout/ClientProvider/ClientProvider";

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
