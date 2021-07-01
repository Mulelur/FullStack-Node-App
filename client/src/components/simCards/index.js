import React from "react";
import {
  Container,
  SimCard,
  Description,
  IconWapper,
  Price,
  Title,
  Header,
  AddIconWapper,
  Row,
  Col,
  HeaderTitle,
  Form,
  FormGrup,
  FormInput,
  Formlabel,
  Order,
  Submit,
  SimRow,
} from "./styles/simCards";

export default function SimCards({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SimCards.Title = function SimCardTitle({ children, ...restProps }) {
  return <SimCardTitle {...restProps}>{children}</SimCardTitle>;
};

SimCards.Price = function SimCardPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
};

SimCards.Description = function SimCardDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

SimCards.AddIconWapper = function SimCardAddIconWapper({
  children,
  ...restProps
}) {
  return <AddIconWapper {...restProps}>{children}</AddIconWapper>;
};

SimCards.SimCard = function SimCardSimCard({ children, ...restProps }) {
  return <SimCard {...restProps}>{children}</SimCard>;
};

SimCards.IconWapper = function SimCardIconWapper({ children, ...restProps }) {
  return <IconWapper {...restProps}>{children}</IconWapper>;
};

SimCards.Title = function SimCardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

SimCards.Header = function SimCardHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

SimCards.Row = function SimCardRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

SimCards.Col = function SimCardCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};

SimCards.HeaderTitle = function SimCardHeaderTitle({ children, ...restProps }) {
  return <HeaderTitle {...restProps}>{children}</HeaderTitle>;
};

SimCards.Form = function SimCardForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

SimCards.FormGrup = function SimCardFormGrup({ children, ...restProps }) {
  return <FormGrup {...restProps}>{children}</FormGrup>;
};

SimCards.Formlabel = function SimCardFormlabel({ children, ...restProps }) {
  return <Formlabel {...restProps}>{children}</Formlabel>;
};

SimCards.FormInput = function SimCardFormInput({ children, ...restProps }) {
  return <FormInput {...restProps}>{children}</FormInput>;
};

SimCards.Submit = function SimCardSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

SimCards.Order = function SimCardOrder({ children, ...restProps }) {
  return <Order {...restProps}>{children}</Order>;
};

SimCards.SimRow = function SimCardSimRow({ children, ...restProps }) {
  return <SimRow {...restProps}>{children}</SimRow>;
};
