import { Banner } from "./components/Banner";
import { NewsFeed } from "./components/NewsFeed";
import { AuthContext } from "./contexts/AuthContent";

export const Main = () => {
  return (
    <AuthContext.Consumer>
      {({ user, token }) => (
        <main className="main__neto">
          <div className="main__container">{user && token ? <NewsFeed /> : <Banner title="Neto Social" description="Facebook and VK killer." />}</div>
        </main>
      )}
    </AuthContext.Consumer>
  );
};
