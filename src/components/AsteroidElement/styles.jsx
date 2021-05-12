import styled from 'styled-components';

export const TiranozavrImg = styled.img`
position: absolute;
background: transparent;
bottom: 0px;
left: 26px;
@media ${({ theme }) => theme.media.phone} {
transform: scale(-1, 1);
width: 35px;
left: initial;
right: 2px;
top: 113px;
   }
`;

export const AsteroidInfo = styled.div`
background: transparent;
float: right;
margin-top: ${({ marginTop }) => marginTop || '25px'};
margin-left: 102px;
text-align: ${({ align }) => align || 'left'};
width: ${({ width }) => width || 'none'};
padding-top: ${({ padding }) => padding || '0px'};
padding-right: ${({ padding }) => padding || '0px'};
@media ${({ theme }) => theme.media.phone} {
   margin-left: 0px;
   float: none;
   margin-top: 0px;
   width: 100%;
   }
`;

export const AsteroidParam = styled.div`
background: transparent;
display: flex;
justify-content: space-between;
margin-bottom: 10px;
`;

export const AsteroidEstimation = styled.span`
background: transparent;
display: block;
font-weight: ${({ weight }) => weight || 'normal'};
`;

export const Span = styled.span`
background: transparent;
`;

export const Dotted = styled.span`
background: transparent;
border-bottom: 1px dotted black;
display: flex;
flex-grow: 1;
height: 18px;
`;
