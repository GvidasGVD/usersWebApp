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
        <Route path="/usersWebApp/users" exact>
          <Redirect to="/usersWebApp" />
        </Route>
        <Route path="/usersWebApp" exact>
          <AllUsers />
        </Route>
        <Route path="/usersWebApp/users/:userId">
          <UserDetail />
        </Route>
        <Route path="/usersWebApp/new-user">
          <NewUser />
        </Route>
        <Route path="/usersWebApp/usersWebApp" exact>
          <Redirect to="/usersWebApp/users" />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
