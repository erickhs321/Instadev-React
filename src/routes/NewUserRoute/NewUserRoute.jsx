import React from "react";

import UserForm from "../../containers/UserForm";
import UserProfile from "../../containers/UserProfile";

const NewUserRoute = () => (
  <div data-testid="new-user-route">
    <UserProfile />
    <UserForm />
  </div>
);

export default NewUserRoute;
