import styled from 'styled-components/macro';

export const Heading1 = styled.h1`
  font-size: 28px;
  font-family: Satoshi;
  font-weight: 700;
  word-wrap: break-word;
  font-weight: 700;
  color: var(--blue-royal);
  `

export const Heading2 = styled.h2`
  font-size: 32px;
  font-family: Satoshi;
  font-weight: 900;
  word-wrap: break-word;
  margin-top: 7px;
  color: #000;
`

export const Heading3 = styled.h3`
  font-size: 24px;
  font-family: Satoshi;
  font-weight: 500;
  word-wrap: break-word;
  color: var(--pink);
  margin-top: 3px;
  margin-bottom: 1.5em;
  @media screen and (min-width: 668px) {
    margin-bottom: 0%;
  }
  `

export const Heading4 = styled.h4`
  font-size: 80px;
  font-family: Satoshi;
  font-weight: 700;
  word-wrap: break-word;
  color: var(--blue-royal);
  margin: 1em 10px 1em 10px;
  @media screen and (min-width: 668px) {
    font-size: 5.5rem;
  }
`

export const Heading5 = styled.h5`
  font-size: 72px;
  font-family: Satoshi;
  font-weight: 700;
  line-height: 80px;
  word-wrap: break-word;
  color: var(--blue-royal);
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`

export const Heading6 = styled.h6`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  color: #000;
  font-size: 32px;
  font-family: Satoshi;
  font-weight: 900;
  word-wrap: break-word;
`

export const Heading5Bigger = styled(Heading5)`
font-size: 80px;
`

export const Heading6Bigger = styled(Heading6)`
color: var(--pink);
font-size: 58px;
align-self: center;
`

export const Paragraph = styled.p`
  font-family: 'EB Garamond', serif;
  font-size: 22px;
  font-weight: 400;
  word-wrap: break-word;
  line-height: 29px;
`
export const PinkHighlight = styled.p`
color: #fff;
background-color: var(--pink);
font-size: 24px;
font-family: Satoshi;
font-weight: 700;
word-wrap: break-word;
  margin: 1em 0 1em 0;
`

export const BlueHighlight = styled(PinkHighlight)`
background-color: var(--blue-medium);`

export const DarkBlueHighlight = styled(BlueHighlight)`
background-color: var(--blue-royal);`

export const GreenHighlight = styled(DarkBlueHighlight)`
background-color: var(--green);`

export const ListItem = styled.li`
font-size: 22px;
font-family: EB Garamond;
font-weight: 400;
line-height: 32px;
word-wrap: break-word
`

export const ProjectParagraph = styled(Paragraph)`
  margin-top: 10px;
  margin-bottom: 10px;
`

export const ContactDetails = styled.p`
color: #000;
font-size: 24px;
font-family: Satoshi;
font-weight: 900;
word-wrap: break-word`