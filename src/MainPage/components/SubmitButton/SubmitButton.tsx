import React from 'react';
import styled from 'styled-components';

import { SubmitProps } from '../../interface';

const StyledSubmitButton = styled.button`
  background-color: #ffffff;
  width: 100%; ;
`;

class SubmitButton extends React.PureComponent<SubmitProps, {}> {
  render() {
    return (
      <StyledSubmitButton name="fontSize" onClick={this.props.handleApply}>
        Apply Changes
      </StyledSubmitButton>
    );
  }
}

export default SubmitButton;
