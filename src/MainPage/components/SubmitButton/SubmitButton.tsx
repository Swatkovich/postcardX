import React from 'react';
import styled from 'styled-components';

import { SubmitProps } from '../../interface';

const StyledSubmitButton = styled.button`
  width: 100%;
  height: 40px;
  color: #ffffff;
  background-color: #27ae60;
  border: none;
  border-radius: 4px;
  font-family: Fira sans;

  &:hover {
    background-color: #1f8b4c;
  }

  &:active {
    background-color: #157f37;
  }
`;

class SubmitButton extends React.PureComponent<SubmitProps, {}> {
  render() {
    return (
      <StyledSubmitButton name="fontSize" onClick={this.props.handleApply}>
        Apply Changes
      </StyledSubmitButton>
    );
  }
}

export default SubmitButton;
