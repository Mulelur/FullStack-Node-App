import React from 'react';
import {
  Col,
  ColBody,
  ColHeader,
  ColHeaderTitle,
  Container,
  SideBar,
  SideBarIconWapper,
  MainContent,
  Row,
  Header,
  HeaderText,
  HeaderTitle,
  ProfileWapper,
  Logo,
  Menu,
  MenuDrop,
  MenuDropList,
  MenuDropListItem,
  MenuIconWapper,
} from './styles/dashBoard';

export default function DashBoard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

DashBoard.SideBar = function DashBoardSideBar({ children, ...restProps }) {
  return <SideBar {...restProps}>{children}</SideBar>;
};

DashBoard.MainContent = function DashBoardMainContent({
  children,
  ...restProps
}) {
  return <MainContent {...restProps}>{children}</MainContent>;
};

DashBoard.Col = function DashBoardCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};

DashBoard.ColHeader = function DashBoardColHeader({ children, ...restProps }) {
  return <ColHeader {...restProps}>{children}</ColHeader>;
};

DashBoard.ColHeaderTitle = function DashBoardColHeaderTitle({
  children,
  ...restProps
}) {
  return <ColHeaderTitle {...restProps}>{children}</ColHeaderTitle>;
};

DashBoard.ColBody = function DashBoardColBody({ children, ...restProps }) {
  return <ColBody {...restProps}>{children}</ColBody>;
};

DashBoard.Row = function DashBoardRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
DashBoard.Header = function DashBoardHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

DashBoard.HeaderTitle = function DashBoardHeaderTitle({
  children,
  ...restProps
}) {
  return <HeaderTitle {...restProps}>{children}</HeaderTitle>;
};

DashBoard.HeaderText = function DashBoardHeaderText({
  children,
  ...restProps
}) {
  return <HeaderText {...restProps}>{children}</HeaderText>;
};

DashBoard.SideBarIconWapper = function DashBoardSideBarIconWapper({
  children,
  ...restProps
}) {
  return <SideBarIconWapper {...restProps}>{children}</SideBarIconWapper>;
};

DashBoard.ProfileWapper = function DashBoardProfileWapper({
  children,
  ...restProps
}) {
  return <ProfileWapper {...restProps}>{children}</ProfileWapper>;
};

DashBoard.Logo = function DashBoardLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

DashBoard.Menu = function DashBoardMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>;
};

DashBoard.MenuIconWapper = function DashBoardMenuIconWapper({
  children,
  ...restProps
}) {
  return <MenuIconWapper {...restProps}>{children}</MenuIconWapper>;
};

DashBoard.MenuDrop = function DashBoardMenuDrop({ children, ...restProps }) {
  return <MenuDrop {...restProps}>{children}</MenuDrop>;
};

DashBoard.MenuDropList = function DashBoardMenuDropList({
  children,
  ...restProps
}) {
  return <MenuDropList {...restProps}>{children}</MenuDropList>;
};

DashBoard.MenuDropListItem = function DashBoardLogo({
  children,
  ...restProps
}) {
  return <MenuDropListItem {...restProps}>{children}</MenuDropListItem>;
};
