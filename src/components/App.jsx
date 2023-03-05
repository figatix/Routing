import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Products } from '../pages/Products';
import { ProductDetails } from '../pages/ProductDetails';
// import { NotFound } from '../pages/NotFound';
import styled from 'styled-components';


export const App = () => {
  return (
    <div>

      <nav>
        <SlyledNavLink to='/' end>Home</SlyledNavLink>
        <SlyledNavLink to="/about">About</SlyledNavLink>
        <SlyledNavLink to="/products">Products</SlyledNavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};


const SlyledNavLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`