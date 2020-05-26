import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import FeedRoute from "./FeedRoute";
import UsersRoute from "./UsersRoute";
import ProfileRoute from "./ProfileRoute";
import NewUserRoute from "./NewUserRoute";
import TopBar from "../components/Topbar/";
const Routes = () => (
  <Switch>
    <Route exact path="/">
      <TopBar />
      <FeedRoute />
    </Route>

    <Route exact path="/users">
      <TopBar />
      <UsersRoute />
    </Route>

    <Route path="/users/:username">
      <TopBar />
      <ProfileRoute />
    </Route>

    <Route path="/newuser">
      <TopBar />
      <NewUserRoute />
    </Route>
  </Switch>
);

export default Routes;
