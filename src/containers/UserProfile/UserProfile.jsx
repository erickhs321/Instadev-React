import React from "react";
import User from "../../components/User";
import "./UserProfile.scss";

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <User
            userInfo={{
              avatar,
              name,
              username: "blackpanther",
              showUsername: true,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
