import styled from 'styled-components/macro';

export const ModalButton = styled.button`
border: none;
border-radius: 3px;
padding: 2px;
background: transparent;
font: inherit;
text-decoration: underline 2px var(--blue-medium);
@media screen and (-ms-high-contrast: active) {
    border: 2px solid currentcolor;
  }
    &:hover, &:active {
      border: none;
      color: var(--blue-medium);
    };
    &:focus {
      outline-style: solid;
      outline-color: transparent;
      box-shadow: 0 0 0 4px #333333;
    };
`

export const BlobGroup = styled.div`
position: relative;
text-align: center;
`

export const BlobImage = styled.img`
`

export const BlobText = styled.p`
position: absolute;
    bottom: 70px;
    right: 35px;
    font-family: "EB Garamond", serif;
    font-size: 22px;
    width: 70%;
    color: white;
`

export const ModalWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: flex-end;
`

export const CloseButton = styled.button`
border: none;
border-radius: 50%;
color: var(--grey-dark);
background-color: transparent;
cursor: pointer;
width: 2.5rem;
  height: 2.5rem;
  padding: 0.35em;
@media screen and (-ms-high-contrast: active) {
  border: 2px solid currentcolor;
}
  &:hover {
    transform: scale(1.3);
    border: none;
  };
  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 0 4px #333333;
  };
`

export const ButtonIcon = styled.svg`
width: 100%;
    height: 100%;`