import React from 'react';
import tiranozavrImg from '../images/tiranozavrImg.png';
import { pushAsteroidToDestroyAC } from '../redux/actions';
import { connect } from "react-redux";
import {
   StyledAsteroid, StyledTiranozavrImg, StyledAsteroidInfo, StyledAsteroidEstimation, StyledButton, StyledAsteroidName, StyledAsteroidParam, StyledSpan, StyledDotted,
} from './StyledComponents';

class AsteroidElement extends React.Component {
   dateConvert(date) {
      let currentDate;
      const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
      const newDate = new Date(date);
      const year = new Date(date).getFullYear();
      const month = months[newDate.getMonth()];
      const day = new Date(date).getDate();
      return currentDate = `${day} ${month} ${year}`;
   }

   pushAsteroidToDestroy = () => {
      this.props.pushAsteroidToDestroyAC(this.props)
   }

   render() {
      let props;
      if (this.props.location === undefined || this.props.location.propsSearch === undefined) {
         props = this.props;
      } else {
         props = this.props.location.propsSearch;
      }
      const { id, name, close_approach_data, estimated_diameter, is_potentially_hazardous_asteroid, hazardFilter, distanceInKilometers, minAsteroid, stepMeters } = props;
      if (hazardFilter && !is_potentially_hazardous_asteroid) {
         return null;
      }
      let customName = name.replace('(', '').replace(')', '')
      const hazardousColor = is_potentially_hazardous_asteroid ? 'linear-gradient(90deg, #FFB199 0%, #FF0844 100%)' : 'linear-gradient(90deg, #CFF37D 0%, #7DE88C 100%)';
      const hazardousTitle = is_potentially_hazardous_asteroid ? 'опасен' : 'не опасен';
      const date = close_approach_data[0].close_approach_date;
      let distance;
      if (distanceInKilometers) {
         distance = Math.round(close_approach_data[0].miss_distance.kilometers);
         distance = distance.toLocaleString('ru-RU')
         distance = distance + ' км';
      } else {
         distance = Math.round(close_approach_data[0].miss_distance.lunar);
         distance = `${distance} р. до Луны`;
      }
      const diameter = Math.round(estimated_diameter.meters.estimated_diameter_max);
      const currentDate = this.dateConvert(date);
      let asteroidImageSize = 0;
      let asteroidImagePositionY = 0;
      if (diameter >= minAsteroid) {
         asteroidImageSize = Math.round((diameter - minAsteroid) / stepMeters * 1.6 + 80) + '' + 'px';
         asteroidImagePositionY = Math.round((diameter - minAsteroid) / stepMeters * 1.4) + '' + 'px';
         asteroidImagePositionY = '-' + asteroidImagePositionY;
      }
      let buttonShow;
      let padding;
      if (this.props.buttonShow != undefined) {
         buttonShow = this.props.buttonShow;
         padding = this.props.padding;
      }

      return (
         <StyledAsteroid background={hazardousColor} asteroidImageSize={asteroidImageSize} asteroidImagePositionY={asteroidImagePositionY}>
            <StyledTiranozavrImg src={tiranozavrImg} />
            <StyledAsteroidInfo align={'center'} marginTop={'50px'} padding={padding}>
               <StyledAsteroidEstimation>
                  Оценка:
               </StyledAsteroidEstimation>
               <StyledAsteroidEstimation weight={'bold'}>
                  {hazardousTitle}
               </StyledAsteroidEstimation>
               <StyledButton onClick={this.pushAsteroidToDestroy} buttonShow={buttonShow}>
                  На уничтожение
               </StyledButton>
            </StyledAsteroidInfo>
            <StyledAsteroidInfo width={'290px'}>
               <StyledAsteroidName marginBottom={this.props.marginBottom} to={{
                  pathname: `/asteroid-detail/${id}`,
                  propsSearch: {
                     id: id,
                     customName: customName,
                     ...this.props,
                  }
               }}>
                  {customName}
               </StyledAsteroidName>
               <StyledAsteroidParam><StyledSpan>Дата</StyledSpan><StyledDotted></StyledDotted><StyledSpan>
                  {currentDate}
               </StyledSpan></StyledAsteroidParam>
               <StyledAsteroidParam><StyledSpan>Расстояние</StyledSpan><StyledDotted></StyledDotted><StyledSpan>
                  {distance}
               </StyledSpan></StyledAsteroidParam>
               <StyledAsteroidParam><StyledSpan>Размер</StyledSpan><StyledDotted></StyledDotted><StyledSpan>
                  {diameter} м
               </StyledSpan></StyledAsteroidParam>
            </StyledAsteroidInfo>
         </StyledAsteroid>
      )
   }
}

let mapStateToProps = (state) => {
   return {
      asteroidsToDestroy: state.asteroidsToDestroyPage.asteroidsToDestroy,
   };
};

export default connect(mapStateToProps, { pushAsteroidToDestroyAC })(AsteroidElement);