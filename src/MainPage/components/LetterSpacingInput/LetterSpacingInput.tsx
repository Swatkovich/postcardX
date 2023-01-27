import React from 'react';
import styled from 'styled-components';

import { InputProps, InputState } from '../../interface';

const StyledLetterSpacingInput = styled.input`
  background-color: #ffffff;
  height: 40px;
  width: 50%;
  border-radius: 0 4px 4px 0;
  border: 1px solid #e8ecf0;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 400;
  font-family: Fira Sans;
`;

class LetterSpacingInput extends React.PureComponent<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      value:
        localStorage.getItem('letterSpacing') || (this.props.value as string),
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('letterSpacing', event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <StyledLetterSpacingInput
        name="letterSpacing"
        onChange={this.handleInputChange}
        value={this.state.value}
      />
    );
  }
}

export default LetterSpacingInput;
