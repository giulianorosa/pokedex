import styled from 'styled-components';
import { shade } from 'polished';

import pokeball from '../../assets/pokeball.svg';

interface ContainerProps {
  type: string;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${props => `var(--color-${props.type}-type-dark)`};

  .width_limit {
    max-width: 1200px;
    margin: 0 auto;
  }

  .icon_button {
    color: white;
    transition: color 0.2s;
    z-index: 1;

    &:hover {
      color: ${shade(0.2, 'white')};
    }

    #arrow_left_icon {
      font-size: 2.5rem;
    }

    #chevron_left_icon {
      margin-right: 1rem;
    }

    #chevron_right_icon {
      margin-left: 1rem;
    }
  }
`;

export const Nav = styled.nav`
  padding: 4rem 2rem 0 2rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;
  color: #fff;
  font-weight: bolder;
  font-size: 2.3rem;

  @media (max-width: 650px) {
    display: block;
    justify-content: center;
    padding: 2rem 2rem 0 2rem;
  }

  ul {
    display: flex;

    li {
      margin-right: 0.5rem;
    }
  }

  @media (max-width: 650px) {
    #infos {
      transform: translateY(1.5rem);
    }

    .icon_button {
      display: none;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-right: 3rem;
  }

  span {
    font-size: 2rem;
  }

  @media (max-width: 650px) {
    justify-content: space-between;

    h1 {
      font-size: 4rem;
    }
  }
`;

export const PokemonImage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  div#image-wrap {
    position: relative;
    width: 220px;
    height: 220px;
  }

  img#image-pokemon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  img#image-pokeball {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.4;
    transform: translate(60px, 0);

    @media (max-width: 650px) {
      transform: translate(60px, -60px);
    }
  }

  .icon_button {
    display: none;
  }

  @media (max-width: 650px) {
    transform: translateY(35px);

    .icon_button {
      display: inline;
    }
  }
`;

export const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;

  #firstLine {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin-bottom: 1rem;

    @media (max-width: 550px) {
      grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 650px) {
      padding-top: 2rem;
    }
  }
`;

export const VarietySection = styled.section`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  margin: 3rem auto;
  background: url(${pokeball}) no-repeat;
  background-size: contain;
  background-position: center;
  width: 10rem;
  height: 10rem;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
