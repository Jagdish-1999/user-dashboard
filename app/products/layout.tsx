import { ReactNode } from "react";
import { Filters } from "./_components/filters/filter";

const ProductLayout = ({ children }: { children: ReactNode }) => {
  return <Filters>{children}</Filters>;
};

export default ProductLayout;
