import styled from 'styled-components';

interface PokemonType {
  type: string;
}

export const Type = styled.li<PokemonType>`
  list-style-type: none;
  border-radius: 2rem;
  list-style-type: none;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bolder;
  text-align: center;
  padding: 0.8rem 2rem;
  margin-bottom: 1rem;
  transform: translateY(1rem);
  background-color: ${props => `var(--color-${props.type}-type-light)`};

  @media (max-width: 500px) {
    padding: 0.3rem 1.5rem;
    font-size: 1.2rem;
  }
`;
