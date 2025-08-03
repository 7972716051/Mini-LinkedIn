import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/">Home</Link> |{' '}
      <Link to="/feed">Feed</Link> |{' '}
      <Link to="/profile">Profile</Link> |{' '}
      <Link to="/login">Login</Link> |{' '}
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;
