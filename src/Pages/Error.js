import React from "react";
import styled from "styled-components";
import ErrorVector from "../Images/ErrorVector.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={ErrorVector} alt="error-img" />
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
    height: 400px;
  }
  .btn {
    margin-bottom: 1.5rem;
  }
`;

export default Error;
