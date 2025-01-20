import { StyledEachOrder } from "../_styles/styled.order";
import { Orders } from "../_types/order.types";

interface PropTypes {
  data: Orders;
}

const EachOrder = ({ data }: PropTypes) => {
  return (
    <StyledEachOrder>
      <summary>{data.name}</summary>
      <p>{data.orderItems[0].name}</p>
    </StyledEachOrder>
  );
};

export { EachOrder };
