import React from 'react';
import {
   StyleNearEarthApproach
} from './StyledComponents';

export class NearEarthApproach extends React.Component {

   dateConvert(date) {
      const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
      let convertDate = new Date(date);
      const year = new Date(convertDate).getFullYear();
      const month = months[convertDate.getMonth()];
      const day = new Date(convertDate).getDate();
      let hours = new Date(convertDate).getHours() + '';
      if (hours.length === 1) {
         hours = '0' + hours;
      }
      let minutes = new Date(convertDate).getMinutes() + '';
      if (minutes.length === 1) {
         minutes = '0' + minutes;
      }
      return convertDate = `${day} ${month} ${year}, ${hours}:${minutes}`;
   }

   render() {
      const { orbiting_body, relative_velocity, epoch_date_close_approach, miss_distance } = this.props;
      let planet;
      switch (orbiting_body) {
         case 'Merc':
            planet = 'Меркурия';
            break;
         case 'Venus':
            planet = 'Венеры';
            break;
         case 'Earth':
            planet = 'Земли';
            break;
         case 'Mars':
            planet = 'Марса';
            break;
         case 'Jupiter':
            planet = 'Юпитера';
            break;
         case 'Saturn':
            planet = 'Сатурна';
            break;
         default:
            planet = orbiting_body;
      }
      let speed = Math.round(relative_velocity.kilometers_per_second);
      speed = speed + ' км в секунду';
      const date = this.dateConvert(epoch_date_close_approach);
      let distance = Math.round(miss_distance.kilometers);
      distance = distance.toLocaleString('ru-RU')
      distance = distance + ' км';
      let timeForm;
      if (epoch_date_close_approach <= new Date().getTime()) {
         timeForm = 'летел'
      } else {
         timeForm = 'будет лететь'
      }

      return (
         <React.Fragment>
            <StyleNearEarthApproach>{date} этот астероид {timeForm} вокруг {planet} со скоростью {speed}, на расстоянии {distance} от Земли</StyleNearEarthApproach>
         </React.Fragment>
      )
   }
}