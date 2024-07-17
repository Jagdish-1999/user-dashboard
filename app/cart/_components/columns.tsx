import { DeleteIcon } from "@/app/_icons/delete";
import {
  BodyCellLabelProps,
  ColumnTypes,
  SelectedOptionTypes,
} from "./table.types";
import { Product } from "@/app/_types/products.types";
import styled, { css } from "styled-components";

import { ImageSlider } from "@/app/_components/image-slider/image-slider";
import { CheckBox } from "@/app/_components/checkbox/checkbox";
import { Select } from "@/app/_components/select/select";

const customStyles = css`
  border: 1px solid ${(props) => props.theme.colors.card_border};
  border-radius: 8px;
`;

const headStyles = css`
  pointer-events: none;
  color: ${(props) => props.theme.colors.cart_table_head_fg};
  text-transform: uppercase;
  padding: 1rem 1.7rem;
  font-weight: 800;
`;

const itemStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 261.5px;
  padding: 1rem 1.7rem;
`;

const CheckboxContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isHeadLabel",
})<{ isHeadLabel?: boolean }>`
  ${({ isHeadLabel }) => (isHeadLabel ? headStyles : itemStyle)}
  ${({ isHeadLabel }) =>
    isHeadLabel &&
    css`
      height: 53.5px;
    `}
`;

const ProductContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isHeadLabel",
})<{ isHeadLabel?: boolean }>`
  ${({ isHeadLabel }) => (isHeadLabel ? headStyles : css``)}
  padding:1rem 2rem;
`;

const QuantityLabel = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isHeadLabel",
})<{ isHeadLabel?: boolean }>`
  ${({ isHeadLabel }) => (isHeadLabel ? headStyles : itemStyle)}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const PriceLabel = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isHeadLabel",
})<{ isHeadLabel?: boolean }>`
  ${({ isHeadLabel }) => (isHeadLabel ? headStyles : itemStyle)}
`;

const ProductNameLabel = styled.div`
  max-width: 200px;
  margin-top: 0.5rem;
`;

const DeleteLabel = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isHeadLabel",
})<{ isHeadLabel?: boolean }>`
  ${({ isHeadLabel }) => (isHeadLabel ? headStyles : itemStyle)}
  ${({ isHeadLabel }) =>
    isHeadLabel &&
    css`
      height: 53.5px;
    `} 
    width: 80.33px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const Delete = styled(DeleteIcon)`
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 50%;
  padding: 4px;
  width: 34px;
  height: 34px;

  &:hover {
    background-color: #ff000033;
  }
`;

const columns = [
  {
    width: "fit-content",
    id: "checkbox",
    accessKey: "checkbox",
    extraKeys: {},
    headCellLabel() {
      return <CheckboxContainer isHeadLabel></CheckboxContainer>;
    },
    bodyCellLabel({ product, onCellClick }) {
      return (
        <CheckboxContainer>
          <CheckBox
            name="checkbox"
            onChange={(evt) => {
              this.extraKeys.isChecked = evt.target.checked;
              onCellClick?.({ product, column: this });
            }}
          />
        </CheckboxContainer>
      );
    },
  },
  {
    width: "45%",
    id: "name",
    accessKey: "name",
    headCellLabel: () => (
      <ProductContainer isHeadLabel>Product name</ProductContainer>
    ),
    bodyCellLabel: function ({ product }: BodyCellLabelProps<Product>) {
      return (
        <ProductContainer>
          <ImageSlider images={product.images} styles={customStyles} />
          <ProductNameLabel className="truncate">{`${product[this.accessKey]}`}</ProductNameLabel>
        </ProductContainer>
      );
    },
  },
  {
    width: "20%",
    id: "quantity",
    accessKey: "quantity",
    extraKeys: {},
    headCellLabel: () => <QuantityLabel isHeadLabel>Quantity</QuantityLabel>,
    bodyCellLabel: function Cell({
      product,
      onCellClick,
    }: BodyCellLabelProps<Product>) {
      const onChange = (option: SelectedOptionTypes) => {
        this.extraKeys.selectedOption = option;
        onCellClick?.({ product, column: this });
      };

      return (
        <QuantityLabel>
          <Select<SelectedOptionTypes>
            name="select"
            onChange={onChange}
            options={Array.from({ length: product.quantity }, (_, i) => ({
              id: `${i + 1}`,
              value: `${i + 1}`,
            }))}
          />
        </QuantityLabel>
      );
    },
  },
  {
    width: "20%",
    id: "price",
    accessKey: "price",
    headCellLabel: () => <PriceLabel isHeadLabel>Price</PriceLabel>,
    bodyCellLabel: function ({ product }) {
      return (
        <PriceLabel>
          &#x20B9;
          {`${product["cartPrice" as keyof Product] || product[this.accessKey]}`}
        </PriceLabel>
      );
    },
  },
  {
    width: "fit-content",
    id: "delete",
    accessKey: "delete",
    headCellLabel: () => <DeleteLabel isHeadLabel></DeleteLabel>,
    bodyCellLabel: function ({ product, onCellClick }) {
      return (
        <DeleteLabel>
          <Delete
            fill="red"
            onClick={() => {
              onCellClick?.({ product, column: this });
            }}
          />
        </DeleteLabel>
      );
    },
  },
] as ColumnTypes<Product>[];

export { columns };
