import React from 'react';
import styled from 'styled-components';

import { ReactComponent as VectorIcon } from '../../../assets/svg/vector.svg';

import { InputProps, InputState } from '../../interface';

const StyledFontWeightSelect = styled.select`
  background-color: #ffffff;
  height: 40px;
  width: 135px;
  border-radius: 4px 0 0 4px;
  border: 1px solid #e8ecf0;
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 400;
  font-family: Fira Sans;
  margin-right: -1px;
  padding-left: 14px;
  padding-bottom: 1px;
  -webkit-appearance: none;
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
      <>
        <StyledFontWeightSelect
          value={this.state.value}
          name="fontWeight"
          onChange={this.handleSelectChange}
        >
          <option value="Bold">Bold</option>
          <option value="Normal">Normal</option>
        </StyledFontWeightSelect>
        <VectorIcon
          style={{
            position: 'relative',
            top: '18px',
            right: '11px',
            marginLeft: '-9px',
          }}
        />
      </>
    );
  }
}

export default FontWeightSelect;
