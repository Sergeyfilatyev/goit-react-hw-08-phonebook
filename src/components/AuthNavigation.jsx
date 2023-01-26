import { Link } from 'react-router-dom';
export const AuthNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="register">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};
