import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(to bottom right, aqua 58%, blue 26%);
  background-image: linear-gradient(to bottom right, #ffffff 58%, #e3eff6 26%);
`;
// 45deg
export const IllustrationWapper = styled.img`
  width: 30rem;
  height: 30rem;
  @media (max-width: 500px) {
    width: 18rem;
    height: 18rem;
  }
`;

export const Text = styled.p`
  padding: 1rem;
  width: 50%;
  font-size: 1.4rem;
  text-align: center;
  @media (max-width: 500px) {
    padding: 0.6rem;
    font-size: 1.3rem;
  }
`;

export const Heading = styled.h2`
  font-size: 2.2rem;
`;

export const Input = styled.input`
  width: 26rem;
  height: 3.9rem;
  padding: 0.8rem;
  outline: none;
  border: none;
  border-radius: 0.4rem;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px;
  &focus {
    box-shadow: rgb(0 0 0 / 5%) 0px 0px 2px, rgb(0 0 0 / 4%) 0px 0px 7px;
  }
`;

export const Label = styled.label`
  font-size: 1.7rem;
  padding: 1.4rem;
  color: #bbbbbb;
`;

export const Button = styled(ReachRouterLink)`
  margin: 1.4rem;
  width: 26rem;
  height: 3.9rem;
  border: none;
  font-size: 1.6rem;
  text-decoration: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #50b0f5;
  outline: none;
  border-radius: 0.4rem;
  &:focus {
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px;
  }
`;

export const FooterText = styled.div`
  font-size: 1.2rem;
`;

export const Span = styled.span`
  color: #50b0f5;
  font-size: 1.2rem;
  padding-left: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1rem;
  @media (max-width: 500px) {
    top: 6rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0.9rem;
`;

export const LogoWapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;
