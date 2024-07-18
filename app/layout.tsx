import React from "react";
import StyledComponentsRegistry from "@/app/_lib/registry";
import { ReduxStoreProvider } from "./_providers/redux-store-provider";

export const metadata = {
  title: "User dashboard",
  description: "This is ecommerse user dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ReduxStoreProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
