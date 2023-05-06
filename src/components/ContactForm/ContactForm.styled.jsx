import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* align-items: center; */
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 10px;
  width: 200px;
  height: 20px;
  /* border: none;
  outline: none; */
  /* outline: 2px solid tomato; */

  padding: 10px;
  border: 1px solid rgba(33, 33, 33, 0.2);
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;

  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border-width: 0;

  font-weight: 700;
  font-size: 16px;
  line-height: calc(30 / 16);

  display: flex;
  align-items: center;
  justify-content: center;

  letter-spacing: 0.06em;

  color: #ffffff;

  cursor: pointer;

  transition: background-color 250ms linear;

  align-self: center;

  :hover {
    background-color: #5ab1f8;
  }
`;
