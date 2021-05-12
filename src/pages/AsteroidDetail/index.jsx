import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NearEarthApproach } from '../../components/NearEarthApproach';
import AsteroidElement from '../../components/AsteroidElement';
import {
  SectionWrapper, Title, Sorting, SubTitle, SortingWarning, AsteroidNameTitle,
} from '../styles';
import { getAsteroidsDetailAC } from '../../redux/asteroidDetail/actions';

class AsteroidDetail extends React.Component {
  componentDidMount() {
    this.getAsteroidsDetail();
  }

  getAsteroidsDetail = async () => {
    const { id } = this.props.match.params;

    this.props.getAsteroidsDetailAC(id);
  }

  render() {
    const { allApproachData } = this.props;

    if (allApproachData.length === 0) {
      return null;
    }

    const allApproach = allApproachData.map((approach) => (
      <NearEarthApproach
        key={approach.epoch_date_close_approach}
        {...approach}
      />
    ));

    return (
      <>
        <SectionWrapper props={this.props} marginBottom="26px" border="1px solid black">
          <div>
            <Title props={this.props}>
              ARMAGGEDON V
            </Title>
            <SubTitle>
              Подробные данные об астероиде
            </SubTitle>
          </div>
          <Sorting props={this.props} paddingTop="14px">
            <AsteroidNameTitle>
              {this.props.location.propsSearch.customName}
            </AsteroidNameTitle>
            <SortingWarning to="/" underline="underline">
              Все астероиды
            </SortingWarning>
          </Sorting>
        </SectionWrapper>
        <AsteroidElement {...this.props} />
        <SubTitle>
          Сближения этого астероида за все время:
        </SubTitle>
        {allApproach}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  allApproachData: state.asteroidDetail.allApproachData,
});

export default compose(
  connect(mapStateToProps, { getAsteroidsDetailAC }),
  withRouter,
)(AsteroidDetail);
