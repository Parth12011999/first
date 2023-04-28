import React from "react";
import styled from "styled-components";

function Style_comp() {
  const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Title = styled.h1`
    text-align: center;
  `;
  const Form = styled.form`
    width: 500px;
    box-shadow: 5px 5px 10px red;
  `;
  const Item = styled.div`
    display: flex;
    text-align:center;
    flex-direction: ${props => props.check ? "row" : "column"};
    justify-content: ${props => props.btn ? "center" : ""};
    justify-content: ${props => props.btnclose ? "space-between" : ""};
    flex-wrap: wrap;
    padding: 16px;
  `;
  const Label = styled.label`
    font-size:  ${props => props.checkbox ? "16px" : "18px"};
    font-weight: ${props => props.checkbox ? "" : "bold"};
    &:focus {
      font-sixe: 10px;
    }
  `;
  const Input = styled.input`
    background: white;
    outline: none;
    border-radius: 5px;
    padding:10px;
    font-size:16px;
    &:focus {
      border: none;
      outline: 2px solid blue;
    }
  `;
  const Button = styled.button`
    background-color: ${props => props.close ? "red" : ""};
    opacity: 0.8;
    padding: 5px 15px;
    border-radius: 3px;
    &:hover{
      opacity:1;
    }
  `;

  const Link = styled.a`
    margin-top: 10px;
    color:black;
    &:hover{
      color:red;
    }
  `;

  return (
    <Container>
      <Form>
        <Title>Login Page</Title>
        <Item>
          <Label>Email:</Label>
          <Input type="email" placeholder="Enter Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
        </Item>
        <Item>
          <Label>Password:</Label>
          <Input type="password" placeholder="Enter Password" required/>
        </Item>
        <Item check>
          <Input type="checkbox"/><Label checkbox>Remember me</Label>
        </Item>
        <Item btn>
          <Button type="submit">Login</Button>
        </Item>
        <hr />
        <Item btnclose>
        <Button close>Close</Button>
        <Link href="#">Forgot Password?</Link>
        </Item>
      </Form>
    </Container>
  );
}

export default Style_comp;
