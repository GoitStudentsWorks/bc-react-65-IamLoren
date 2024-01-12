import React, { useEffect, useState } from 'react';
import {
  CurrencyTable,
  CurrencyTbody,
  CurrencyThead,
  HigherRate,
  LowerRate,
  StyledGraphBox,
} from './CurrencyStyled';
import { useDispatch, useSelector } from 'react-redux';
import { currencySelector } from '../../../redux/selectors.js';
import { currencyThunk } from '../../../redux/currency/operations.js';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const dispatch = useDispatch();
  const todayCurrency = useSelector(currencySelector);

  useEffect(() => {
    dispatch(currencyThunk());
    setCurrency(todayCurrency);
  }, [dispatch, todayCurrency]);

  return (
    <>
      <CurrencyTable>
        <CurrencyThead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </CurrencyThead>
        <CurrencyTbody>
          {currency.map(item => {
            console.log('item', item);
            return (
              <tr key={crypto.randomUUID()}>
                <td>{item.currencyType}</td>
                <td>{item.rateBuy}</td>
                <td>{item.rateSell.toString().slice(0, -2)}</td>
              </tr>
            );
          })}
        </CurrencyTbody>
      </CurrencyTable>

      <StyledGraphBox>
        {currency?.map(item => {
          if (item.currencyCodeA === 840) {
            return (
              <LowerRate key={crypto.randomUUID()}>{item.rateBuy}</LowerRate>
            );
          }
          return [];
        })}

        {currency?.map(item => {
          if (item.currencyCodeA === 978) {
            return (
              <HigherRate key={crypto.randomUUID()}>{item.rateBuy}</HigherRate>
            );
          }
          return [];
        })}
      </StyledGraphBox>
    </>
  );
};

export default Currency;
