import React, { useContext } from 'react';
import { SimCardIcon } from '../utils/icons';
import { Orders } from '../components';
import { SimCardContext } from '../context/simCardContext';
import axios from 'axios';
import PaginationLink from '../components/pagination';

export default function OrdersContainer() {
  const { state, dispatch } = useContext(SimCardContext);
  function handleTakeOrder(item) {
    axios
      .patch(`http://127.0.0.1:3200/orders/${item.id}`)
      .then((res) => {
        if (res.statusText === 'OK') {
          dispatch({
            type: 'takeOrder',
            payload: {
              id: item.id,
              value: res.data.data,
            },
          });
        } else {
          console.log(res.data.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Orders>
      <Orders.Header>
        <Orders.Row>
          <Orders.HeaderTitle>My Orders</Orders.HeaderTitle>
        </Orders.Row>
      </Orders.Header>
      {state.customer.orders.length > 0 ? (
        <Orders.OrderList>
          {state.customer.orders.map((item) => {
            return (
              <Orders.OrderListItem key={item.id}>
                <Orders.IconWapper>
                  <SimCardIcon />
                </Orders.IconWapper>
                <Orders.OrderDecription>
                  <Orders.Row>
                    <Orders.Col>
                      <Orders.OrderTitle>
                        My New South Africa Sim Card
                      </Orders.OrderTitle>
                      <Orders.OrderTime>{item.createdAt}</Orders.OrderTime>
                    </Orders.Col>
                    <Orders.OrderNumder>
                      <Orders.OrderTitle>OrderNumder</Orders.OrderTitle>
                      <Orders.OrderTime>
                        BlueSimcard-order-number-{item.id}
                      </Orders.OrderTime>
                    </Orders.OrderNumder>
                  </Orders.Row>
                </Orders.OrderDecription>
                <Orders.Col>
                  <Orders.OrderPrice>R45. 00</Orders.OrderPrice>
                  {item.status !== 'Complete' ? (
                    <Orders.TakeOrder onClick={() => handleTakeOrder(item)}>
                      TakeOrder
                    </Orders.TakeOrder>
                  ) : (
                    <Orders.TakeOrder taken={true}>Taken</Orders.TakeOrder>
                  )}
                </Orders.Col>
              </Orders.OrderListItem>
            );
          })}
        </Orders.OrderList>
      ) : null}
    </Orders>
  );
}
