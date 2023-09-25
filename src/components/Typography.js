import styled from 'styled-components/macro';

export const Heading1 = styled.h1`
font-size: 1.75rem;
  font-weight: 700;
  color: inherit;
  `

export const Heading2 = styled.h2`
font-size: 2rem;
  font-weight: 900;
  margin-top: 7px;
  color: var(--magenta);
`

export const Heading3 = styled.h3`
font-size: 1.5rem;
  font-weight: 400;
  color: black;
  margin-top: 3px;
  margin-bottom: 1.5em;
  @media screen and (min-width: 668px) {
    margin-bottom: 0%;
  }
  `

export const Heading4 = styled.h4`
  font-size: 48px;
  font-weight: 700;
  color: #2f3699;
  margin: 1em 10px 1em 10px;
  @media screen and (min-width: 668px) {
    font-size: 5.5rem;
  }
`

export const Heading5 = styled.h5`
  font-size: 46px;
  font-weight: 700;
  color: #2f3699;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`

export const Heading6 = styled.h6`
  font-size: 2rem;
  font-weight: 900;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`

export const Paragraph = styled.p`
  font-family: 'EB Garamond', serif;
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 29px;
`
export const ProjectParagraph = styled(Paragraph)`
  margin-top: 10px;
  margin-bottom: 10px;
`