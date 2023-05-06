import styled from 'styled-components';

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  /* display: flex;
  flex-direction: column;
  gap: 30px; */
  /* align-items: center; */
`;

export const Li = styled.li`
  display: flex;
  /* flex-direction: column; */
  /* gap: 30px; */
  /* align-items: center; */
  padding: 10px;

  :nth-child(2n-1) {
    background-color: #d4d4d4;
  }
`;

export const Name = styled.p`
  font-weight: bold;
  margin-right: 10px;
`;

export const Button = styled.button`
  width: 100px;
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

  margin-left: auto;

  :hover {
    background-color: #5ab1f8;
  }
`;
