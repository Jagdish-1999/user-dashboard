import { useTheme } from "@/app/_components/theme-providers";
import { StyledTable, Tbody, Td, Thead, Tr } from "./styled.table";
import { TableProps } from "./table.types";
import { useEffect, useState } from "react";

const Table = <T extends { _id: string }>({
  data,
  columns,
  onCellClick,
  highlightRows,
}: TableProps<T>) => {
  const { isDarkMode } = useTheme();

  return (
    <StyledTable>
      <Thead>
        <Tr>
          {columns.map((column) => (
            <Td key={column.id} width={column.width} height={column.height}>
              {column.headCellLabel()}
            </Td>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((product) => (
          <Tr
            key={product._id}
            highlightRow={highlightRows?.includes(product._id)}
          >
            {columns.map((column) => (
              <Td width={column.width} height={column.height} key={column.id}>
                {column.bodyCellLabel({ product, onCellClick, isDarkMode })}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </StyledTable>
  );
};

export { Table };
