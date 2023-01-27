import React from 'react';
import styled from 'styled-components';

import { ReactComponent as VectorIcon } from '../../../assets/svg/vector.svg';

import { InputProps, InputState } from '../../interface';

const StyledFontSelectContainer = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  margin-bottom: 10px;
`;

const StyledFontSelect = styled.select`
  background-color: #ffffff;
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #e8ecf0;
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 400;
  font-family: Fira Sans;
  padding-left: 14px;
  padding-bottom: 1px;
  -webkit-appearance: none;
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
      <StyledFontSelectContainer>
        <StyledFontSelect
          value={this.state.value}
          name="font"
          onChange={this.handleSelectChange}
        >
          <option value="Fira Sans">Fira Sans</option>
          <option value="Segoe UI">Segoe UI</option>
        </StyledFontSelect>
        <VectorIcon
          style={{
            position: 'relative',
            top: '17px',
            right: '10px',
            marginLeft: '-9px',
          }}
        />
      </StyledFontSelectContainer>
    );
  }
}

export default FontSelect;
