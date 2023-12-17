import LoginForm from "./components/LoginForm";
import { Logo } from "./components/Logo";
import { Toolbar } from "./components/Toolbar";
import { AuthContext } from "./contexts/AuthContent";

export const Header = () => {
  return (
    <AuthContext.Consumer>
      {({ user, token }) => (
        <header className="header__neto">
          <Logo name="Neto Social" />
          {user !== null && token !== null ? <Toolbar /> : <LoginForm />}
        </header>
      )}
    </AuthContext.Consumer>
  );
};
