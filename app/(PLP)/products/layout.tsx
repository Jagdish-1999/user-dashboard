"use client";
import { ReactNode } from "react";
import { Filters } from "./_components/filters/filter";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100% - 60px);
  padding: 0rem 8rem;
  display: grid;
  gap: 1rem;
  background-color: ${(props) => props.theme.colors.bg};
`;

const ProductLayout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default ProductLayout;
