"use client";

import { useEffect, useRef } from "react";
import { Container, OrdersContainer } from "./_styles/styled.order";
import { useAppDispatch, useAppSelector } from "../_store/store";
import { fetchOrders } from "../_slices/order.slice";
import { EachOrder } from "./_components/EachOrder";
import { Loading } from "../_components/loading";

const Orders = () => {
  const initialRef = useRef(true);
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.orders);

  useEffect(() => {
    if (initialRef.current) dispatch(fetchOrders());
    initialRef.current = false;
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <OrdersContainer className="custom-scrollbar">
        {data.map((eachOrder) => (
          <EachOrder key={eachOrder.createdAt} data={eachOrder} />
        ))}
      </OrdersContainer>
    </Container>
  );
};

export default Orders;
