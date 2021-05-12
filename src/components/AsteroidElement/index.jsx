import React from 'react';
import tiranozavrImg from '../../images/tiranozavrImg.png';
import { pushAsteroidToDestroyAC } from '../../redux/asteroidElement/actions';
import { connect } from "react-redux";
import { Button } from '../../styles';
import { Asteroid, AsteroidName } from '../../pages/styles';
import { TiranozavrImg, AsteroidInfo, AsteroidEstimation, AsteroidParam, Span, Dotted } from './styles';

class AsteroidElement extends React.Component {

   dateConvert(date) {

      return new Date(date).toLocaleString('ru', {
         day: 'numeric',
         month: 'long',
         year: 'numeric',
      });
   }

   pushAsteroidToDestroy = () => {

      this.props.pushAsteroidToDestroyAC(this.props)
   }

   render() {

      let props;

      (this.props.location === undefined || this.props.location.propsSearch === undefined) ? props = this.props : props = this.props.location.propsSearch;

      const { id, name, close_approach_data, estimated_diameter, is_potentially_hazardous_asteroid, distanceInKilometers, minAsteroid, stepMeters } = props;

      const customName = name.replace('(', '').replace(')', '');

      const hazardousColor = is_potentially_hazardous_asteroid ? 'linear-gradient(90deg, #FFB199 0%, #FF0844 100%)' : 'linear-gradient(90deg, #CFF37D 0%, #7DE88C 100%)';
      const hazardousTitle = is_potentially_hazardous_asteroid ? 'опасен' : 'не опасен';

      let distance;

      if (distanceInKilometers) {

         distance = Math.round(close_approach_data[0].miss_distance.kilometers).toLocaleString('ru-RU') + ' км';

      } else {

         distance = Math.round(close_approach_data[0].miss_distance.lunar);
         distance = `${distance} р. до Луны`;
      }

      const diameter = Math.round(estimated_diameter.meters.estimated_diameter_max);

      const date = close_approach_data[0].close_approach_date;
      const dateCurrentAsteroid = this.dateConvert(date);

      let asteroidImageSize = 0;
      let asteroidImagePositionY = 0;

      if (diameter >= minAsteroid) {

         asteroidImageSize = Math.round((diameter - minAsteroid) / stepMeters * 1.6 + 80) + 'px';
         asteroidImagePositionY = '-' + Math.round((diameter - minAsteroid) / stepMeters * 1.4) + 'px';
      }

      let buttonShow;
      let padding;

      if (this.props.buttonShow !== undefined) {

         buttonShow = this.props.buttonShow;
         padding = this.props.padding;
      }

      return (
         <Asteroid
            background={hazardousColor}
            asteroidImageSize={asteroidImageSize}
            asteroidImagePositionY={asteroidImagePositionY}
         >
            <TiranozavrImg src={tiranozavrImg} />
            <AsteroidInfo align={'center'} marginTop={'50px'} padding={padding}>
               <AsteroidEstimation>
                  Оценка:
               </AsteroidEstimation>
               <AsteroidEstimation weight={'bold'}>
                  {hazardousTitle}
               </AsteroidEstimation>
               <Button onClick={this.pushAsteroidToDestroy} buttonShow={buttonShow}>
                  На уничтожение
               </Button>
            </AsteroidInfo>
            <AsteroidInfo width={'290px'}>
               <AsteroidName marginBottom={this.props.marginBottom} to={{
                  pathname: `/asteroid-detail/${id}`,
                  propsSearch: {
                     id: id,
                     customName: customName,
                     ...this.props,
                  }
               }}>
                  {customName}
               </AsteroidName>
               <AsteroidParam><Span>Дата</Span><Dotted></Dotted><Span>
                  {dateCurrentAsteroid}
               </Span></AsteroidParam>
               <AsteroidParam><Span>Расстояние</Span><Dotted></Dotted><Span>
                  {distance}
               </Span></AsteroidParam>
               <AsteroidParam><Span>Размер</Span><Dotted></Dotted><Span>
                  {diameter} м
               </Span></AsteroidParam>
            </AsteroidInfo>
         </Asteroid>
      )
   }
}

let mapStateToProps = (state) => {

   return {
      asteroidsToDestroy: state.asteroidElement.asteroidsToDestroy,
   };
};

export default connect(mapStateToProps, { pushAsteroidToDestroyAC })(AsteroidElement);