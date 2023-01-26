import React from 'react';
import styled from 'styled-components';

import { InputProps, InputState } from '../../interface';

const StyledLetterSpacingInput = styled.input`
  background-color: #ffffff;
  width: 100%; ;
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
