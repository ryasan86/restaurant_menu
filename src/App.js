import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { FOODS } from './constants';
// components
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = { background: '', prevBackground: '', backgroundQueue: new Array(2), footerIsOpen: false };

  handleSelect = e => {
    const { imgUrl } = FOODS[e.target.value];
    if (imgUrl !== this.state.background) {
      this.setBGs(imgUrl);
    }
  };

  handleClose = () => {
    this.setState({ background: '', prevBackground: '' });
  };

  setBGs = bg => {
    const { background } = this.state;
    background
      ? this.setState({ background: bg, prevBackground: background })
      : this.setState({ background: bg });
  };

  toggleFooter = () => {
    this.setState({ footerIsOpen: !this.state.footerIsOpen });
  };

  renderFood = () => {
    const { background, prevBackground } = this.state;
    return FOODS.map((food, i) => <Food key={i} background={food.imgUrl} />)
      .filter(
        ({ props }) =>
          props.background === background || props.background === prevBackground
      )
      .sort(({ props }) => {
        return background === props.background ? 1 : -1;
      });
  };

  renderMenu = () => {
    return (
      <MenuWrap>
        {FOODS.map(({ name }, i) => (
          <MenuItem key={i} onClick={this.handleSelect} value={i}>
            {name.toUpperCase()}
          </MenuItem>
        ))}
      </MenuWrap>
    );
  };

  render() {
    const { background, footerIsOpen } = this.state;
    return (
      <AppWrap footerIsOpen={footerIsOpen}>
        <Header
          handleClose={this.handleClose}
          background={background}
          toggleFooter={this.toggleFooter}
        />
        {this.renderFood()}
        {this.renderMenu()}
        <Footer footerIsOpen={footerIsOpen} />
      </AppWrap>
    );
  }
}

const fadeIn = keyframes`
  from { opacity: 0; }
    to { opacity: 1; }
`;

const Food = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${({ background }) => background}) no-repeat;
  background-position: center center;
  background-size: cover;
  animation: ${fadeIn} 0.7s ease-in-out;
  -webkit-animation: ${fadeIn} 0.7s ease-in-out;
  -moz-animation: ${fadeIn} 0.7s ease-in-out;
  -o-animation: ${fadeIn} 0.7s ease-in-out;
`;

const AppWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuWrap = styled.ul`
  z-index: 1;
`;

const MenuItem = styled.li`
  list-style: none;
  color: #fff;
  font-size: 2em;
  font-weight: 100;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 3px #fff;
  }
`;

export default App;
