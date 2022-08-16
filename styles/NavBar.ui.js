import styled from "styled-components";

export const NavBarContainer = styled.nav`
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 16px;
  background-color: green;
  margin: 10px auto;
  border-radius: 10px;
  position: sticky;
  top: 10px;
`;

export const NavBarGroup = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBarItem = styled.span`
  position: relative;
  padding: 10px;
  color: white;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const NavBarLogo = styled.span`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 48%;
`;

export const NavBarSubItems = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  background-color: red;
  width: 200px;
  padding: 10px;
  display: none;
  border: 1px solid black;
`;
