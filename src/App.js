import { Route, Switch, Redirect } from "react-router-dom";
import AllUsers from "./pages/AllUsers";
import NewUser from "./pages/NewUser";
import UserDetail from "./pages/UserDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/users" />
        </Route>
        <Route path="/users" exact>
          <AllUsers />
        </Route>
        <Route path="/users/:userId">
          <UserDetail />
        </Route>
        <Route path="/new-user">
          <NewUser />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
