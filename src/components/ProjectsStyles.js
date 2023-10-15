import styled from 'styled-components/macro';

export const ButtonsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (min-width: 668px) {
      flex-direction: row;
      align-items: center;
  }
`

export const Tags = styled.span`
  font-size: 16px;
  font-family: Satoshi;
  font-weight: 500;
  word-wrap: break-word;
  color: #fff;
  background: black;
  padding: 3px;
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
  padding-top: 64px;
  padding-bottom: 93px;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 668px) {
    padding-top: 120px;
  };
  @media screen and (min-width: 1024px) {
      padding: 120px 85px;
  };
  @media screen and (min-width: 1280px) {
    padding: 120px 220px 92px;
};
@media screen and (min-width: 1512px) {
  padding: 120px 346px 92px;
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
  gap: 10px;
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
  text-decoration: none;
  width: 200px;
  display: inline-flex;
  font-size: 21px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  background-color: var(--pink-light);
  color: var(--light-black);
  border-radius: 21px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
  padding: 0.25em 0.75em;
  min-width: 10ch;
  min-height: 44px;
  text-align: center;
  line-height: 1.1;
  transition: 220ms all ease-in-out;
  &:hover {
   background-color: var(--pink);
   color: #fff;
  };
  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 0 4px #333333;
  };
`

export const OtherButton = styled(Button)`
background-color: var(--blue-light);
&:hover {
  background-color: var(--blue-royal);
  color: #fff;
 };
`

export const ProjectImageWrapper = styled.div`
padding-bottom: 24px;`

export const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 500px;
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
