import styled from 'styled-components/macro';

export const HeroTextWrapper = styled.div`
      @media screen and (min-width: 668px) {
        padding: 32px 102px 0 142px;
      }
      @media screen and (min-width: 1024px) {
      width: 100%;
      max-width: 500px;
      height: auto;
      margin: 50px 0;
      padding: 0%;
      }
`

export const HeroHeadings = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media screen and (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      `

export const HeadingsAndPicture = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 20px;
      @media screen and (min-width: 668px) {
        flex-direction: row;
        gap: 29px;
        padding-bottom: 0;
      }
      @media screen and (min-width: 1024px) {
      justify-content: flex-start;
      }
      `

export const PictureWrapper = styled.div`
display: flex;
  justify-content: center;
  margin: 3em auto 2em auto;
  @media screen and (min-width: 668px) {
    margin: 0%;
  };
`
export const Picture = styled.img`
  height: auto;
  width: 100%;
  max-width: 164px;
  border-radius: 50%;
`

export const HeroWrapper = styled.header`
@media screen and (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      margin-left: -24px;
      margin-right: -24px;
}
`

export const LogoWrapper = styled.section`
margin-left: -24px;
margin-right: -24px;
display: none;
@media screen and (min-width: 668px) {
  display: flex;
      height: 572px;
      justify-content: center;
      overflow: hidden;
};
@media screen and (min-width: 1024px) {
      width: 50%;
      height: 980px;
      margin: 0;
}
`

export const IconsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 58px;
  @media screen and (min-width: 1024px) {
    display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 500px;
  }
`

export const IconButton = styled.a`
  display: flex;
  align-items: center;
  color: var(--grey-dark);
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
    border: none;
    color: var(--blue-medium);
  };
  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 0 4px #333333;
  };
`

export const LogoImage = styled.img`
@media screen and (min-width: 1024px) {
  object-fit: cover;
  align-self: stretch;
}
`

export const HeroInnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 55px;
  @media screen and (min-width: 668px) {
    padding-top: 80px;
    padding-bottom: 80px;
  };
@media screen and (min-width: 1024px) {
  width: 50%;
  margin: 0;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
}
`
