import React from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import InfiniteScroll from 'react-infinite-scroll-component';
import AsteroidElement from '../../components/AsteroidElement';
import {
  SectionWrapper, Title, Sorting, SubTitle, SortingWarning,
} from '../styles';
import {
  SortingCheckbox, Input, Footer, SortingDistanceKm, SortingDistanceMoon,
} from './styles';
import { getAsteroidsAC, loadMoreAC } from '../../redux/mainPage/actions';

class MainPage extends React.Component {
  state = {
    distanceInKilometers: true,
    hazardFilter: false,
    hasMore: true,
  }

  componentDidMount() {
    const currentDate = DateTime.now().toISODate();

    this.props.getAsteroidsAC(currentDate);
  }

  changeDistanceSorting = (value) => {
    this.setState({
      distanceInKilometers: value,
    });
  }

  toggleHazardFilter = () => {
    this.setState((state) => ({ hazardFilter: !state.hazardFilter }));
  }

  loadMore = () => {
    const newArray = [];

    for (let i = this.props.asteroidsToDisplay.length; i < this.props.asteroidsToDisplay.length + 4; i++) {
      if (i < this.props.allAsteroids.length) {
        newArray.push(this.props.allAsteroids[i]);
      }
    }

    this.props.loadMoreAC(newArray);
  }

  render() {
    const { allAsteroids, asteroidsToDisplay, onlyDangerousAsteroids } = this.props;
    const { distanceInKilometers, hazardFilter, hasMore } = this.state;

    if (allAsteroids.length === 0) {
      return null;
    }

    const lengthArray = allAsteroids.length;
    let maxAsteroid = 0;
    let minAsteroid = 10000;

    for (let i = 0; i < lengthArray; i++) {
      if (maxAsteroid < allAsteroids[i].estimated_diameter.meters.estimated_diameter_max) {
        maxAsteroid = allAsteroids[i].estimated_diameter.meters.estimated_diameter_max;
      }

      if (minAsteroid > allAsteroids[i].estimated_diameter.meters.estimated_diameter_max) {
        minAsteroid = allAsteroids[i].estimated_diameter.meters.estimated_diameter_max;
      }
    }

    const stepMeters = (maxAsteroid - minAsteroid) / 100;

    let weightDistanceKm; let weightDistanceMoon; let underlineDistanceKm; let
      underlineDistanceMoon;

    if (distanceInKilometers) {
      weightDistanceKm = 'bold';
      weightDistanceMoon = 'normal';
      underlineDistanceKm = 'none';
      underlineDistanceMoon = 'underline';
    } else {
      weightDistanceKm = 'normal';
      weightDistanceMoon = 'bold';
      underlineDistanceKm = 'underline';
      underlineDistanceMoon = 'none';
    }

    const currentArray = !hazardFilter ? asteroidsToDisplay : onlyDangerousAsteroids;

    return (
      <>
        <SectionWrapper props={this.props} marginBottom="26px" border="1px solid black">
          <div>
            <Title props={this.props}>
              ARMAGGEDON V
            </Title>
            <SubTitle>
              Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
            </SubTitle>
          </div>
          <Sorting props={this.props} paddingTop="14px">
            <SortingWarning to="/" weight="bold">
              Астероиды
            </SortingWarning>
            <SortingWarning to="/for-destruction" margin="24px" underline="underline">
              Уничтожение
            </SortingWarning>
          </Sorting>
        </SectionWrapper>
        <SectionWrapper marginBottom="24px">
          <SortingCheckbox>
            <Input onClick={this.toggleHazardFilter} />
            <span>
              Показать только опасные
            </span>
          </SortingCheckbox>
          <Sorting margin="6px">
            Расстояние
            <SortingDistanceKm
              weightDistanceKm={weightDistanceKm}
              underlineDistanceKm={underlineDistanceKm}
              onClick={() => this.changeDistanceSorting(true)}
            >
              в километрах
            </SortingDistanceKm>
            ,
            <SortingDistanceMoon
              weightDistanceMoon={weightDistanceMoon}
              underlineDistanceMoon={underlineDistanceMoon}
              onClick={() => this.changeDistanceSorting(false)}
            >
              в дистанциях до луны
            </SortingDistanceMoon>
          </Sorting>
        </SectionWrapper>
        <InfiniteScroll
          dataLength={asteroidsToDisplay.length}
          next={this.loadMore}
          hasMore={hasMore}
        >
          {
            currentArray.map((asteroid) => (
              <AsteroidElement
                key={asteroid.id}
                {...asteroid}
                minAsteroid={minAsteroid}
                stepMeters={stepMeters}
                distanceInKilometers={distanceInKilometers}
              />
            ))
          }
        </InfiniteScroll>
        <Footer>
          2021 © Все права и планета защищены
        </Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  allAsteroids: state.mainPage.allAsteroids,
  asteroidsToDisplay: state.mainPage.asteroidsToDisplay,
  onlyDangerousAsteroids: state.mainPage.onlyDangerousAsteroids,
});

export default connect(mapStateToProps, { getAsteroidsAC, loadMoreAC })(MainPage);
