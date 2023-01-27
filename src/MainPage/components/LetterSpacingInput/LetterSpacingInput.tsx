import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LetterSpacingIcon } from '../../../assets/svg/letter-spacing.svg';
import { ReactComponent as PxIcon } from '../../../assets/svg/px.svg';

import { InputProps, InputState } from '../../interface';

const StyledLetterSpacingInput = styled.input`
  background-color: #ffffff;
  height: 40px;
  width: 50%;
  border-radius: 0 4px 4px 0;
  border: 1px solid #e8ecf0;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 400;
  font-family: Fira Sans;
  padding-left: 35px;
  margin-left: -1px;
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
      <>
        <LetterSpacingIcon
          style={{
            position: 'relative',
            alignSelf: 'center',
            left: '9px',
            marginRight: '-16px',
          }}
        />
        <StyledLetterSpacingInput
          name="letterSpacing"
          onChange={this.handleInputChange}
          value={this.state.value}
        />
        <PxIcon
          style={{
            position: 'relative',
            top: '17px',
            right: '11px',
            marginLeft: '-12px',
          }}
        />
      </>
    );
  }
}

export default LetterSpacingInput;
