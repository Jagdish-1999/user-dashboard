"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import GlobalStyles from "@/app/_components/global-styles";
import { Navbar } from "@/app/_components/navbar/navbar";
import ThemeProviders from "@/app/_components/theme-providers";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined")
    return (
      <ThemeProviders>
        <GlobalStyles />
        <Navbar />
        {children}
      </ThemeProviders>
    );

  return (
    <ThemeProviders>
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        <GlobalStyles />
        <Navbar />
        {children}
      </StyleSheetManager>
    </ThemeProviders>
  );
}
