import { ReactNode } from "react";
import InitialLayout from "./_components/layout/InitialLayout/InitialLayout";

// initial css style
import "./_assets/_styles/reset.scss";

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <InitialLayout>{children}</InitialLayout>
      </body>
    </html>
  );
};

export default RootLayout;
