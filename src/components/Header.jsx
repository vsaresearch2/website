import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './everett-college-logo-2.jpg'

import '@atlaskit/css-reset';

// double check all the divs and mixing Bootstrap with styled components
// maybe just use bootstrap for everything no the schedule
const Container = styled.div`
  margin-top: 100px;
`;

const Image = styled.img`
  height: 70px;
  float: left;
  padding-right: 20px;
`;

const Header1 = styled.h1`
  color: white;
  position: relative;
  float: left;
  text-align: center;
`;

export default function Header() {
  return (
    <Container>
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <div>
          <Link to='/preferences'>
            <Image src={Logo} />
          </Link>
          <Header1> Academic Planner</Header1>
        </div>
      </nav>
    </Container>
  );
}
