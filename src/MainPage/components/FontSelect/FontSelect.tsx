import React from 'react';
import styled from 'styled-components';

import { InputProps, InputState } from '../../interface';

const StyledFontSelect = styled.select`
  background-color: #ffffff;
  width: 100%; ;
`;

class FontSelect extends React.PureComponent<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('font') || (this.props.value as string),
    };
  }

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('font', event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <StyledFontSelect
        value={this.state.value}
        name="font"
        onChange={this.handleSelectChange}
      >
        <option value="Fira Sans">Fira Sans</option>
        <option value="Segoe UI">Segoe UI</option>
      </StyledFontSelect>
    );
  }
}

export default FontSelect;
