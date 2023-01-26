import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selectors';

export const AuthUserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <>
      <p>{`${name}!`}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
};
