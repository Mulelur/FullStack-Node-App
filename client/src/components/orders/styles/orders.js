import styled from 'styled-components/macro';

export const Container = styled.div`
  margin: 0.1rem;
  width: calc(100vw - 155px);
  padding: 0 3rem;
  // display: flex;
  @media (max-width: 800px) {
    width: calc(100vw - 153px);
  }
  @media (max-width: 630px) {
    width: calc(100vw - 144px);
  }
  @media (max-width: 500px) {
    width: calc(100vw - 28px);
    padding: 0;
  }
`;

export const OrderList = styled.ul`
  list-style: none;
  width: 100%;
  margin-right: 3rem;
  // margin-top: 2rem;
  // margin: 2rem;
  margin-top: 4.5rem;
  &:last-child {
    margin: 0;
  }
`;

export const OrderListItem = styled.li`
  padding: 2rem 0;
  border-top: 1px solid #d76d5a;
  background-color: #f4f2ee;
  display: flex;
  // justify-content: space-between;
  width: 100%;
  height: 7rem;
  padding: 0.5rem;
  color: #888888;
  @media (max-width: 800px) {
    height: 9rem;
  }
  @media (max-width: 500px) {
    padding: 1.3rem 0;
  }
`;

export const OrderNumder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.7rem;
  @media (max-width: 630px) {
    display: none;
  }
`;

export const Order = styled.div`
  padding: 12rem;
`;

export const OrderComplete = styled.div``;

export const OrderProsercing = styled.div``;

export const IconWapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  padding-left: 0.5rem;
`;

export const OrderTitle = styled.h4`
  padding: 0.7rem 0;
`;

export const OrderPrice = styled.span`
  font-size: 1.6rem;
`;

export const OrderDecription = styled.div`
  font-size: 1.3rem;
  margin-right: auto;
`;

export const OrderTime = styled.div``;

export const Header = styled.div`
  padding: 3rem 0;
  height: 10rem;
  border-bottom: 1px solid #f4f2ee;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.7rem;
`;

export const HeaderTitle = styled.h2`
  font-size: 1.9rem;
  height: 3.9rem;
  margin-right: auto;
  display: flex;
  align-items: center;
`;

export const TakeOrder = styled.button`
  margin-top: 0.5rem;
  padding: 0.6rem;
  width: 7.3rem;
  height: 3rem;
  background-color: ${({ taken }) => (taken ? '#fcae8d' : '#fa6c2f')};
  border: none;
  border-radius: 0.4rem;
  color: #fff;
  outline: none;

  &:focus {
    color: #fff;
    background-color: ${({ taken }) => (taken ? '#fcae8d' : '#fa6c2f')};
    border-color: #fcae8d;
    box-shadow: 0 0 0 0.2rem rgb(51 184 148 / 50%);
  }
`;
