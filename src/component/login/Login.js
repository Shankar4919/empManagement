import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import authImage from "../../images/auth-image.png";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    else{
        // Login logic
        if(email === "admin@admin" && password === "admin123"){
            navigate("/display");
        }else{
            setError(true);
            setErrorMessage("Invalid Credentials");
        }
    }
    setValidated(true);
  };

  return (
    <div className="login-container" style={{backgroundColor:"#808080", marginTop:'-13vh', paddingBottom:'0'}}>
    <Container>
        <Row>
        <Col>
            <div className="auth-image">
            <img
                className="left-logo"
                src={authImage}
                alt="left-logo"
            />
            </div>
        </Col>

        <Col>
            <div className="card-top">
              <h1 className="login-header" >Employee Management System</h1>
            </div>
            <Card className="login-card" style={{ width: "30rem", backgroundColor:"#212529" }}>
            <Card.Title>Admin Login</Card.Title>
            <Card.Body>
                <Form
                className="login-form"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                >

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="admin@admin"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <Form.Control.Feedback type="invalid">
                    Please enter valid email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    required
                    type="password"
                    placeholder="admin123"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                    Please enter Password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button className="submit-button" type="submit">
                    SIGN IN
                </Button>
                <div className="error-message">
                    {error ? errorMessage : ""}
                </div>
                </Form>
            </Card.Body>
            </Card>
        </Col>         
        </Row>
    </Container>
    </div>
  );
}
