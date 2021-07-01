import React, { useContext } from 'react';
import { Profile } from '../components';
import { SimCardContext } from '../context/simCardContext';
import {
  ClearIcon,
  ForwardIcon,
  LocationIcon,
  OrderListIcon,
  PresonIcon,
  SimCardIcon,
} from '../utils/icons';

export default function ProfileContainer({ ...restProps }) {
  const { state, dispatch } = useContext(SimCardContext);
  return (
    <Profile>
      <Profile.ProfileContainer {...restProps}>
        <Profile.Header></Profile.Header>
        <Profile.HeaderIconWapper>
          <ClearIcon
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
        </Profile.HeaderIconWapper>
        <Profile.MyProfile>
          <Profile.MyProfileIconWapper>
            <PresonIcon />
          </Profile.MyProfileIconWapper>
          <Profile.MyProfileName>
            <Profile.Myname>{state.customer.name}</Profile.Myname>
          </Profile.MyProfileName>
        </Profile.MyProfile>
        <Profile.Detail>
          <Profile.Row>
            <Profile.Col>
              <Profile.IconWapper>
                <SimCardIcon />
              </Profile.IconWapper>
            </Profile.Col>
            <Profile.Col>
              <Profile.Title>Sim Cards</Profile.Title>
            </Profile.Col>
            <Profile.Col>
              <Profile.Button to="/sim-cards">
                <ForwardIcon />
              </Profile.Button>
            </Profile.Col>
          </Profile.Row>
          <Profile.Row>
            <Profile.Col>
              <Profile.IconWapper>
                <OrderListIcon />
              </Profile.IconWapper>
            </Profile.Col>
            <Profile.Col>
              <Profile.Title>orders</Profile.Title>
            </Profile.Col>
            <Profile.Col>
              <Profile.Button to="/orders">
                <ForwardIcon />
              </Profile.Button>
            </Profile.Col>
          </Profile.Row>
          {/* <Profile.Row>
            <Profile.Col>
              <Profile.IconWapper>
                <LocationIcon />
              </Profile.IconWapper>
            </Profile.Col>
            <Profile.Col>
              <Profile.Title>Address</Profile.Title>
            </Profile.Col>
            <Profile.Col>
              <Profile.Button to="/address">
                <ForwardIcon />
              </Profile.Button>
            </Profile.Col>
          </Profile.Row> */}
        </Profile.Detail>
      </Profile.ProfileContainer>
    </Profile>
  );
}

export function MenuContainer({ ...restProps }) {
  const { state, dispatch } = useContext(SimCardContext);
  return (
    <Profile>
      <Profile.MenuContainer {...restProps}>
        <Profile.Header></Profile.Header>
        <Profile.HeaderIconWapper>
          <ClearIcon
            onClick={() => {
              dispatch({
                type: 'toggole',
                payload: {
                  type: 'menu',
                  value: state.utils.menuToggole,
                },
              });
            }}
          />
        </Profile.HeaderIconWapper>
        <Profile.MyProfile>
          <Profile.MyProfileIconWapper>
            <PresonIcon />
          </Profile.MyProfileIconWapper>
          <Profile.MyProfileName>
            <Profile.Myname>{state.customer.name}</Profile.Myname>
          </Profile.MyProfileName>
        </Profile.MyProfile>
        <Profile.Detail>
          <Profile.Row>
            <Profile.Col>
              <Profile.IconWapper>
                <SimCardIcon />
              </Profile.IconWapper>
            </Profile.Col>
            <Profile.Col>
              <Profile.Title>Sim Cards</Profile.Title>
            </Profile.Col>
            <Profile.Col>
              <Profile.Button to="/sim-cards">
                <ForwardIcon />
              </Profile.Button>
            </Profile.Col>
          </Profile.Row>
          <Profile.Row>
            <Profile.Col>
              <Profile.IconWapper>
                <OrderListIcon />
              </Profile.IconWapper>
            </Profile.Col>
            <Profile.Col>
              <Profile.Title>orders</Profile.Title>
            </Profile.Col>
            <Profile.Col>
              <Profile.Button to="/orders">
                <ForwardIcon />
              </Profile.Button>
            </Profile.Col>
          </Profile.Row>
          {/* <Profile.Row>
            <Profile.Col>
              <Profile.IconWapper>
                <LocationIcon />
              </Profile.IconWapper>
            </Profile.Col>
            <Profile.Col>
              <Profile.Title>Address</Profile.Title>
            </Profile.Col>
            <Profile.Col>
              <Profile.Button to="/address">
                <ForwardIcon />
              </Profile.Button>
            </Profile.Col>
          </Profile.Row> */}
        </Profile.Detail>
      </Profile.MenuContainer>
    </Profile>
  );
}
