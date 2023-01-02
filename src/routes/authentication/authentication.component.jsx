import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";
import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const Authentication = () => {
  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    return <Navigate to={"/shop"} replace />;
  } else {
    return (
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    );
  }
};

export default Authentication;
