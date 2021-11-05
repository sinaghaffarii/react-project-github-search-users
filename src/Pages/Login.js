import React from "react";
import Fingerprint from "../Images/Fingerprint.svg";
import styled from "styled-components";

const Login = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={Fingerprint} alt="Finger Print" />
        <h1>github user</h1>
        <button className="btn">login / sign in</button>
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
