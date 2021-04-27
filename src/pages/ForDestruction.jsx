import React from 'react';
import { connect } from "react-redux";
import AsteroidElement from '../components/AsteroidElement';
import {
   StyledSectionWrapper, StyledWrapperTitles, StyledTitle, StyledSorting, StyledSubTitle, StyledButton, StyledSortingWarning, StyledAsteroidNameTitle
} from '../components/StyledComponents';

class ForDestruction extends React.Component {
   render() {
      let buttonShow = 'inline';
      let emptyCart;
      if (this.props.asteroidsToDestroy.length === 0) {
         buttonShow = 'none';
         emptyCart = 'Корзина уничтожения пока пуста';
      }
      const asteroidsToDestroy = this.props.asteroidsToDestroy.map(asteroid => <AsteroidElement marginBottom={'70px'} buttonShow={'none'} padding={'25px'} key={asteroid.id} {...asteroid} />)
      return (
         <React.Fragment>
            <StyledSectionWrapper props={this.props} marginBottom={'26px'} border={'1px solid black'}>
               <StyledWrapperTitles>
                  <StyledTitle props={this.props}>
                     ARMAGGEDON V
                  </StyledTitle>
                  <StyledSubTitle>
                     Здесь вы можете отправить Брюса Уилиса и его команду на уничтожение астероидов
                  </StyledSubTitle>
               </StyledWrapperTitles>
               <StyledSorting props={this.props} paddingTop={'14px'}>
                  <StyledAsteroidNameTitle>
                     Корзина уничтожения
                  </StyledAsteroidNameTitle>
                  <StyledSortingWarning to='/' underline={'underline'}>
                     Все астероиды
                  </StyledSortingWarning>
               </StyledSorting>
            </StyledSectionWrapper>
            {emptyCart}
            {asteroidsToDestroy}
            <StyledButton marginBottom={'30px'} buttonShow={buttonShow}>
               Вызов Брюса Уилиса
            </StyledButton>
         </React.Fragment>
      )
   }
}

let mapStateToProps = (state) => {
   return {
      asteroidsToDestroy: state.asteroidsToDestroyPage.asteroidsToDestroy,
   };
};

export default connect(mapStateToProps, {})(ForDestruction);