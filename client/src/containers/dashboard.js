import React, { useContext, useState } from 'react';
import { Dashboard } from '../components';
import {
  LogoIcon,
  MenuIcon,
  OrderListIcon,
  PresonIcon,
  SimCardIcon,
} from '../utils/icons';
import OrdersContainer from './orders';
import ProfileContainer, { MenuContainer } from './profile';
import SimCardContainer from './simCards';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SimCardContext } from '../context/simCardContext';
import GetStartedContainer from './getStarted';

export default function DashboardContainer() {
  const [profileToggole, setProfileToggole] = useState(false);
  const [menuToggole, setMenuToggole] = useState(false);
  const { state, dispatch } = useContext(SimCardContext);
  return (
    <Router>
      <Dashboard>
        <Dashboard.SideBar>
          <Dashboard.Col>
            <Dashboard.Logo>
              <LogoIcon width="129" height="20" />
            </Dashboard.Logo>
          </Dashboard.Col>
          <Dashboard.Col>
            <Dashboard.SideBarIconWapper to="/sim-cards">
              <SimCardIcon />
            </Dashboard.SideBarIconWapper>
            <Dashboard.SideBarIconWapper to="/orders">
              <OrderListIcon />
            </Dashboard.SideBarIconWapper>
          </Dashboard.Col>
          <Dashboard.Col>
            <Dashboard.ProfileWapper>
              <PresonIcon
                onClick={() => {
                  dispatch({
                    type: 'toggole',
                    payload: {
                      type: 'profile',
                      value: state.utils.profileToggole,
                    },
                  });
                }}
              />
              <ProfileContainer display={state.utils.profileToggole} />
            </Dashboard.ProfileWapper>
          </Dashboard.Col>
        </Dashboard.SideBar>
        <Dashboard.MainContent>
          <Dashboard.Header>
            <Dashboard.HeaderTitle>Manage ...</Dashboard.HeaderTitle>
            <Dashboard.Menu>
              <Dashboard.MenuIconWapper
                onClick={() => {
                  dispatch({
                    type: 'toggole',
                    payload: {
                      type: 'menu',
                      value: state.utils.menuToggole,
                    },
                  });
                }}
              >
                <MenuIcon />
              </Dashboard.MenuIconWapper>
              <Dashboard.MenuDrop>
                <MenuContainer display={state.utils.menuToggole} />
              </Dashboard.MenuDrop>
            </Dashboard.Menu>
          </Dashboard.Header>
          <Dashboard.Row>
            <Dashboard.Col>
              <Dashboard.ColBody>
                <Route path="/sim-cards" component={SimCardContainer} />
                <Route path="/orders" component={OrdersContainer} />
                {/* <OrdersContainer /> */}
                {/* <SimCardContainer /> */}
              </Dashboard.ColBody>
            </Dashboard.Col>
          </Dashboard.Row>
        </Dashboard.MainContent>
      </Dashboard>
    </Router>
  );
}
