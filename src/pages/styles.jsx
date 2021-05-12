import styled from 'styled-components';
import { Link } from 'react-router-dom';
import asteroidImg from '../images/asteroidImg.svg';

export const SectionWrapper = styled.header`
display: flex;
justify-content: space-between;
margin-bottom: ${(props) => props.marginBottom};
border-bottom: ${({ border }) => border || 'none'};
@media ${({ theme }) => theme.media.phone} {
   flex-direction: column;
   margin-bottom: 10px;
   }
`;

export const Title = styled.h1`
font-size: 36px;
line-height: 48px;
font-weight: 400;
margin-bottom: 8px;
@media ${({ theme }) => theme.media.phone} {
   font-size: 24px;
   }
`;

export const Sorting = styled.div`
padding-top: ${({ paddingTop }) => paddingTop || '0px'};
@media ${({ theme }) => theme.media.phone} {
margin-bottom: ${({ margin }) => margin || '18px'};
width: 74%;
padding-top: 0px;
   }
`;

export const SubTitle = styled.div`
margin-bottom: 24px;
width: 414px;
@media ${({ theme }) => theme.media.phone} {
margin-bottom: 19px;
width: 100%;
   }
`;

export const SortingWarning = styled(Link)`
margin-left: ${({ margin }) => margin || '0px'};
text-decoration: ${({ underline }) => underline || 'none'};
color: black;
font-weight: ${({ weight }) => weight || 'normal'};
`;

export const AsteroidNameTitle = styled.span`
margin-right: 24px;
font-weight: bold;
`;

export const Asteroid = styled.div`
width: 100%;
height: 200px;
background: ${({ background }) => background};
margin-bottom: 16px;
border: 1px solid black;
border-radius: 10px;
position: relative;
padding: 0px 24px 24px 24px;
@media ${({ theme }) => theme.media.phone} {
background-size: 100%;
background-repeat: no-repeat;
background-position: 0px -255px;
padding: 0px 16px 16px 16px;
   }
&::after {
   content: '';
    position: absolute;
    width: 97%;
    height: 50%;
    background-image: url(${asteroidImg});
    background-repeat: no-repeat;
    background-position: 10% 101%;
    background-size: ${({ asteroidImageSize }) => asteroidImageSize || '80px'};
    @media ${({ theme }) => theme.media.phone} {
      height: 96%;
      background-position: 13% ${({ asteroidImagePositionY }) => asteroidImagePositionY || '0%'};
   }
}
@media ${({ theme }) => theme.media.phone} {
   height: 400px;
   display: flex;
   flex-direction: column-reverse;
   }
`;

export const AsteroidName = styled(Link)`
position: relative;
z-index: 1;
background: transparent;
display: inline-block;
font-weight: bold;
font-size: 24px;
line-height: 32px;
border-bottom: 1px solid black;
margin-bottom: 20px;
text-decoration: none;
color: black;
&:hover {
   cursor: pointer;
}
@media ${({ theme }) => theme.media.phone} {
margin-bottom: ${({ marginBottom }) => marginBottom || '48px'};
   }
`;
