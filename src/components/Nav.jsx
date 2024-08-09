import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Catálogo</Link>
      <Link to="/cart">Carrinho</Link>
    </nav>
  );
};

export default Nav;
