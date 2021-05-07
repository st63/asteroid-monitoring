import React from 'react';
import { withRouter } from 'react-router';
import { NearEarthApproach } from '../../components/NearEarthApproach';
import AsteroidElement from '../../components/AsteroidElement';
import { SectionWrapper, Title, Sorting, SubTitle, SortingWarning, AsteroidNameTitle } from '../styles';

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
            <SectionWrapper props={this.props} marginBottom={'26px'} border={'1px solid black'}>
               <div>
                  <Title props={this.props}>
                     ARMAGGEDON V
                  </Title>
                  <SubTitle>
                     Подробные данные об астероиде
                  </SubTitle>
               </div>
               <Sorting props={this.props} paddingTop={'14px'}>
                  <AsteroidNameTitle>
                     {this.props.location.propsSearch.customName}
                  </AsteroidNameTitle>
                  <SortingWarning to='/' underline={'underline'}>
                     Все астероиды
                  </SortingWarning>
               </Sorting>
            </SectionWrapper>
            <AsteroidElement {...this.props} />
            <SubTitle>
               Сближения этого астероида за все время:
            </SubTitle>
            {allApproach}
         </React.Fragment>
      )
   }
}

export const AsteroidDetailWrap = withRouter(AsteroidDetail);