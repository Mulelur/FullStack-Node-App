import React from 'react';
import {
  Container,
  OrderComplete,
  OrderList,
  OrderListItem,
  OrderProsercing,
  IconWapper,
  OrderDecription,
  OrderPrice,
  OrderTime,
  OrderTitle,
  Row,
  Col,
  Header,
  HeaderTitle,
  TakeOrder,
  OrderNumder,
} from './styles/orders';

export default function Orders({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Orders.OrderList = function OrderOrderList({ children, ...restProps }) {
  return <OrderList {...restProps}>{children}</OrderList>;
};

Orders.OrderListItem = function OrderOrderListItem({ children, ...restProps }) {
  return <OrderListItem {...restProps}>{children}</OrderListItem>;
};

Orders.Orders = function OrderOrder({ children, ...restProps }) {
  return <Orders {...restProps}>{children}</Orders>;
};

Orders.OrderComplete = function OrderOrderComplete({ children, ...restProps }) {
  return <OrderComplete {...restProps}>{children}</OrderComplete>;
};

Orders.OrderProsercing = function OrderOrderProsercing({
  children,
  ...restProps
}) {
  return <OrderProsercing {...restProps}>{children}</OrderProsercing>;
};

Orders.OrderList = function OrderOrderList({ children, ...restProps }) {
  return <OrderList {...restProps}>{children}</OrderList>;
};

Orders.OrderList = function OrderOrderList({ children, ...restProps }) {
  return <OrderList {...restProps}>{children}</OrderList>;
};

Orders.IconWapper = function OrderIconWapper({ children, ...restProps }) {
  return <IconWapper {...restProps}>{children}</IconWapper>;
};

Orders.OrderTitle = function OrderOrderTitle({ children, ...restProps }) {
  return <OrderTitle {...restProps}>{children}</OrderTitle>;
};

Orders.OrderPrice = function OrderOrderPrice({ children, ...restProps }) {
  return <OrderPrice {...restProps}>{children}</OrderPrice>;
};

Orders.OrderDecription = function OrderOrderDecription({
  children,
  ...restProps
}) {
  return <OrderDecription {...restProps}>{children}</OrderDecription>;
};

Orders.OrderTime = function OrderOrderTime({ children, ...restProps }) {
  return <OrderTime {...restProps}>{children}</OrderTime>;
};

Orders.Row = function OrderRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Orders.HeaderTitle = function OrderHeaderTitle({ children, ...restProps }) {
  return <HeaderTitle {...restProps}>{children}</HeaderTitle>;
};

Orders.Header = function OrderHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Orders.TakeOrder = function OrderTakeOrder({ children, ...restProps }) {
  return <TakeOrder {...restProps}>{children}</TakeOrder>;
};

Orders.Col = function OrderCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};

Orders.OrderNumder = function OrderOrderNumder({ children, ...restProps }) {
  return <OrderNumder {...restProps}>{children}</OrderNumder>;
};
