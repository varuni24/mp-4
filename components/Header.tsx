"use client";
import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 0 20px;
  background-color: #1976d2;
  color: white;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 64px;
  max-width: 1200px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Header() {
    return (
      <HeaderContainer>
          <HeaderContent>
              <Logo> Dog Breed Explorer </Logo>
              <Nav>
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/dogs">Dog Breeds</NavLink>
              </Nav>
          </HeaderContent>
      </HeaderContainer>
    );
}
