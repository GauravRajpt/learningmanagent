import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import forgotPassword from "../../images/rafiki.png"
import styles from "./SignUp.module.css"

const SignUp = () => {
  return (
    <Container className={ `${styles.container} d-flex justify-content-center align-items-center `}>
    <Row className={`${styles.row} py-4 px-2`}> 
    <Col className={styles.displaynone}>
    <div ><img className={styles.img} src={forgotPassword} alt='forgotpassword'/></div>
    </Col>
    <Col className={styles.full}>
    <div>
    <h1 className={`${styles.heading} my-3`}>Forgot Password?</h1>
    </div>
    <div>
    <p className={styles.paragraph}>Please enter your email for the verification process, we will send a password reset link on your registered email id, please check your email to continue resetting your password.</p>
    </div>
    <div>
    <input className={`${styles.email} my-3`} type='text' name="email" placeholder='Email'/>
    </div>
    <div className='d-flex flex-column align-items-center'>
    <button className={`${styles.btn} my-2`}>Send link</button>
    </div>
    <div className='d-flex flex-column align-items-center'>
    <button className={`${styles.btn} my-2`}>Cancle</button>
    </div>
    </Col>
    </Row>
    </Container>
  )
}

export default SignUp