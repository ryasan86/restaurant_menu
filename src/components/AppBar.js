import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { GITHUB, CLOSE, BURGER_MENU } from './../images';
import { GITHUB_REPO_URL } from './../constants';
// components
import { Logo } from './common';

class AppBar extends Component {
  handleClose = () => {
    this.props.handleClose('');
  };

  renderClose = () => {
    const logo = <Logo src={CLOSE} onClick={this.handleClose} />;
    return this.props.background ? logo : <div />;
  };

  render = () => {
    return (
      <StyledAppBar>
        <Logo src={BURGER_MENU} />
        <a href={GITHUB_REPO_URL}>
          <GithubLogo src={GITHUB} />
        </a>
        {this.renderClose()}
      </StyledAppBar>
    );
  };
}

const StyledAppBar = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
`;

const wobble = keyframes`
  0% { transform: rotate(0deg) }
  25% { transform: rotate(-30deg) }
  50% { transform: rotate(30deg) }
  75% { transform: rotate(-30deg) }
  100% { transform: rotate(0deg) }
`;

const GithubLogo = styled(Logo)`
  &:hover {
    animation: ${wobble} 1s;
  }
`;

export default AppBar;
