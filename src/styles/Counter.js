import styled from 'styled-components';

const Button = styled.button`
  appearance: none;
  border: 0;
  border-radius: 0.25rem;
  color: #fff;
  font-family: inherit;
  font-size: 1.25rem;
  margin: 0.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  user-select: none;

  background: ${ (props) => (props.positive ? '#0f0' : '#f00') };

  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const CounterValue = styled.strong`
  display: block;
  font-size:  3rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export default {
  Button,
  ButtonRow,
  CounterValue,
};
