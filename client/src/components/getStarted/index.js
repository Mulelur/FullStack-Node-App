import React from 'react';
import {
  Container,
  IllustrationWapper,
  Input,
  Text,
  Heading,
  Label,
  Button,
  FooterText,
  Span,
  Content,
  Footer,
  LogoWapper,
} from './styles/getStarted';

export default function GetStarted({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

GetStarted.IllustrationWapper = function GetStartedIllustrationWapper({
  children,
  ...restProps
}) {
  return <IllustrationWapper {...restProps}>{children}</IllustrationWapper>;
};

GetStarted.Text = function GetStartedText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
GetStarted.Heading = function GetStartedHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};
GetStarted.Input = function GetStartedInput({ ...restProps }) {
  return <Input {...restProps} />;
};
GetStarted.Label = function GetStartedLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
GetStarted.Button = function GetStartedButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
GetStarted.FooterText = function GetStartedFooterText({
  children,
  ...restProps
}) {
  return <FooterText {...restProps}>{children}</FooterText>;
};
GetStarted.Span = function GetStartedSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};

GetStarted.Content = function GetStartedContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

GetStarted.Footer = function GetStartedFooter({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>;
};

GetStarted.LogoWapper = function GetStartedLogoWapper({
  children,
  ...restProps
}) {
  return <LogoWapper {...restProps}>{children}</LogoWapper>;
};
