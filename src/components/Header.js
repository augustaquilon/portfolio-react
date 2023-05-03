/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';
import { Profile } from './Profile';
import { Links } from './Links';

const OuterWrapper = styled.div`
height: 485vw;
width: 100%`

const InnerWrapper = styled.div`
`

export const Header = () => {
  return (
    <header>
      <OuterWrapper>
        <InnerWrapper>
          <Profile />
          <Links />
        </InnerWrapper>
      </OuterWrapper>
    </header>
  )
}