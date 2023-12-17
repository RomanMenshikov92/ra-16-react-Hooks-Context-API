import React from "react";
import { AuthContext } from "./contexts/AuthContent";
import { useAuth } from "./hooks/useAuth";
import { Header } from "./Header";
import { Main } from "./Main";
import "./styles/reset.css";
import "./styles/authentication.css";

export const AuthenticationPage: React.FC = () => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      <div className="neto">
        <Header></Header>
        <Main></Main>
      </div>
    </AuthContext.Provider>
  );
};

export default AuthenticationPage;
