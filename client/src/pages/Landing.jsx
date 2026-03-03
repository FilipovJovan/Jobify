import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> apps
          </h1>
          <p>
            Ea duis exercitation ad consequat consectetur fugiat mollit
            cupidatat. Magna commodo eu cillum eiusmod reprehenderit ullamco ut
            dolore est. Sit voluptate velit cupidatat irure do sunt est cillum.
            Velit reprehenderit dolore nisi eu exercitation ad sunt. Nulla velit
            esse quis amet ipsum veniam velit Lorem reprehenderit sint. Officia
            voluptate elit dolor Lorem et labore occaecat in cupidatat in duis
            incididunt nostrud deserunt. Commodo nostrud eu cillum occaecat
            consectetur est enim cupidatat aliqua adipisicing.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
