import React from 'react';
import styled from 'styled-components';

import { ReactComponent as FontSizeIcon } from '../../../assets/svg/font-size.svg';

import { InputProps, InputState } from '../../interface';

const StyledFontSizeInput = styled.input`
  background-color: #ffffff;
  height: 40px;
  width: 76px;
  border-radius: 0 4px 4px 0;
  border: 1px solid #e8ecf0;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 400;
  font-family: Fira Sans;
  padding-left: 36px;
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
      <>
        <FontSizeIcon
          style={{
            position: 'relative',
            alignSelf: 'center',
            left: '11px',
            marginRight: '-16px',
          }}
        />
        <StyledFontSizeInput
          name="fontSize"
          onChange={this.handleInputChange}
          value={this.state.value}
        />
      </>
    );
  }
}

export default FontSizeInput;
