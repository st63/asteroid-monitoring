import styled from "styled-components";

export const StyledContainer = styled.div`
display: flex;
justify-content: center;
`

export const StyledMainPage = styled.div`
width: 952px;
height: 200px;
padding: 37px 16px 46px 16px;
@media ${({ theme }) => theme.media.phone} {
   width: 100%;
   padding-top: 8px;
   }
`

export const Button = styled.button`
color: white;
background: #186DD6;
border-radius: 24px;
border: none;
padding: 9px 17px;
margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
margin-top: 8px;
outline: none;
display: ${({ buttonShow }) => buttonShow || 'inline'};
&:hover {
   cursor: pointer;
}
`