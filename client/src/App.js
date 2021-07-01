import axios from 'axios';
import React, { useReducer, useEffect } from 'react';
import DashboardContainer from './containers/dashboard';
import GetStartedContainer from './containers/getStarted';
import { SimCardContext } from './context/simCardContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const initialState = {
  customer: {
    id: '1',
    name: 'anonymous',
    sim: '',
    orders: [],
    address: {},
  },
  simCards: [],
  utils: {
    profileToggole: false,
    menuToggole: false,
  },
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'getSimCards':
      state.simCards.push(action.payload.value);
      return { ...state };
    case 'createNewOrder':
      state.customer.orders.push(...action.payload.value);
      return { ...state };
    case 'getOrders':
      state.customer.orders.push(action.payload.value);
      return { ...state };
    case 'takeOrder':
      let order = state.customer.orders.filter(
        (item) => item.id === action.payload.id
      );
      order = action.payload.value;
      return { ...state };
    case 'toggole':
      switch (action.payload.type) {
        case 'menu':
          state.utils.menuToggole = !action.payload.value;
          return { ...state };
        case 'profile':
          state.utils.profileToggole = !action.payload.value;
          return { ...state };
        default:
          throw new Error();
      }
    case 'customerInit':
      state.customer.name = action.payload.value.name;
      state.customer.id = action.payload.value.id;
      return { ...state };

    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios.get(
      axios.get('http://127.0.0.1:3200/sim-cards').then((res) => {
        dispatch({
          type: 'getSimCards',
          payload: {
            value: res.data.data,
          },
        });
      })
    );
    axios.get(
      axios
        .get(
          `http://127.0.0.1:3200/orders/${state.customer.id}/?page=1&limit=5`
        )
        .then((res) => {
          dispatch({
            type: 'getOrders',
            payload: {
              value: res.data.data,
            },
          });
        })
    );
  }, []);
  return (
    <div
      onClick={() => {
        if (state.utils.profileToggole) {
          dispatch({
            type: 'toggole',
            payload: {
              type: 'profile',
              value: state.utils.profileToggole,
            },
          });
        }
        if (state.utils.menuToggole) {
          dispatch({
            type: 'toggole',
            payload: {
              type: 'menu',
              value: state.utils.menuToggole,
            },
          });
        }
      }}
    >
      <SimCardContext.Provider value={{ state, dispatch }}>
        <Router>
          <Route exact path="/" component={GetStartedContainer} />
          <Route path="/sim-cards" component={DashboardContainer} />
        </Router>
      </SimCardContext.Provider>
    </div>
  );
}

export default App;
