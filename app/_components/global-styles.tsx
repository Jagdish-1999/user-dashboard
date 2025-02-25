"use client";
import { createGlobalStyle } from "styled-components";
import "../fonts.css";

const GlobalStyles = createGlobalStyle`
:root {
  --padding-2:2px;
  --padding-4:4px;
  --padding-6:6px;
  --padding-8:8px;
  --padding-10:10px;
  --padding-12:12px;
  --padding-14:14px;
}
html,body {
    width: 100%;
    height: 100%;
}
* {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
body {
    background-color: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.fg};
    font-family: Afacad;
    transition: all 0.3s;
}
.custom-scrollbar::-webkit-scrollbar {
  background-color: transparent;
  width: 4px;
  height: 4px;
}

.custom-scrollbar {
  scrollbar-width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  width: 8px;
  height: 4px;
  border-radius: 8px;
  background-color: #afafaf;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 8px;
}

.custom-scrollbar::-webkit-scrollbar-corner {
  display: none;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; 
}

.line-clamp-5 {
  -webkit-line-clamp: 5; 

}
`;

export default GlobalStyles;
