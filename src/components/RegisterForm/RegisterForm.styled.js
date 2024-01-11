import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 533px;
  max-height: 624px;
  padding: 40px 62px;

  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  /* backdrop-filter: blur(50px); */

  h1 {
    color: rgba(251, 251, 251, 1);
    font-size: 26.963px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
`;

export const InputBox = styled.div`
  position: relative;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;