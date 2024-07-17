import { ReactNode } from "react";

export interface BodyCellLabelProps<T> {
  product: T;
  isDarkMode?: boolean;
  column?: ColumnTypes<T>;
  onCellClick?(context: BodyCellLabelProps<T>): any;
}

export interface SelectedOptionTypes {
  id: string;
  value: string;
}
export interface ColumnTypes<T> {
  id: string;
  width: string;
  height: string;
  accessKey: keyof T;
  extraKeys: { [key: string]: any };
  onCellClick?(context: BodyCellLabelProps<T>): any;
  headCellLabel: () => ReactNode;
  bodyCellLabel(context: BodyCellLabelProps<T>): ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: ColumnTypes<T>[];
  onCellClick?(context: BodyCellLabelProps<T>): any;
  highlightRows?: string[];
}
