import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { foods } from './constants';
// components
import AppBar from './components/AppBar';

class App extends Component {
  state = { background: '' };

  handleSelect = e => {
    const { imgUrl } = foods[e.target.value];
    this.setState({ background: imgUrl });
  };

  handleClose = () => {
    this.setState({ background: '' });
  };

  render() {
    const { background } = this.state;
    return (
      <AppWrap>
        <AppBar handleClose={this.handleClose} background={background} />
        <Food background={background} />
        <ul>
          {foods.map(({ name }, i) => {
            return (
              <MenuItem key={i} onClick={this.handleSelect} value={i}>
                {name.toUpperCase()}
              </MenuItem>
            );
          })}
        </ul>
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
  z-index: -1;
  background: url(${({ background }) => background}) no-repeat center center;
  background-size: cover;
  animation: ${fadeIn} 6s;
`;

const AppWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
