import React from "react";
import styled from "styled-components";
import Head from "next/head";

function Login() {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src="https://i.pinimg.com/originals/98/c5/d8/98c5d85f82ff7d367387457ede631f9a.png" />
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div``;

const LoginContainer = styled.div``;

const Logo = styled.img``;
