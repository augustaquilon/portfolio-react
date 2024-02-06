import styled from 'styled-components/macro';

export const Heading1 = styled.h1`
  font-size: 28px;
  font-family: var(--mono);
  font-weight: 900;
  word-wrap: break-word;
  color: var(--dkblue);
  `

export const Heading2 = styled.h2`
  font-size: 32px;
  font-family: var(--mono);
  font-weight: 900;
  word-wrap: break-word;
  margin-top: 7px;
  color: var(--ltblue);
`

export const Heading3 = styled.h3`
  font-size: 24px;
  font-family: var(--mono);
  font-weight: 500;
  word-wrap: break-word;
  color: var(--grey-dark);
  margin-top: 3px;
  margin-bottom: 1.5em;
  @media screen and (min-width: 668px) {
    margin-bottom: 0%;
  }
  `

export const Heading4 = styled.h4`
  font-size: 80px;
  font-family: var(--mono);
  font-weight: 900;
  word-wrap: break-word;
  color: var(--purple);
  margin-bottom: 60px;
  @media screen and (min-width: 668px) {
    font-size: 5.5rem;
  }
`

export const Heading5 = styled.h5`
  font-size: 72px;
  font-family: var(--mono);
  font-weight: 900;
  line-height: 80px;
  word-wrap: break-word;
  color: var(--dkgreen);
  margin-bottom: 40px;
`

export const Heading6 = styled.h6`
color: var(--dkgreen);
  font-size: 32px;
  font-family: var(--mono);
  font-weight: 900;
  word-wrap: break-word;
  margin: 0;
`

export const Heading5Bigger = styled(Heading5)`
font-size: 80px;
color: var(--dkblue);
`

export const Heading6Bigger = styled(Heading6)`
color: var(--dkblue);
font-size: 58px;
text-wrap: nowrap;
@media screen and (min-width: 668px) {
  font-size: 80px;
  padding-bottom: 75px;
};
`

export const Paragraph = styled.p`
  font-family: var(--mono);
  font-size: 22px;
  font-weight: 400;
  word-wrap: break-word;
  line-height: 29px;
  color: var(--ltblue);
`

export const PurpleParagraph = styled(Paragraph)`
color: var(--purple);
`

export const GreenParagraph = styled(Paragraph)`
color: var(--dkgreen);
margin-top: 10px;
margin-bottom: 10px;
`

export const PinkHighlight = styled.p`
color: var(--purple);
background-color: var(--ltpink);
font-size: 24px;
font-family: Satoshi;
font-weight: 700;
word-wrap: break-word;
  margin: 1em 0 1em 0;
  padding: 4px;
`

export const YellowHighlight = styled(PinkHighlight)`
background-color: var(--yellow);
color: var(--black);`

export const DarkBlueHighlight = styled(PinkHighlight)`
background-color: var(--dkblue);
color: var(--ltblue);`

export const GreenHighlight = styled(PinkHighlight)`
background-color: var(--white);
color: var(--dkblue)
`

export const Email = styled.p`
color: var(--dkblue);
font-size: 24px;
font-family: var(--mono);
font-weight: 900;
word-wrap: break-word`

export const HeroEmail = styled(Email)`
color: var(--ltblue);
padding-top: 1rem;
`

export const Link = styled.a`
&:link {
  color: var(--ltblue);
}

&:visited {
  color: var(--ltblue);
}

&:active {
  color: var(--ltblue);
}`