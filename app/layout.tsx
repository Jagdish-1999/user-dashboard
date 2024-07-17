import React from "react";
import { Afacad } from "next/font/google";
import StyledComponentsRegistry from "@/app/_lib/registry";
import { ReduxStoreProvider } from "./_providers/redux-store-provider";

export const metadata = {
  title: "User dashboard",
  description: "This is ecommerse user dashboard",
};

const afacad = Afacad({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={afacad.className} suppressHydrationWarning>
        <ReduxStoreProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
