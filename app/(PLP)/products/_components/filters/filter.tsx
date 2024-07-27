"use client";

import { ReactNode } from "react";
import { ChildrenWrapper, Container, FilterWrapper } from "./styled.filter";

interface FilterProps {
  children: ReactNode;
}
const Filters = ({ children }: FilterProps) => {
  return (
    <Container>
      <FilterWrapper>Filters</FilterWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
};

export { Filters };
