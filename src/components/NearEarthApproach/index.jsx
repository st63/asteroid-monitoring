import React from 'react';
import { StyledNearEarthApproach } from './styles';

export class NearEarthApproach extends React.Component {
  dateConvert(date) {
    return new Date(date).toLocaleString('ru', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  }

  render() {
    const {
      orbiting_body, relative_velocity, epoch_date_close_approach, miss_distance,
    } = this.props;

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

    const speed = `${Math.round(relative_velocity.kilometers_per_second)} км в секунду`;

    const date = this.dateConvert(epoch_date_close_approach);

    const distance = `${Math.round(miss_distance.kilometers).toLocaleString('ru-RU')} км`;

    let timeForm;

    (epoch_date_close_approach <= new Date().getTime()) ? timeForm = 'летел' : timeForm = 'будет лететь';

    return (
      <>
        <StyledNearEarthApproach>
          {date}
          {' '}
          этот астероид
          {' '}
          {timeForm}
          {' '}
          вокруг
          {' '}
          {planet}
          {' '}
          со скоростью
          {' '}
          {speed}
          , на расстоянии
          {' '}
          {distance}
          {' '}
          от Земли
        </StyledNearEarthApproach>
      </>
    );
  }
}
