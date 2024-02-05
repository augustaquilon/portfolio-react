import styled from 'styled-components/macro';

export const TechWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--ltpink);
  margin-left: -24px;
  margin-right: -24px;
  padding: 80px 0 120px 0;
  @media screen and (min-width: 668px) {
    padding: 234px 0 287px 0;
    gap: 142px;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 50px;
    padding-right: 50px;
  }
`

export const TechStack = styled.div`
margin-left: 24px;
margin-right: 24px;
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