import React from 'react'
import styled from 'styled-components'
import ErrorVector  from '../Images/ErrorVector.svg'
import { Link } from 'react-router-dom'

const Error = () => {
  return(
    <Wrapper>
      <img src={ErrorVector} alt="error-img" />
      <Link to="/" className="btn">
        back home
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
min-height: 100vh;
display: grid;
place-items: center;
background: var(--clr-primary-10);
text-align: center;
img {
  max-width: 600px;
}

`

export default Error