import React from 'react';
import styled from 'styled-components';

import { InputProps, InputState } from '../../interface';

const StyledFontSizeInput = styled.input`
  background-color: #ffffff;
  width: 100%; ;
`;

class FontSizeInput extends React.PureComponent<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('fontSize') || (this.props.value as string),
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('fontSize', event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <StyledFontSizeInput
        name="fontSize"
        onChange={this.handleInputChange}
        value={this.state.value}
      />
    );
  }
}

export default FontSizeInput;
