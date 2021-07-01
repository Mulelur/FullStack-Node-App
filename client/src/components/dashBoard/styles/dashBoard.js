import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  @media (max-width: 444px) {
    justify-content: center;
  }
`;

export const SideBar = styled.div`
  width: 11rem;
  padding: 2rem;
  height: 100%;
  border-right: 1px solid #f4f2ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #92959d;
  @media (max-width: 489px) {
    display: none;
  }
`;

export const MainContent = styled.div`
  margun: 0.2rem;
  padding: 0.4rem;
`;

export const Col = styled.div``;

export const ColHeader = styled.div`
  padding: 1rem 0;
`;

export const ColHeaderTitle = styled.span`
  font-size: 1.6rem;
`;

export const ColBody = styled.div``;

export const Row = styled.div`
  padding-bottom: 3rem;
`;

export const SideBarIconWapper = styled(ReachRouterLink)`
  height: 5rem;
  width: 5rem;
  top: -2rem;
  z-index: 999;
  border-radius: 50%;
  color: #888888;
  align-items: center;
  justify-content: center;
  display: felx;
  transition: all 0.1s ease-in 0s;
  &:hover {
    background-color: aquamarine;
    color: #fff;
  }
  &:first-child {
    margin-bottom: 1rem;
  }
`;

export const ProfileWapper = styled.div`
  height: 5rem;
  width: 5rem;
  top: -2rem;
  z-index: 999;
  border-radius: 50%;
  position: relative;
  align-items: center;
  justify-content: center;
  display: felx;
  transition: all 0.1s ease-in 0s;
  // // &:hover {
  // //   background-color: aquamarine;
  // //   color: #fff;
  // }
`;

export const Header = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  padding: 0 1.8rem;
`;

export const HeaderTitle = styled.h2`
  font-size: 2.4rem;
  margin-right: auto;
`;

export const HeaderText = styled.q``;

export const AddWapper = styled.div``;

export const Logo = styled(ReachRouterLink)``;

export const Menu = styled.div`
  position: relative;
`;

export const MenuIconWapper = styled.div`
  height: 5rem;
  width: 5rem;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  display: felx;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px;
`;

export const MenuDrop = styled.div``;

export const MenuDropList = styled.ul``;

export const MenuDropListItem = styled.li``;
