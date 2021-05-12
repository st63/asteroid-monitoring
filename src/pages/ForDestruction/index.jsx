import React from 'react';
import { connect } from "react-redux";
import AsteroidElement from '../../components/AsteroidElement';
import { SectionWrapper, Title, Sorting, SubTitle, SortingWarning, AsteroidNameTitle } from '../styles';
import { Button } from '../../styles';

class ForDestruction extends React.Component {

   render() {

      let buttonShow = 'inline';
      let emptyCart;

      if (this.props.asteroidsToDestroy.length === 0) {

         buttonShow = 'none';
         emptyCart = 'Корзина уничтожения пока пуста';
      }

      const asteroidsToDestroy = this.props.asteroidsToDestroy.map(asteroid => <AsteroidElement
         marginBottom={'70px'}
         buttonShow={'none'}
         padding={'25px'}
         key={asteroid.id}
         {...asteroid} />)

      return (
         <React.Fragment>
            <SectionWrapper props={this.props} marginBottom={'26px'} border={'1px solid black'}>
               <div>
                  <Title props={this.props}>
                     ARMAGGEDON V
                  </Title>
                  <SubTitle>
                     Здесь вы можете отправить Брюса Уилиса и его команду на уничтожение астероидов
                  </SubTitle>
               </div>
               <Sorting props={this.props} paddingTop={'14px'}>
                  <AsteroidNameTitle>
                     Корзина уничтожения
                  </AsteroidNameTitle>
                  <SortingWarning to='/' underline={'underline'}>
                     Все астероиды
                  </SortingWarning>
               </Sorting>
            </SectionWrapper>
            {emptyCart}
            {asteroidsToDestroy}
            <Button marginBottom={'30px'} buttonShow={buttonShow}>
               Вызов Брюса Уилиса
            </Button>
         </React.Fragment>
      )
   }
}

let mapStateToProps = (state) => {

   return {
      asteroidsToDestroy: state.asteroidElement.asteroidsToDestroy,
   };
};

export default connect(mapStateToProps, {})(ForDestruction);