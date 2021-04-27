import React from 'react';
import AsteroidElement from '../components/AsteroidElement';
import InfiniteScroll from "react-infinite-scroll-component";
import {
   StyledSectionWrapper, StyledWrapperTitles, StyledTitle, StyledSorting, StyledSubTitle, StyledSortingCheckbox,
   StyledInput, StyledInputTitle, StyledSortingWarning, StyledFooter, StyledSortingDistanceKm, StyledSortingDistanceMoon
} from '../components/StyledComponents';

export class MainPage extends React.Component {
   state = {
      allAsteroids: [],
      asteroidsToDisplay: [],
      distanceInKilometers: true,
      distanceIndistanceToTheMoon: false,
      hazardFilter: false,
      hasMore: true,
   }

   componentDidMount() {
      this.getAllAsteroids();
   }

   getAllAsteroids = async () => {
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;
      const day = new Date().getDate();
      const currentDate = `${year}-${month}-${day}`;

      try {
         let response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDate}&api_key=DEMO_KEY`);
         let data = await response.json();
         let allAsteroidsObject = data.near_earth_objects;
         const allAsteroidsCountKeys = Object.keys(allAsteroidsObject);
         let allAsteroidsArray = [];

         for (let i = 0; i < allAsteroidsCountKeys.length; i++) {
            let nextDay = new Date();
            nextDay.setDate(nextDay.getDate() + i);
            const year = nextDay.getFullYear();
            let month = nextDay.getMonth() + 1;
            let day = nextDay.getDate();

            if (month < 10) {
               month = `0${month}`
            }

            if (day < 10) {
               day = `0${day}`
            }

            allAsteroidsObject[`${year}-${month}-${day}`].map(asteroid => {
               allAsteroidsArray.push(asteroid)
            })
         }

         let asteroidsToDisplay = [];
         for (let i = 0; i < 5; i++) {
            asteroidsToDisplay.push(allAsteroidsArray[i])
         }

         this.setState({
            allAsteroids: allAsteroidsArray,
            asteroidsToDisplay: asteroidsToDisplay,
         })
      } catch (err) {
         alert('Извините, сервер не справляется, очень много запросов');
      }
   }

   changeDistanceSorting = (value) => {
      this.setState({
         distanceInKilometers: value,
         distanceIndistanceToTheMoon: !value,
      })
   }

   toggleHazardFilter = () => {
      this.setState((state) => {
         return { hazardFilter: !state.hazardFilter }
      })
   }

   loadMore = () => {
      let newArray = [];
      for (let i = this.state.asteroidsToDisplay.length; i < this.state.asteroidsToDisplay.length + 4; i++) {
         if (i < this.state.allAsteroids.length) {
            newArray.push(this.state.allAsteroids[i])
         }
      }
      this.setState({
         asteroidsToDisplay: [...this.state.asteroidsToDisplay, ...newArray]
      })
   }

   render() {
      if (this.state.allAsteroids.length === 0) {
         return null;
      }
      let lengthArray = this.state.allAsteroids.length;
      let maxAsteroid = 0;
      let minAsteroid = 10000;
      for (let i = 0; i < lengthArray; i++) {
         if (maxAsteroid < this.state.allAsteroids[i].estimated_diameter.meters.estimated_diameter_max) {
            maxAsteroid = this.state.allAsteroids[i].estimated_diameter.meters.estimated_diameter_max
         }
         if (minAsteroid > this.state.allAsteroids[i].estimated_diameter.meters.estimated_diameter_max) {
            minAsteroid = this.state.allAsteroids[i].estimated_diameter.meters.estimated_diameter_max
         }
      }
      let stepMeters = (maxAsteroid - minAsteroid) / 100;
      let weightDistanceKm, weightDistanceMoon, underlineDistanceKm, underlineDistanceMoon;
      if (this.state.distanceInKilometers) {
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

      return (
         <>
            <StyledSectionWrapper props={this.props} marginBottom={'26px'} border={'1px solid black'}>
               <StyledWrapperTitles>
                  <StyledTitle props={this.props}>
                     ARMAGGEDON V
                  </StyledTitle>
                  <StyledSubTitle>
                     Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
                  </StyledSubTitle>
               </StyledWrapperTitles>
               <StyledSorting props={this.props} paddingTop={'14px'}>
                  <StyledSortingWarning to='/' weight={'bold'}>
                     Астероиды
                  </StyledSortingWarning>
                  <StyledSortingWarning to='/for-destruction' margin={'24px'} underline={'underline'}>
                     Уничтожение
                  </StyledSortingWarning>
               </StyledSorting>
            </StyledSectionWrapper>
            <StyledSectionWrapper marginBottom={'24px'}>
               <StyledSortingCheckbox>
                  <StyledInput onClick={this.toggleHazardFilter} />
                  <StyledInputTitle>
                     Показать только опасные
                  </StyledInputTitle>
               </StyledSortingCheckbox>
               <StyledSorting margin={'6px'}>
                  Расстояние <StyledSortingDistanceKm weightDistanceKm={weightDistanceKm} underlineDistanceKm={underlineDistanceKm} onClick={() => this.changeDistanceSorting(true)}>в километрах</StyledSortingDistanceKm>, <StyledSortingDistanceMoon weightDistanceMoon={weightDistanceMoon} underlineDistanceMoon={underlineDistanceMoon} onClick={() => this.changeDistanceSorting(false)}>в дистанциях до луны</StyledSortingDistanceMoon>
               </StyledSorting>
            </StyledSectionWrapper>
            <InfiniteScroll
               dataLength={this.state.asteroidsToDisplay.length}
               next={this.loadMore}
               hasMore={this.state.hasMore}
            >
               {
                  this.state.asteroidsToDisplay.map(asteroid => <AsteroidElement
                     key={asteroid.id}
                     {...asteroid}
                     minAsteroid={minAsteroid}
                     stepMeters={stepMeters}
                     distanceInKilometers={this.state.distanceInKilometers}
                     hazardFilter={this.state.hazardFilter} />)
               }
            </InfiniteScroll>
            <StyledFooter>
               2021 © Все права и планета защищены
            </StyledFooter>
         </>
      )
   }
}