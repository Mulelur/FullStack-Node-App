import React, { useState, useEffect, useContext } from 'react';
import { SimCards } from '../components';
import { AddICon, SimCardIcon } from '../utils/icons';
import axios from 'axios';
import { SimCardContext } from '../context/simCardContext';
// import { ToastContainer, toast } from 'react-toastify';

export default function SimCardContainer() {
  const { state, dispatch } = useContext(SimCardContext);
  const [simCards, setSimCards] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:3200/sim-cards').then((res) => {
      setSimCards(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  const [addToggle, setAddToggle] = useState(false);
  const [name, setName] = useState('');
  function submitHandler() {
    axios
      .post('http://127.0.0.1:3200/createsimcard', { name: name })
      .then((res) => {
        setName('');
        setAddToggle(!addToggle);
        dispatch({
          type: 'getSimCards',
          payload: {
            value: res.data.data,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handaleOrder(i) {
    console.log(i);
    axios
      .post(`http://127.0.0.1:3200/order/${i.id}/${state.customer.id}`)
      .then((res) => {
        if (res.statusText === 'OK') {
          console.log(res.data.data[0]);
          dispatch({
            type: 'createNewOrder',
            payload: {
              value: res.data.data,
            },
          });
        } else {
          console.log('Order Not Creaded');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <SimCards>
      <SimCards.Header>
        <SimCards.Row>
          <SimCards.HeaderTitle>My Sim Cards</SimCards.HeaderTitle>
          <SimCards.AddIconWapper>
            <AddICon
              onClick={() => {
                setAddToggle(!addToggle);
              }}
            />
            {/* <SimCards.Form> */}
            <SimCards.FormGrup display={addToggle}>
              <SimCards.Formlabel>name</SimCards.Formlabel>
              <SimCards.FormInput
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <SimCards.Submit onClick={submitHandler}>Submit</SimCards.Submit>
            </SimCards.FormGrup>
            {/* </SimCards.Form> */}
          </SimCards.AddIconWapper>
        </SimCards.Row>
      </SimCards.Header>
      <SimCards.SimRow>
        {simCards.map((item) => {
          return (
            <SimCards.SimCard>
              <SimCards.IconWapper>
                <SimCardIcon />
              </SimCards.IconWapper>
              <SimCards.Title>{item.name}</SimCards.Title>
              <SimCards.Description></SimCards.Description>
              <SimCards.Col>
                <SimCards.Price>R 34.00</SimCards.Price>
                <SimCards.Order onClick={() => handaleOrder(item)}>
                  order
                </SimCards.Order>
              </SimCards.Col>
            </SimCards.SimCard>
          );
        })}
      </SimCards.SimRow>
    </SimCards>
  );
}
