import styled from 'styled-components/macro';

export const ButtonIcon = styled.svg`
  width: 0.9em;
  height: 0.9em;
  fill: currentColor;
  margin-right: 0.5em;
  &--end {
    margin-right: 0;
    margin-left: 0.5em;
  }
`

export const PinkButton = styled.a`
font-family: var(--sans);
text-decoration: none;
max-width: 300px;
text-wrap: inherit;
display: inline-flex;
font-size: 2rem;
font-weight: 500;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
background-color: var(--ltpink);
color: var(--white);
border-radius: 30px;
box-shadow: rgba(0, 0, 0, 0.18) 0px 3px 5px;
padding: 1rem;
min-width: 10ch;
min-height: 44px;
text-align: center;
line-height: 1.1;
transition: all 220ms ease-in-out 0s;
  &:hover {
   background-color: var(--purple);
   color: var(--white);
  };
  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 0 4px #333333;
  };
`

export const BlueButton = styled(PinkButton)`
background-color: var(--ltblue);
color: var(--black);
&:hover {
  background-color: var(--dkblue);
  color: var(--white);
 };
`