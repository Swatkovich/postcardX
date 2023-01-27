import React from 'react';
import styled from 'styled-components';

import { ReactComponent as VectorIcon } from '../../../assets/svg/vector.svg';

import { InputProps, InputState } from '../../interface';

const StyledColorSelectContainer = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  margin-bottom: 10px;
`;

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
  padding-left: 39px;
  padding-bottom: 1px;
  -webkit-appearance: none;
`;

const StyledColorIndicator = styled.div`
  position: relative;
  align-self: center;
  left: 12px;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  background-color: ${(props) => props.color};
  margin-right: -18px;
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
      <StyledColorSelectContainer>
        <StyledColorIndicator color={this.state.value} />
        <StyledColorSelect
          value={this.state.value}
          name="color"
          onChange={this.handleSelectChange}
          color={this.props.value}
        >
          <option value="#292929">#292929</option>
          <option value="#ff0066">#ff0066</option>
          <option value="#0066ff">#0066ff</option>
        </StyledColorSelect>
        <VectorIcon
          style={{
            position: 'relative',
            top: '17px',
            right: '10px',
            marginLeft: '-9px',
          }}
        />
      </StyledColorSelectContainer>
    );
  }
}

export default ColorSelect;
