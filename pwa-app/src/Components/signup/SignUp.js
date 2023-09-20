import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import signupman from "../../images/signup.png"
import styles from "./SignUp.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SignUp = () => {
  return (
   <Container>
    <Row className={` d-flex justify-content-evenly align-items-center`}>
    <Col><img src={signupman} alt="signup"/></Col>
    <Col className='d-flex flex-column align-items-center'>
    <h1 className={styles.heading}>Welcome to Learning Management System</h1>
    <p className={styles.paragraph}>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc<br></br>
     vulputate libero et velit interdum, ac aliquet odio mattis</p>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control className={styles.inputText} type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control className={styles.inputText} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className={styles.terms} type="checkbox" label="I agree to Terms and conditions" />
      </Form.Group>
      <div className='d-flex justify-content-center'>
      <Button className={styles.btn} variant="primary" type="submit">
      Create my free account
      </Button>
       </div>
       <div>
       <p className='d-flex align-items-center gap-1'><div className={styles.line}></div> OR <div className={styles.line}></div></p>
       </div>
       <div className='d-flex flex-column'>
       <div className={`${styles.box} d-flex gap-2 jusify-content-center`}>
       <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
       <path d="M31.6937 12.6654H30.425V12.6H16.25V18.9H25.1511C23.8525 22.5674 20.3631 25.2 16.25 25.2C11.0312 25.2 6.8 20.9688 6.8 15.75C6.8 10.5312 11.0312 6.3 16.25 6.3C18.659 6.3 20.8506 7.20877 22.5193 8.69321L26.9742 4.23832C24.1612 1.61674 20.3985 0 16.25 0C7.55206 0 0.5 7.05206 0.5 15.75C0.5 24.4479 7.55206 31.5 16.25 31.5C24.9479 31.5 32 24.4479 32 15.75C32 14.694 31.8913 13.6631 31.6937 12.6654Z" fill="#FFC107"/>
       <path d="M2.31598 8.41916L7.49064 12.2141C8.89082 8.74755 12.2818 6.3 16.25 6.3C18.659 6.3 20.8506 7.20877 22.5193 8.69321L26.9742 4.23832C24.1612 1.61674 20.3986 0 16.25 0C10.2004 0 4.9541 3.41539 2.31598 8.41916Z" fill="#FF3D00"/>
       <path d="M16.25 31.5C20.3182 31.5 24.0147 29.9431 26.8096 27.4113L21.935 23.2864C20.3537 24.4841 18.3881 25.2 16.25 25.2C12.1534 25.2 8.67504 22.5878 7.36464 18.9425L2.22856 22.8997C4.83519 28.0003 10.1288 31.5 16.25 31.5Z" fill="#4CAF50"/>
       <path d="M31.6937 12.6653H30.425V12.6H16.25V18.9H25.1511C24.5274 20.6616 23.3942 22.1807 21.9326 23.2871C21.9334 23.2863 21.9342 23.2864 21.935 23.2856L26.8096 27.4105C26.4647 27.7239 32 23.625 32 15.75C32 14.6939 31.8913 13.6631 31.6937 12.6653Z" fill="#1976D2"/>
     </svg>
     </div>
     <h3 className={styles.googlesignup}>Sign up with Google</h3>
       </div>
       <div className={styles.box}></div>
       </div>

       <div className='d-flex gap-2 align-items-end'>
       <p className='d-inline '>Already have an account?</p>
       <Button className={`${styles.btn}  `}>Login</Button>{' '}
       </div>
    </Form>
    
    </Col>
    </Row>
   </Container>
  )
}

export default SignUp