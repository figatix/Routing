import { Outlet } from "react-router-dom";
import { Container, Header, Logo, StyledNavLink } from "./App.styled";

export const SharedLayout = () => {
  return (

    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          figatix
        </Logo>
        <nav>
          <StyledNavLink to='/' >Home</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <StyledNavLink to="/products">Products</StyledNavLink>
        </nav>
      </Header>

      <Outlet />
    </Container>
  )
}