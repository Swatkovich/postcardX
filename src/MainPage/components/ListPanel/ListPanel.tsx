import React from 'react';
import styled from 'styled-components';

import List from '../List';
import { TextProps, TextState } from '../../interface';

const StyledListPanel = styled.div`
  background-color: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

class ListPanel extends React.PureComponent<TextProps, TextState> {
  render() {
    return (
      <StyledListPanel>
        <List
          text={this.props.text}
          font={this.props.font}
          fontWeight={this.props.fontWeight}
          fontSize={this.props.fontSize}
          color={this.props.color}
          lineHeight={this.props.lineHeight}
          letterSpacing={this.props.letterSpacing}
          textAlign={this.props.textAlign}
        />
      </StyledListPanel>
    );
  }
}

export default ListPanel;
