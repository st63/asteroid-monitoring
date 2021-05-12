import styled from 'styled-components';

export const SortingCheckbox = styled.div`
@media ${({ theme }) => theme.media.phone} {
margin-bottom: 16px;
   }
`;

export const Input = styled.input.attrs({ type: 'checkbox' })`
width: 18px;
height: 18px;
margin-right: 10px;
vertical-align: text-top;
`;

export const Footer = styled.footer`
text-align: center;
`;

export const SortingDistanceKm = styled.span`
font-weight: ${({ weightDistanceKm }) => weightDistanceKm};
text-decoration: ${({ underlineDistanceKm }) => underlineDistanceKm};
&:hover {
   cursor: pointer;
}
`;

export const SortingDistanceMoon = styled.span`
font-weight: ${({ weightDistanceMoon }) => weightDistanceMoon};
text-decoration: ${({ underlineDistanceMoon }) => underlineDistanceMoon};
&:hover {
   cursor: pointer;
}
`;
