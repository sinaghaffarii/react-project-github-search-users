import React from "react";
import Fingerprint from "../Images/Fingerprint.svg";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
    return (
    <Wrapper>
      <div className="container">
        <img src={Fingerprint} alt="Finger Print" />
        <h1>github user</h1>
       <button className='btn' onClick={loginWithRedirect}>
          Log In / Sign Up
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    height: 400px;
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;

export default Login;
