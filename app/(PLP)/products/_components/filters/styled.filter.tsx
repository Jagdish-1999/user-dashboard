import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: calc(100% - 60px);
`;

const FilterWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.nav_bg};
  width: 20%;
  padding: var(--padding-12);
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export { Container, FilterWrapper, ChildrenWrapper };
