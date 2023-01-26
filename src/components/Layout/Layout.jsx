import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { AuthUserMenu } from 'components/AuthUserMenu/AuthUserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';
export const Layout = () => {
  const token = useSelector(selectToken);
  return (
    <>
      <header>
        <Navigation />
        {token ? <AuthUserMenu /> : <AuthNavigation />}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Phonebook by SergeyFilatyev </footer>
    </>
  );
};
