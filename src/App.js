import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { FOODS } from './constants';
// components
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {
    backgroundQueue: new Array(2),
    footerIsOpen: false
  };

  // preload images
  componentDidMount = () => {
    FOODS.forEach(({ imgUrl }) => {
      const img = new Image();
      img.src = imgUrl;
    });
  }

  handleSelect = e => {
    const { imgUrl } = FOODS[e.target.value];
    const { backgroundQueue } = this.state;
    if (imgUrl !== backgroundQueue[1]) {
      // set prev bg "backgroundQueue[0]" and curr bg "backgroundQueue[1]"
      this.setState({ backgroundQueue: [backgroundQueue.pop(), imgUrl] });
    }
  };

  handleClose = () => {
    this.setState({ backgroundQueue: new Array(2) });
  };

  toggleFooter = () => {
    this.setState({ footerIsOpen: !this.state.footerIsOpen });
  };

  // 2 elements with food backgrounds
  renderFood = () => {
    const { backgroundQueue } = this.state;
    return FOODS.map((food, i) => <Food key={i} background={food.imgUrl} />)
      .filter(({ props }) => backgroundQueue.includes(props.background)) // prev and curr background only
      .sort(({ props }) => (backgroundQueue[1] === props.background ? 1 : -1)); // sort by most recent click for fade effect
  };

  renderMenu = () => {
    return (
      <MenuWrap>
        {FOODS.map(({ name }, i) => (
          <MenuItem key={i} onClick={this.handleSelect} value={i}>
            {name}
          </MenuItem>
        ))}
      </MenuWrap>
    );
  };

  render() {
    const { backgroundQueue, footerIsOpen } = this.state;
    return (
      <AppWrap footerIsOpen={footerIsOpen}>
        <Header
          handleClose={this.handleClose}
          background={backgroundQueue[1]}
          toggleFooter={this.toggleFooter} />
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
  position: fixed;
  width: 100%;
  height: 100%;
  background: url(${({ background }) => background}) center center/cover no-repeat;
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
