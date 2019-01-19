import React from 'react';
import styled from 'styled-components';
// components
import { Logo } from './common';
import { INSTAGRAM, FACEBOOK, YELP } from './../images';

const Footer = ({ footerIsOpen }) => (
  <FooterWrap footerIsOpen={footerIsOpen}>
    <FooterContent>
      <FooterText>GRUB PUB</FooterText>
      <FooterText>467 CREEKSIDE LANE LOS ANGELES CA</FooterText>
      <FooterText>INQUIRIES: 805-624-6561</FooterText>
      <FooterText>FOLLOW US ON:</FooterText>
      <LogoContainer>
        <Logo src={FACEBOOK} /> &nbsp;
        <Logo src={INSTAGRAM} /> &nbsp;
        <Logo src={YELP} />
      </LogoContainer>
    </FooterContent>
  </FooterWrap>
);

const FooterWrap = styled.div`
  background: ${({ theme }) => theme.color.darkGray};
  z-index: 1;
  position: fixed;
  bottom: 0;
  height: ${({ footerIsOpen }) => (footerIsOpen ? '30vh' : '0')};
  width: 100%;
  margin-top: 30vh;
  overflow-x: auto;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  margin: 7px 0 7px 0;
`;

const FooterContent = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 100;
  letter-spacing: 2px;
`;

const FooterText = styled.p`
  margin: 2px 0 2px 0;
`;

export default Footer;
