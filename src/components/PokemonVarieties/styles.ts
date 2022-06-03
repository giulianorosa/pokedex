import styled from 'styled-components';

export const Select = styled.div`
  width: 30rem;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 650px) {
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 0px;
  }

  .select-selected {
    background-color: #313131;
  }

  .select-selected:after {
    position: absolute;
    content: '';
    top: 1.4rem;
    right: 1rem;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
  }

  .select-selected.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 0.7rem;
  }

  .select-items div,
  .select-selected {
    color: #ffffff;
    padding: 0.8rem 1.6rem;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
  }

  .select-items {
    margin-top: -3rem;
    width: 30rem;
    position: absolute;
    background-color: #616161;
    top: 100%;
    right: 0;
    z-index: 99;

    @media (max-width: 650px) {
      width: 100%;
    }
  }

  .select-hide {
    display: none;
  }

  .select-items div:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .select-items a {
    color: white;
    text-decoration: none;
  }
`;
