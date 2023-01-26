import React from 'react';
import styled from 'styled-components';

import { InputProps, InputState } from '../../interface';

const StyledFontWeightSelect = styled.select`
  background-color: #ffffff;
  width: 100%; ;
`;

class FontWeightSelect extends React.PureComponent<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('fontWeight') || (this.props.value as string),
    };
  }

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('fontWeight', event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <StyledFontWeightSelect
        value={this.state.value}
        name="fontWeight"
        onChange={this.handleSelectChange}
      >
        <option value="Bold">Bold</option>
        <option value="Normal">Normal</option>
      </StyledFontWeightSelect>
    );
  }
}

export default FontWeightSelect;
