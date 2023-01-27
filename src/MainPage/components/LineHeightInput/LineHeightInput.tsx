import React from 'react';
import styled from 'styled-components';

import { InputProps, InputState } from '../../interface';

const StyledLineHeightInput = styled.input`
  background-color: #ffffff;
  height: 40px;
  width: 50%;
  border-radius: 4p 0 0 4px;
  border: 1px solid #e8ecf0;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 400;
  font-family: Fira Sans;
  margin-right: -1px;
`;

class LineHeightInput extends React.PureComponent<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('lineHeight') || (this.props.value as string),
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('lineHeight', event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <StyledLineHeightInput
        name="lineHeight"
        onChange={this.handleInputChange}
        value={this.state.value}
      />
    );
  }
}

export default LineHeightInput;
