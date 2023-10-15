import styled from 'styled-components/macro';

export const ContactWrapper = styled.footer`
  display: flex;
  padding-top: 64px;
  padding-bottom: 93px;
  flex-direction: column;
  background: white;
  @media screen and (min-width: 668px) {
    padding-top: 196px;
    padding-bottom: 168px;
    text-align: center;
  };
  @media screen and (min-width: 1024px) {
    margin-bottom: 5em;
      align-items: center;
  }
`
export const ContactDetailsWrapper = styled.div`
@media screen and (min-width: 668px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 125px;
};
`