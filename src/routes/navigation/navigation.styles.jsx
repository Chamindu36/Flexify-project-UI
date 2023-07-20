import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Title = styled.h1`
    padding: -25px;
    align - items: left;
    justify - content: flex - start;
`

export const LogoContainer = styled(Link)`
    height: 100 %;
    width: 70px;
    padding: 25px;
`;

export const NavLinks = styled.div`
    width: 50 %;
    height: 100 %;
    display: flex;
    align - items: center;
    justify - content: flex - end;
`;

export const NavLink = styled(Link)`
    padding: 25px 15px;
    cursor: pointer;
`;