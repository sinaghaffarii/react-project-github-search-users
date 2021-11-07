import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import ScaleLoader from "react-spinners/ScaleLoader";


const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return(
      <Wrapper>
          <ScaleLoader color={"#364F6B "} />
      </Wrapper>
    )
  }
  if (error) {
    return (
      <Wrapper>
        <h3>{error.message}</h3>
      </Wrapper>
    );
  }

  return <>{children}</>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default AuthWrapper;
