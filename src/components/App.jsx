import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Products } from '../pages/Products';
import { ProductDetails } from '../pages/ProductDetails';
import { Container, Header, Logo, StyledNavLink } from './App.styled';
// import { NotFound } from '../pages/NotFound';



export const App = () => {
  return (
    <Container>
      <Header>
        <Logo> figatix </Logo>
        <nav>
          <StyledNavLink to='/' end>Home</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <StyledNavLink to="/products">Products</StyledNavLink>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Container>
  );
};
