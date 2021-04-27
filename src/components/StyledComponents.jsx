import styled from "styled-components";
import { Link } from 'react-router-dom';
import asteroidImg from '../images/asteroidImg.svg';

export const StyledSectionWrapper = styled.header`
display: flex;
justify-content: space-between;
margin-bottom: ${props => props.marginBottom};
border-bottom: ${({ border }) => border || 'none'};
@media ${({ theme }) => theme.media.phone} {
   flex-direction: column;
   margin-bottom: 10px;
   }
`

export const StyledWrapperTitles = styled.div`

`

export const StyledTitle = styled.h1`
font-size: 36px;
line-height: 48px;
font-weight: 400;
margin-bottom: 8px;
@media ${({ theme }) => theme.media.phone} {
   font-size: 24px;
   }
`

export const StyledSorting = styled.div`
padding-top: ${({ paddingTop }) => paddingTop || '0px'};
@media ${({ theme }) => theme.media.phone} {
margin-bottom: ${({ margin }) => margin || '18px'};
width: 74%;
padding-top: 0px;
   }
`

export const StyledSubTitle = styled.div`
margin-bottom: 24px;
width: 414px;
@media ${({ theme }) => theme.media.phone} {
margin-bottom: 19px;
width: 100%;
   }
`

export const StyledSortingCheckbox = styled.div`
@media ${({ theme }) => theme.media.phone} {
margin-bottom: 16px;
   }
`

export const StyledInput = styled.input.attrs({ type: 'checkbox' })`
width: 18px;
height: 18px;
margin-right: 10px;
vertical-align: text-top;
`

export const StyledInputTitle = styled.span`

`

export const StyledSortingWarning = styled(Link)`
margin-left: ${({ margin }) => margin || '0px'};
text-decoration: ${({ underline }) => underline || 'none'};
color: black;
font-weight: ${({ weight }) => weight || 'normal'};
`

export const StyledFooter = styled.footer`
text-align: center;
`

export const StyledSortingDistanceKm = styled.span`
font-weight: ${({ weightDistanceKm }) => weightDistanceKm};
text-decoration: ${({ underlineDistanceKm }) => underlineDistanceKm};
&:hover {
   cursor: pointer;
}
`

export const StyledSortingDistanceMoon = styled.span`
font-weight: ${({ weightDistanceMoon }) => weightDistanceMoon};
text-decoration: ${({ underlineDistanceMoon }) => underlineDistanceMoon};
&:hover {
   cursor: pointer;
}
`

export const StyledAsteroid = styled.div`
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
`

export const StyledTiranozavrImg = styled.img`
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
`

export const StyledAsteroidInfo = styled.div`
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
`

export const StyledAsteroidName = styled(Link)`
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
`

export const StyledAsteroidParam = styled.div`
background: transparent;
display: flex;
justify-content: space-between;
margin-bottom: 10px;
`

export const StyledAsteroidEstimation = styled.span`
background: transparent;
display: block;
font-weight: ${({ weight }) => weight || 'normal'};
`

export const StyledButton = styled.button`
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

export const StyledSpan = styled.span`
background: transparent;
`

export const StyledDotted = styled.span`
background: transparent;
border-bottom: 1px dotted black;
display: flex;
flex-grow: 1;
height: 18px;
`

export const StyledAsteroidNameTitle = styled.span`
margin-right: 24px;
font-weight: bold;
`

export const StyleNearEarthApproach = styled.div`
font-size: 14px;
background: linear-gradient(90deg, #E0FFFF 0%, #40E0D0 100%);
border: 1px solid black;
border-radius: 4px;
margin-bottom: 7px;
padding: 5px 10px;
`