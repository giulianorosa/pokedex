import styled from 'styled-components';

export const Container = styled.section`
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

    td.feature_name {
      font-weight: bold;
      color: grey;
      vertical-align: top;
    }

    td.feature_value {
      padding: 0 2rem;
      font-weight: bold;
      font-size: 1.8rem;
    }

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        margin-right: 0.5rem;
      }
    }
  }
`;
