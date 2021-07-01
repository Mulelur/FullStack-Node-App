import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 0 2.1rem;
  width: calc(100vw - 155px);

  @media (max-width: 500px) {
    width: calc(100vw - 13px);
  }
  @media (max-width: 350px) {
    width: calc(100vw - 45px);
  }
`;

export const IconWapper = styled.div`
  position: absolute;
  background-color: aquamarine;
  height: 5rem;
  width: 5rem;
  top: -2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const SimCard = styled.div`
  width: 20rem;
  height: 16rem;
  border-radius: 0.8rem;
  position: relative;
  margin: 2rem;
  margin-left: 0.6rem;
  margin-top: 4.5rem;
  padding: 4rem 2rem 2rem 2rem;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px;
`;

export const Title = styled.h3`
  padding-bottom: 1rem;
  font-size: 1.4rem;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  margin-right: auto;
`;

export const Description = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1.7rem;
  margin-top: 0.7rem;
`;

export const AddIconWapper = styled.div`
  background-color: aquamarine;
  height: 3.9rem;
  width: 3.9rem;
  border-radius: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
`;

export const Header = styled.div`
  padding: 2.1rem 0;
  border-bottom: 1px solid #f4f2ee;
`;

export const Row = styled.div`
  display: flex;
  max-widht: 60rem;
  align-items: center;
`;

export const SimRow = styled.div`
  display: grid;
  overflow-y: scroll;
  justify-items: center;
  height: 44rem;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 871px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 650px) {
    // grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.h2`
  font-size: 1.9rem;
  margin-right: auto;
`;

export const Form = styled.form``;

export const FormGrup = styled.div`
  display: ${({ display }) => (display ? 'block' : 'none')};
  height: 10.5rem;
  right: 0.3rem;
  top: 4.4rem;
  position: absolute;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px;
  z-index: 1;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.4rem;
  color: #bbb;
`;

export const Formlabel = styled.label`
  font-size: 1.3rem;
  padding-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  margin: 0.7rem 0;
  border: 1px solid #bbbbbb;
  border-radius: 0.3rem;
  height: 2.3rem;
  outline: none;
  padding: 0.4rem;
  &:focus {
    border-color: #aquamarine;
    box-shadow: 0 0 0 0.2rem rgb(51 184 148 / 50%);
  }
`;

export const Submit = styled.button`
  width: 6.5rem;
  height: 3.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  background-color: #8868b6;
  outline: none;
  color: #fff;
  &:active {
    background-color: #45a677;
  }
`;

export const Order = styled.button`
  width: 6.5rem;
  height: 3.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  background-color: aquamarine;
  outline: none;
  color: #fff;
  &:active {
    background-color: #45a677;
  }
`;
