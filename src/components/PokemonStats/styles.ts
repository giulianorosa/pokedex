import styled from 'styled-components';

interface StatBarProps {
  percentage: number;
  type: string;
}

export const Container = styled.section`
  width: 100%;
  border-radius: 3rem;
  padding: 3rem;
  box-shadow: 0px 0px 1.5rem -0.5rem #595959;

  @media (max-width: 500px) {
    padding: 2rem;
  }

  table {
    width: 100%;
    table-layout: auto;
    margin-top: 1.5rem;

    td {
      padding: 1rem 0;
    }

    td.stat_name {
      font-weight: bold;
      color: grey;
    }

    td.stat_value {
      padding: 0 2rem;
      text-align: center;
      font-weight: bold;
      font-size: 1.8rem;
    }

    td.stat_bar {
      width: 100%;

      div.stat_bar_background {
        width: 100%;
        border-radius: 1rem;
        background-color: #e3e3e3;
      }
    }
  }
`;

export const StatBar = styled.div<StatBarProps>`
  border-radius: 1rem;
  background-color: ${props => `var(--color-${props.type}-type-dark)`};
  width: ${props => `${props.percentage}%`};
  height: 100%;
  color: ${props => `var(--color-${props.type}-type-dark)`};
`;
