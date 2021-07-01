import React, { useContext, useState } from 'react';
import { GetStarted } from '../components';
import icon from '../assets/illustration/undraw_connected_world_wuay.svg';
import { LogoIcon } from '../utils/icons';
import axios from 'axios';
import { SimCardContext } from '../context/simCardContext';

export default function GetStartedContainer() {
  const { state, dispatch } = useContext(SimCardContext);
  const [name, setName] = useState('');
  async function hendleAth() {
    try {
      const res = await axios.get(`/customer/${name}`);
      dispatch({
        type: 'customerInit',
        payload: {
          value: res.data.result[0],
        },
      });
    } catch {
      console.log('err');
    }
  }
  return (
    <GetStarted>
      <GetStarted.LogoWapper>
        <LogoIcon width="163" height="54" />
      </GetStarted.LogoWapper>
      <GetStarted.Content>
        <GetStarted.IllustrationWapper src={icon} />
        <GetStarted.Heading>Traveling Sim Card</GetStarted.Heading>
        <GetStarted.Text>
          if you are visiting multiple countries, your card can be used in over
          170+ countries using the same number (plus we provide data plans for
          100+ countries)
        </GetStarted.Text>
        <GetStarted.Label>Enter Your Name</GetStarted.Label>
        <GetStarted.Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <GetStarted.Button to="/sim-cards" onClick={hendleAth}>
          Get Started
        </GetStarted.Button>
      </GetStarted.Content>
      <GetStarted.Footer>
        <GetStarted.FooterText>Made By</GetStarted.FooterText>
        <GetStarted.Span>Rotonda</GetStarted.Span>
      </GetStarted.Footer>
    </GetStarted>
  );
}
