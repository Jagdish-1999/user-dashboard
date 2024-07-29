import { StyledEachOrder } from "../_styles/styled.order";
import { Orders } from "../_types/order.types";

interface PropTypes {
  data: Orders;
}

const EachOrder = ({ data }: PropTypes) => {
  return <StyledEachOrder>{data.orderItems[0].name}</StyledEachOrder>;
};

export { EachOrder };
