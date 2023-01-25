import { NavLink } from 'react-router-dom';
export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
        <li>
          <NavLink to="register">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="contacts">Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
};
