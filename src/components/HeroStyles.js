import styled from 'styled-components/macro';

export const IconsWrapper = styled.section`
display: flex;
flex-direction: row;
justify-content: space-around;
padding: 4rem;
  @media screen and (min-width: 668px) {
    justify-content: space-between;
    padding: 3rem 1rem;
    width: 400px;
  }
`

export const IconButton = styled.a`
  display: flex;
  align-items: center;
  color: var(--ltgrey);
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    border: none;
    color: var(--dkgrey);
  };
  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 0 4px #333333;
  };
`