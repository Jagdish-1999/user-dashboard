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
import { CartIcon } from "@/app/_icons/cart";

const imageSliderStyles = css`
  border: 1px solid ${(props) => props.theme.colors.card_border};
  border-radius: 4px;
  width: 120px;
  height: 120px;
`;

const headStyles = css`
  pointer-events: none;
  user-select: none;
  padding-block: 0.5rem;
  font-weight: 800;
  width: 100%;
`;

const itemStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  padding-block: 2rem;
  width: 100%;
`;

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["head", "checkbox", "center", "price"].includes(prop),
})<{ head?: boolean; checkbox?: boolean; center?: boolean; price?: boolean }>`
  cursor: default;
  ${({ head }) => (head ? headStyles : itemStyle)}
  ${({ checkbox }) =>
    checkbox &&
    css`
      & span {
        top: -2px;
      }
    `}

  ${({ center }) =>
    center &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${({ price }) =>
    price &&
    css`
      font-family: DM Sans;
      font-size: 14px;
    `}
`;

const ProductContainer = styled.div`
  padding-inline: 8px;
  font-family: inherit;
`;

const Cart = styled(CartIcon)`
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 50%;
  padding: 4px;
  width: 30px;
  height: 30px;

  &:hover {
    background-color: ${(props) => props.theme.colors.cart_icon_hover};
  }
`;

const columns = [
  // CHECKBOX
  {
    width: "40px",
    id: "checkbox",
    accessKey: "checkbox",
    extraKeys: {},
    headCellLabel() {
      return <Container head></Container>;
    },
    bodyCellLabel({ product, onCellClick }) {
      return (
        <Container checkbox>
          <CheckBox
            name="checkbox"
            onChange={(evt) => {
              this.extraKeys.isChecked = evt.target.checked;
              onCellClick?.({ product, column: this });
            }}
          />
        </Container>
      );
    },
  },
  // IMAGES
  {
    width: "22%",
    id: "images",
    accessKey: "images",
    headCellLabel: () => (
      <Container center head>
        Images
      </Container>
    ),
    bodyCellLabel: function ({ product }: BodyCellLabelProps<Product>) {
      return (
        <Container center>
          <ImageSlider images={product.images} styles={imageSliderStyles} />
        </Container>
      );
    },
  },
  // PRODUCT NAME
  {
    width: "40%",
    id: "name",
    accessKey: "name",
    headCellLabel: () => (
      <Container center head>
        Product name
      </Container>
    ),
    bodyCellLabel: function ({ product }: BodyCellLabelProps<Product>) {
      return (
        <Container>
          <ProductContainer className="truncate line-clamp-5">{`${product[this.accessKey]}`}</ProductContainer>
        </Container>
      );
    },
  },
  //QUANTITY
  {
    width: "15%",
    id: "quantity",
    accessKey: "quantity",
    extraKeys: {},
    headCellLabel: () => (
      <Container center head>
        Quantity
      </Container>
    ),
    bodyCellLabel: function Cell({
      product,
      onCellClick,
    }: BodyCellLabelProps<Product>) {
      const onChange = (option: SelectedOptionTypes) => {
        this.extraKeys.selectedOption = option;
        onCellClick?.({ product, column: this });
      };

      return (
        <Container center>
          <Select<SelectedOptionTypes>
            name="select"
            onChange={onChange}
            options={Array.from({ length: product.quantity }, (_, i) => ({
              id: `${i + 1}`,
              value: `${i + 1}`,
            }))}
          />
        </Container>
      );
    },
  },
  // PRICE
  {
    width: "15%",
    id: "price",
    accessKey: "price",
    headCellLabel: () => (
      <Container center head>
        Price
      </Container>
    ),
    bodyCellLabel: function ({ product }) {
      return (
        <Container center price>
          &#x20B9;
          {`${product["cartPrice" as keyof Product] || product[this.accessKey]}`}
        </Container>
      );
    },
  },
  // CART ICON
  {
    width: "50px",
    id: "cart",
    accessKey: "cart",
    headCellLabel: () => <Container center head></Container>,
    bodyCellLabel: function ({ product, onCellClick }) {
      return (
        <Container center>
          <Cart
            fill="#d30c91"
            onClick={() => {
              onCellClick?.({ product, column: this });
            }}
          />
        </Container>
      );
    },
  },
] as ColumnTypes<Product>[];

export { columns };
