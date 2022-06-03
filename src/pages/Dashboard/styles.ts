import styled from 'styled-components';
import { shade } from 'polished';

import pokeball from '../../assets/pokeball.svg';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;

  @media (max-width: 700px) {
    display: block;
    margin: 0 1.5rem 3rem 1.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 4.8rem;
  color: #000000;

  @media (max-width: 700px) {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const PokemonList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MorePokemonArea = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2.3rem 0;

  button {
    padding: 1.6rem 2rem;
    font-weight: bold;
    color: white;
    background-color: #30a7d7;
    border-radius: 0.5rem;
    border: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#30a7d7')};
    }
  }
`;

export const Loader = styled.div`
  margin: 3rem auto;
  background: url(${pokeball}) no-repeat;
  background-size: contain;
  background-position: center;
  width: 5rem;
  height: 5rem;
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

export const Form = styled.form`
  input {
    padding: 1rem 2rem;
    font-size: 1.7rem;
    border: 1px solid white;
    border-right: none;
    float: left;
    width: 80%;
    background: #f1f1f1;
    border-radius: 2rem 0 0 2rem;
  }

  button {
    float: left;
    width: 20%;
    padding: 1rem;
    color: white;
    font-size: 1.7rem;
    border: 1px solid white;
    border-left: none;
    border-radius: 0 2rem 2rem 0;
    background-color: #30a7d7;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: ${shade(0.2, '#30a7d7')};
  }

  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;

export const NoMatchingAlert = styled.form`
  width: 100%;
  border: 2px solid red;
  border-radius: 2rem;
  padding: 1rem;

  h3 {
    color: red;
    font-weight: normal;
    text-align: center;
  }
`;
