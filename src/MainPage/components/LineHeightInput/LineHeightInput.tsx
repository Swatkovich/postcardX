import React from 'react';
import styled from 'styled-components';

import { InputProps, InputState } from '../../interface';

const StyledLineHeightInput = styled.input`
  background-color: #ffffff;
  width: 100%; ;
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
