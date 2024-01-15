import styled from 'styled-components';

export const Container = styled.div`
  align-items: right;
  width: 715px;
  margin-top: 32px;
  @media (max-width: 1279px) {
    width: 704px;
    margin-top: 20px;
  }
  @media (min-width: 1280px) {
    margin-top: 46px;
  }
`;

export const TransactionTable = styled.table`
  width: 100%;
  height: 308px;
  background: transparent;
  border-collapse: collapse;
`;

export const TransactionThead = styled.thead`
  text-align: left;
  background: rgba(82, 59, 126, 0.6);
  color: var(--expenses-color);
  font-family: 'Poppins Regular';
  font-size: 16px;
  font-weight: 600;
  display: table-header-group;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0;
  height: 56px;
  th {
    border: 0;
    border: none;
    padding: 15.5px 20px;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  th:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  th:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  th:nth-child(2) {
    text-align: center;
  }
  th:nth-child(5) {
    text-align: right;
  }
`;

export const TransactionTbody = styled.tbody`
  text-align: left;
  tr {
    background: transparent;
    height: 53px;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.41);
  }
  tr:last-child {
    border-bottom: none;
  }
  td {
    border: 0;
    border: none;
    padding: 0px 20px;
    color: var(--white);
    font-family: 'Poppins Regular';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 1;
  }
  td:nth-child(2) {
    text-align: center;
  }
  td:nth-child(5) {
    text-align: right;
  }
  td:nth-child(6) {
    text-align: right;
  }
`;

export const WrapperList = styled.div`
  width: 100%;
  height: 320px;
  background: transparent;

  @media screen and (min-width: 480px) {
    height: 320px;
    backdrop-filter: blur(56px);
  }

  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #BFB4DD;
    border-radius: 12px;
  }
  &.scrollable {
    overflow-y: scroll;
  }
`;
