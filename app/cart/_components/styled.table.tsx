import styled, { css } from "styled-components";

const StyledTable = styled.table`
  display: table;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody``;

const Tr = styled.tr.withConfig({
  shouldForwardProp: (prop) => prop !== "highlightRow",
})<{ highlightRow?: boolean }>`
  display: flex;
  width: 100%;

  ${({ highlightRow }) =>
    highlightRow &&
    css`
      transition: all 0.2s;
      background-color: #1234e911;
    `}
`;

const Th = styled.th``;

const Td = styled.td<{ width: string; height: string }>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  border-bottom: 1px solid ${(props) => props.theme.colors.cart_border};
`;

export { StyledTable, Thead, Tbody, Tr, Th, Td };
