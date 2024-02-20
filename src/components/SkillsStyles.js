import styled from 'styled-components/macro';

export const SkillsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 4rem;
  background-color: var(--ltblue);
  @media screen and (min-width: 668px) {
    padding-top: 121px;
    padding-bottom: 155px;
  }
`

export const ListOuterWrapper = styled.div`
margin-left: 24px;
  margin-right: 24px;
@media screen and (min-width: 668px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2em;
  margin-bottom: 3em;
};
@media screen and (min-width: 1024px) {
  display: flex;
  flex-direction: row;
  margin-bottom: 3em;
}
`

export const ListWrapper = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em;
  @media screen and (min-width: 668px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2em;
  }
`

export const List = styled.ul`
text-align: center;
list-style-type: none;
margin: 0;
padding: 0;
@media screen and (min-width: 668px) {
  text-align: left;
}
`

export const ListItem = styled.li`
font-size: 22px;
font-family: var(--mono);
font-weight: 400;
line-height: 32px;
word-wrap: break-word
`