import styled from 'styled-components/macro';

export const ButtonsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex-wrap: wrap;
  @media screen and (min-width: 668px) {
      flex-direction: row;
      align-items: center;
  }
`

export const Tags = styled.span`
  font-size: 1.5rem;
  font-family: var(--sans);
  font-weight: 400;
  word-wrap: break-word;
  color: var(--white);
  background: var(--dkgreen);
  padding: 4px;
  border-radius: 3px;
`

export const TagsWrapper = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 12px;
  padding-bottom: 24px;
`

export const ProjectsWrapper = styled.section`
  display: flex;
  padding: 3rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--yellow);
  @media screen and (min-width: 668px) {
    padding-top: 120px;
  };
  @media screen and (min-width: 1024px) {
    padding-left: 50px;
    padding-right: 50px;
  };
`

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 80px;
  @media screen and (min-width: 668px) {
    flex-direction: row;
    gap: 24px;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 40px;
    padding-bottom: 120px;
  }
`

export const ProjectInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  height: auto;
  gap: 1rem;
    @media screen and (min-width: 668px) {
      max-width: 700%;
    };
`

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

export const Button = styled.a`
font-family: var(--sans);
text-decoration: none;
max-width: 300px;
text-wrap: nowrap;
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

export const DisabledButton = styled(Button)`
pointer-events: none;
background-color: var(--ltgrey);
color: white;`

export const OtherButton = styled(Button)`
background-color: var(--ltblue);
color: var(--black);
&:hover {
  background-color: var(--black);
  color: var(--white);
 };
`

export const ProjectImageWrapper = styled.div`
padding-bottom: 1rem;
`

export const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 500px;
    border-radius: 3px;
    @media screen and (min-width: 668px) {
      max-width: 100%;
      height: 280px;
      width: 184px;
      object-fit: cover;
    };
    @media screen and (min-width: 1024px) {
      height: 280px;
      width: 280px;
    };
    `
