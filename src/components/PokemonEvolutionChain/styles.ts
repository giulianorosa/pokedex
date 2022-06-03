import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  border-radius: 3rem;
  padding: 3rem;
  box-shadow: 0px 0px 1.5rem -0.5rem #595959;
  margin-top: 2rem;
`;

export const EvoluationsWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;

  @media (max-width: 850px) {
    flex-direction: column;
  }

  .arrow_right_icon {
    font-size: 5rem;
    color: grey;
    align-self: center;

    @media (max-width: 850px) {
      transform: rotate(90deg);
      margin-top: 2rem;
    }
  }
`;

export const Stage = styled.div`
  align-self: center;

  display: grid;
  grid-gap: 1rem;

  &#firstStage {
    display: inline;
  }

  &.evolves1 {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }

  &.evolves2 {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(1, 1fr);

    @media (max-width: 850px) {
      grid-template-rows: repeat(1, 1fr);
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &.evolves3 {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 850px) {
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &.evolves8 {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1110px) {
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const Evolution = styled.div`
  text-align: center;
  float: left;
  padding: 0.5rem;
  transition: 0.5s;

  &:hover {
    transform: translate(0, -1rem);
    cursor: pointer;
  }

  img {
    width: 20rem;

    @media (max-width: 850px) {
      width: 55%;
    }
  }
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  h3 {
    margin-right: 1rem;
    color: black;
  }

  span {
    font-weight: 900;
    font-size: 1.8rem;
    opacity: 0.5;
    color: black;
  }
`;
