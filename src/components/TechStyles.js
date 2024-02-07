import styled from 'styled-components/macro';

export const TechWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--ltpink);
  width: 100%;
  padding: 3rem 4rem;
  @media screen and (min-width: 668px) {
    padding: 15rem;
  }
  @media screen and (min-width: 1024px) {
    height: 100vh;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 10rem;
  }
`

export const TechStack = styled.div`
@media screen and (min-width: 668px) {
      width: 100%;
      max-width: 500px;
      height: auto;
    }
      `

export const YellowHighlight = styled.span`
  background: var(--yellow);
  color: var(--purple);
  padding: 1px;
  text-wrap: nowrap;
`

export const PurpleHighlight = styled(YellowHighlight)`
  background: var(--purple);
  color: var(--white);
`

export const BlueHighlight = styled(YellowHighlight)`
background: var(--ltblue);
color: var(--black);
`