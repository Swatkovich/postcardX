import React from 'react';
import styled from 'styled-components';

import Text from '../Text';
import { TextProps, TextState } from '../../interface';

const StyledList = styled.div`
  height: 720px;
  width: 600px;
  background-color: #ffffff;
  padding: 30px;
`;

export class List extends React.PureComponent<TextState, TextProps> {
  render() {
    return (
      <StyledList>
        <Text
          text={this.props.text}
          font={this.props.font}
          fontWeight={this.props.fontWeight}
          fontSize={this.props.fontSize}
          color={this.props.color}
          lineHeight={this.props.lineHeight}
          letterSpacing={this.props.letterSpacing}
          textAlign={this.props.textAlign}
        />
      </StyledList>
    );
  }
}

export default List;
