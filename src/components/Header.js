import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { GITHUB, CLOSE, BURGER_MENU } from '../images';
import { GITHUB_REPO_URL } from '../constants';
// components
import { Logo } from './common';

class Header extends Component {
  handleClose = () => {
    this.props.handleClose('');
  };

  renderClose = () => {
    const logo = <CloseIcon src={CLOSE} onClick={this.handleClose} />;
    return this.props.background ? logo : <div />;
  };

  render = () => {
    return (
      <StyledHeader>
        <Logo src={BURGER_MENU} onClick={this.props.toggleFooter} />
        <a href={GITHUB_REPO_URL}>
          <GithubIcon src={GITHUB} />
        </a>
        {this.renderClose()}
      </StyledHeader>
    );
  };
}

const StyledHeader = styled.div`
  z-index: 1;
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

const spin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(720deg) }
`;

const CloseIcon = styled(Logo)`
  animation: ${spin} 1s ease-out;
  -webkit-animation: ${spin} 1s ease-out;
  -moz-animation: ${spin} 1s ease-out;
  -o-animation: ${spin} 1s ease-out;
`;

const GithubIcon = styled(Logo)`
  &:hover {
    animation: ${wobble} 1s;
  }
`;

export default Header;
