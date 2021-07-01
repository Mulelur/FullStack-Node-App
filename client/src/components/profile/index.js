import React from 'react';
import {
  MyProfile,
  MyProfileIconWapper,
  MyProfileName,
  Header,
  HeaderIconWapper,
  Detail,
  Container,
  Myname,
  Row,
  Col,
  IconWapper,
  Title,
  Button,
  MenuContainer,
  ProfileContainer,
} from './styles/profile';

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profile.Header = function ProfileHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Profile.MyProfile = function ProfileMyProfile({ children, ...restProps }) {
  return <MyProfile {...restProps}>{children}</MyProfile>;
};

Profile.Detail = function ProfileDetail({ children, ...restProps }) {
  return <Detail {...restProps}>{children}</Detail>;
};

Profile.HeaderIconWapper = function ProfileHeaderIconWapper({
  children,
  ...restProps
}) {
  return <HeaderIconWapper {...restProps}>{children}</HeaderIconWapper>;
};

Profile.MyProfileIconWapper = function ProfileMyProfileIconWapper({
  children,
  ...restProps
}) {
  return <MyProfileIconWapper {...restProps}>{children}</MyProfileIconWapper>;
};

Profile.MyProfileName = function ProfileMyProfileName({
  children,
  ...restProps
}) {
  return <MyProfileName {...restProps}>{children}</MyProfileName>;
};

Profile.Myname = function ProfileMyname({ children, ...restProps }) {
  return <Myname {...restProps}>{children}</Myname>;
};

Profile.Row = function ProfileRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Profile.Col = function ProfileCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};

Profile.IconWapper = function ProfileIconWapper({ children, ...restProps }) {
  return <IconWapper {...restProps}>{children}</IconWapper>;
};

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profile.Button = function ProfileButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Profile.MenuContainer = function ProfileMenuContainer({
  children,
  ...restProps
}) {
  return <MenuContainer {...restProps}>{children}</MenuContainer>;
};

Profile.ProfileContainer = function ProfileProfileContainer({
  children,
  ...restProps
}) {
  return <ProfileContainer {...restProps}>{children}</ProfileContainer>;
};
