import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid gray;
  background-color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  transition: scale 200ms ease-in, color 200ms ease-in;

  &:hover:nth-of-type(1),
  &:focus:nth-of-type(1) {
    background-color: lightgreen;
    scale: 1.2;
  }

  &:hover:nth-of-type(2),
  &:focus:nth-of-type(2) {
    scale: 1.2;
  }

  &:hover:nth-of-type(3),
  &:focus:nth-of-type(3) {
    background-color: red;
    color: #fff;
    scale: 1.2;
  }
`;
