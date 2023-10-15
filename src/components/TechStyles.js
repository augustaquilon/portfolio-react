import styled from 'styled-components/macro';

export const TechWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--pink-light);
  margin-left: -24px;
  margin-right: -24px;
  padding: 80px 0 120px 0;
  @media screen and (min-width: 668px) {
    padding: 234px 0 287px 0;
    gap: 142px;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    padding-left: 230px;
    padding-right: 230px;
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

export const BlueHighlight = styled.span`
  background: var(--blue-royal);
  color: white;
  padding: 1px;
`

export const PinkHighlight = styled(BlueHighlight)`
  background: var(--pink);
  color: white;
`

export const MediumBlueHighlight = styled(BlueHighlight)`
background: var(--blue-medium);
color: white;
`
