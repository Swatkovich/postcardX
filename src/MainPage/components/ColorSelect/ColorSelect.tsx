import React from 'react';
import styled from 'styled-components';

import { InputProps, InputState } from '../../interface';

const StyledColorSelect = styled.select`
  background-color: #ffffff;
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #e8ecf0;
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 400;
  font-family: Fira Sans;
  margin-bottom: 10px;
`;

class ColorSelect extends React.PureComponent<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('color') || (this.props.value as string),
    };
  }

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('color', event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <StyledColorSelect
        value={this.state.value}
        name="color"
        onChange={this.handleSelectChange}
      >
        <option value="#292929">#292929</option>
        <option value="#ff0066">#ff0066</option>
        <option value="#0066ff">#0066ff</option>
      </StyledColorSelect>
    );
  }
}

export default ColorSelect;
