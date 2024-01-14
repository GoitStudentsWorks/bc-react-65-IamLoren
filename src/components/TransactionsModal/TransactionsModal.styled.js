import styled from 'styled-components';
import BgModalTransaction from '../../img/Bg-trans-modal-desc.webp';

export const StyledTransactionsModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--modal-backdrop);
  backdrop-filter: blur(3.5px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const StyledModalTransaction = styled.div`
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 4px 60px 0px var(--modal-shadow);
  backdrop-filter: blur(50px);
  background: var(--modal-background);
  background-image: url('${BgModalTransaction}');
  background-size: 130% 130%;
  background-position: center;
  width: 540px;
  min-height: 589px;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: var(--white);
    text-align: center;
    font-family: 'Poppins Regular';
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 40px;
  }
  button {
    border: none;
    cursor: pointer;
  }
`;
export const StyledModalToggle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  p {
    font-family: 'Poppins Regular';
    font-size: 16px;
    font-weight: 600;
  }
`;
export const StyledIncomeActive = styled.p`
  color: var(--income-color);
`;
export const StyledExpenseActive = styled.p`
  color: var(--expenses-color);
`;
export const StyledDisabled = styled.p`
  color: var(--disabled-toggle);
`;
export const StyledModalCloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: none;
  outline: transparent;
  color: var(--white);
`;
export const StyledModalBody = styled.form`
  gap: 40px;
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const StyledTransactionModalSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
export const StyledTransactionAmount = styled.input`
  /* -webkit-appearance: none; */
  /* -moz-appearance: textfield; */
  width: 181px;
  height:35px;
  text-align: center;
  background-color: transparent;
  color: var(--white);
  font-family: 'Poppins SemiBold';
  outline: transparent;
  border: none;
  font-size: 18px;
  border-bottom: 1px solid var(--modal-input-underline);
  padding-bottom: 8px;
  &::placeholder {
    color: var(--text-forms);
    font-family: 'Poppins Bold';
    font-size: 18px;
  }
  &:hover {
    color: var(--white);
    font-family: 'Poppins SemiBold';
  }
  /* input::-webkit-input-placeholder {
    color: var(--white);
  } */
`;

export const StyledTransactionComment = styled.textarea`
  width: 394px;
  height: 35px;
  background-color: transparent;
  font-family: 'Poppins Regular';
  font-size: 18px;
  border: none;
  color: var(--white);
  border-bottom: 1px solid var(--modal-input-underline);
  outline: transparent;
  /* resize: vertical; */
  &::placeholder {
    margin-bottom: 8px;
    color: var(--text-forms);
  }
  &:hover {
    color: var(--white);
  }
`;
export const StyledTransactionButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const AddTransactionButton = styled.button`
  padding: 13px 10px;
  width: 300px;
  height: 50px;
  border-radius: 20px;
  background: var(--modal-button-gradient);
  text-align: center;
  color: var(--modal-accent-white);
  box-shadow: 1px 9px 15px 0px var(--modal-button-shadow);
  font-family: 'Poppins Regular';
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.8s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
export const CancelTransactionButton = styled.button`
  padding: 13px 10px;
  width: 300px;
  height: 50px;
  border-radius: 20px;
  background: var(--modal-accent-white);
  text-align: center;
  color: var(--text-button);
  box-shadow: 1px 9px 15px 0px var(--modal-button-shadow);
  font-family: 'Poppins Regular';
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.8s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

// export const StyledModalArrowDown = styled.div`
//   svg {
//     fill: red;
//   }
// `;
