import React from 'react';
import { connect } from 'react-redux';
import AsteroidElement from '../../components/AsteroidElement';
import {
  SectionWrapper, Title, Sorting, SubTitle, SortingWarning, AsteroidNameTitle,
} from '../styles';
import { Button } from '../../styles';

const ForDestruction = (props) => {
  const { asteroidsToDestroy } = props;
  let buttonShow = 'inline';
  let emptyCart;

  if (asteroidsToDestroy.length === 0) {
    buttonShow = 'none';
    emptyCart = 'Корзина уничтожения пока пуста';
  }

  const asteroidsToDestroyLocal = asteroidsToDestroy.map((asteroid) => (
    <AsteroidElement
      marginBottom="70px"
      buttonShow="none"
      padding="25px"
      key={asteroid.id}
      {...asteroid}
    />
  ));

  return (
    <>
      <SectionWrapper props={props} marginBottom="26px" border="1px solid black">
        <div>
          <Title props={props}>
            ARMAGGEDON V
          </Title>
          <SubTitle>
            Здесь вы можете отправить Брюса Уилиса и его команду на уничтожение астероидов
          </SubTitle>
        </div>
        <Sorting props={props} paddingTop="14px">
          <AsteroidNameTitle>
            Корзина уничтожения
          </AsteroidNameTitle>
          <SortingWarning to="/" underline="underline">
            Все астероиды
          </SortingWarning>
        </Sorting>
      </SectionWrapper>
      {emptyCart}
      {asteroidsToDestroyLocal}
      <Button marginBottom="30px" buttonShow={buttonShow}>
        Вызов Брюса Уилиса
      </Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  asteroidsToDestroy: state.asteroidElement.asteroidsToDestroy,
});

export default connect(mapStateToProps, {})(ForDestruction);
