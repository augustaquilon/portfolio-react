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
  font-weight: 700;
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

export const Paragraph = styled.p`
  font-family: 'EB Garamond', serif;
  font-size: 22px;
  font-family: EB Garamond;
  font-weight: 400;
  word-wrap: break-word;
  font-weight: 400;
  line-height: 29px;
`
export const ProjectParagraph = styled(Paragraph)`
  margin-top: 10px;
  margin-bottom: 10px;
`