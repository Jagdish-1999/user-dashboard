import styled, { css } from "styled-components";

const StyledTable = styled.table`
  display: table;
  height: 100%;
  position: relative;
  border-radius: 4px 4px 0 0;
`;

const Thead = styled.thead`
  width: 100%;
  z-index: 10;
  position: absolute;
  color: ${(props) => props.theme.colors.cart_table_head_fg};
  background-color: ${(props) => props.theme.colors.table_head_bg};
  backdrop-filter: blur(18px);
  border-radius: 4px 4px 0 0;
`;

const Tbody = styled.tbody`
  display: block;
  overflow: auto;
  height: 100%;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.card_border};
  border-radius: 4px;
  position: absolute;
`;

const Tr = styled.tr.withConfig({
  shouldForwardProp: (prop) =>
    !["highlightRow", "head", "empty", "even"].includes(prop),
})<{ head?: boolean; empty?: boolean; highlightRow?: boolean; even?: boolean }>`
  display: flex;
  width: 100%;
  border-top: none;
  padding-block: 8px;

  ${({ empty }) =>
    empty &&
    css`
      border: transparent;
      padding: 1.1rem;
    `}
  ${({ even }) =>
    even &&
    css`
      background-color: ${(props) => props.theme.colors.even_row_bg};
    `}

    ${({ highlightRow }) =>
    highlightRow &&
    css`
      transition: all 0.2s;
      background-color: ${(props) => props.theme.colors.hightlight_row};
    `}

  ${({ head }) =>
    head &&
    css`
      border: transparent;
      padding: 0;
    `}
`;

const Td = styled.td<{ width: string; height: string }>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
`;

export { StyledTable, Thead, Tbody, Tr, Td };
