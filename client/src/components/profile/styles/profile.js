import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div``;

export const ProfileContainer = styled.div`
  display: ${({ display }) => (display ? 'block' : 'none')};
  position: absolute;
  left: 8rem;
  bottom: -3rem;
  width: 25rem;
  height: 32rem;
  background-color: #fff;
  padding: 1.9rem;
  border-radius: 0.6rem;
  transition: all 0.2s ease-out;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px;
`;

export const MenuContainer = styled.div`
  display: ${({ display }) => (display ? 'block' : 'none')};
  position: absolute;
  right: 0rem;
  top: -1rem;
  z-index: 2;
  width: 25rem;
  height: 32rem;
  background-color: #fff;
  padding: 1.9rem;
  border-radius: 0.6rem;
  transition: all 0.2s ease-out;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px;
  @media (max-width: 320px) {
    right: -3rem;
  }
`;

export const Header = styled.div``;

export const MyProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const Detail = styled.div`
  color: #15172e;
  margin-top: 2.5rem;
`;

export const HeaderIconWapper = styled.div``;

export const MyProfileIconWapper = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  background-color: #fff4ed;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fa6e30;
  border: 2px solid #fa6e30;
`;

export const MyProfileName = styled.div`
  margin-left: 2rem;
  font-size: 1.9rem;
`;

export const Myname = styled.span`
  color: #15172e;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 0 1.1rem;
`;

export const Col = styled.div``;

export const IconWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 50%;
  background-color: #e5f7fe;
  color: #02a3ee;
`;

export const Title = styled.h4`
  font-size: 1.2rem;
`;

export const Button = styled(ReachRouterLink)`
  background-color: #f5f5f6;
  border: none;
  width: 3.7rem;
  height: 3.7rem;
  border-radius: 1.1rem;
  outline: none;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
