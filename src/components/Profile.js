/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/macro';

const Title = styled.h1`
    color: #0703BC;
`

const Undertitle = styled.h2`
    color: #F20505;
`

export const Profile = () => {
  return (
    <Profile>
      <Title>August Aquilon</Title>
      <Undertitle>Front-end Developer</Undertitle>
    </Profile>
  )
}