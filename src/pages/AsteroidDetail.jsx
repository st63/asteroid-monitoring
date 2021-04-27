import React from 'react';
import { withRouter } from 'react-router';
import { NearEarthApproach } from '../components/NearEarthApproach';
import AsteroidElement from '../components/AsteroidElement';
import {
   StyledSectionWrapper, StyledWrapperTitles, StyledTitle, StyledSorting, StyledSubTitle, StyledSortingWarning, StyledAsteroidNameTitle
} from '../components/StyledComponents';

class AsteroidDetail extends React.Component {
   state = {
      allApproachData: [],
   }

   componentDidMount() {
      this.getAsteroidsDetail();
   }

   getAsteroidsDetail = async () => {
      const id = this.props.match.params.id;
      let response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=DEMO_KEY`);
      let data = await response.json();
      this.setState({
         allApproachData: data.close_approach_data,
      })
   }

   render() {
      if (this.state.allApproachData.length === 0) {
         return null;
      }

      const allApproach = this.state.allApproachData.map(approach => <NearEarthApproach {...approach} />)

      return (
         <React.Fragment>
            <StyledSectionWrapper props={this.props} marginBottom={'26px'} border={'1px solid black'}>
               <StyledWrapperTitles>
                  <StyledTitle props={this.props}>
                     ARMAGGEDON V
                  </StyledTitle>
                  <StyledSubTitle>
                     Подробные данные об астероиде
                  </StyledSubTitle>
               </StyledWrapperTitles>
               <StyledSorting props={this.props} paddingTop={'14px'}>
                  <StyledAsteroidNameTitle>
                     {this.props.location.propsSearch.customName}
                  </StyledAsteroidNameTitle>
                  <StyledSortingWarning to='/' underline={'underline'}>
                     Все астероиды
                  </StyledSortingWarning>
               </StyledSorting>
            </StyledSectionWrapper>
            <AsteroidElement {...this.props} />
            <StyledSubTitle>
               Сближения этого астероида за все время:
            </StyledSubTitle>
            {allApproach}
         </React.Fragment>
      )
   }
}

export const AsteroidDetailWrap = withRouter(AsteroidDetail);