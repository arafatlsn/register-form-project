import { useState } from "react";
import styles from "./Styles/RegisterForm.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import FloatingLabelInput from 'react-floating-label-input';
import { Col, Form, Row } from "react-bootstrap";

const RegisterForm = () => {
  // error states
  const [errorArray, setErrorArray] = useState([]);
  const [checkValue, setCheckValue] = useState(false);
  // password states
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [inputPassword, setInputPassword] = useState("");

  // dropdown selection state
  const [visibleDropdown, setVisibleDropdown] = useState(false)
  const [selectedOption, setSelectedOption] = useState("Option One Selected");

  // main container
  return (
    <div className={styles.mainContainer}>
      {/* form container */}
      <div className={styles.formContainer}>
        <form>
          {/* logo container  */}
          <div className={styles.logoContainer}>
            <h1>
              <span>Your</span> <span>Logo</span>
            </h1>
            <h3>Create an account to continue</h3>
          </div>


          {/* form container  */}
          <div className={styles.formSection}>
            <Row>
              <Col xs={12} md={12} lg={6}>
                <div className={`${styles.firstName} ${errorArray.indexOf(1) !== -1 && styles.errorInputBorder
                      }`}>

                  <FloatingLabelInput
                    // validation first name
                    id="firstName"
                    label="First Name"
                    className={`${errorArray.indexOf(1) !== -1 && styles.errorInput
                      }`}
                    onChange={(e) => {
                      const value = e.target.value;
                      const validateFirstName = (name) => {
                        return String(name).match(/^[a-z ,.'-]+$/);
                      };
                      const validFirstName = validateFirstName(value.toLowerCase());
                      if (!validFirstName) {
                        setErrorArray([...errorArray, 1]);
                      } else {
                        const newArr = errorArray.filter((el) => el !== 1);
                        setErrorArray(newArr);
                      }
                    }}

                    type="text"
                  />
                  <span
                    className={`${errorArray.indexOf(1) !== -1
                      ? styles.errorMessage
                      : styles.message
                      }`}
                  >
                    Invalid First Name
                  </span>
                </div>
              </Col>
              <Col xs={12} md={12} lg={6}>
                <div className={`mt-2 mt-lg-0 ${styles.firstName}  ${errorArray.indexOf(2) !== -1 && styles.errorInputBorder
                      }`}>

                  <FloatingLabelInput
                    // validation first name
                    id="lastName"
                    label="Last Name"
                    className={`${errorArray.indexOf(2) !== -1 && styles.errorInput
                      }`}
                    onChange={(e) => {
                      const value = e.target.value;
                      const validateLastName = (name) => {
                        return String(name).match(/^[a-z ,.'-]+$/);
                      };
                      const validLastName = validateLastName(value.toLowerCase());
                      if (!validLastName) {
                        setErrorArray([...errorArray, 2]);
                      } else {
                        const newArr = errorArray.filter((el) => el !== 2);
                        setErrorArray(newArr);
                      }
                    }}
                    type="text"
                  />
                  <span
                    className={`${errorArray.indexOf(2) !== -1
                      ? styles.errorMessage
                      : styles.message
                      }`}
                  >
                    Invalid Last Name
                  </span>
                </div>
              </Col>
            </Row>

            {/* email field  */}
            <div className={`lg-mt-4 mt-2 ${styles.emailField} ${ errorArray.indexOf(3) !== -1 && styles.emailFieldErrorBorder}`}>

              <FloatingLabelInput
                // validation first name
                id="email"
                label="Email"
                className={`${errorArray.indexOf(3) !== -1 && styles.errorInput
                  }`}
                onChange={(e) => {
                  const value = e.target.value;
                  // email validation function
                  const validateEmail = (email) => {
                    return String(email)
                      .toLowerCase()
                      .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      );
                  };

                  const validEmail = validateEmail(value);
                  if (!validEmail) {
                    setErrorArray([...errorArray, 3]);
                  } else {
                    const newArr = errorArray.filter((el) => el !== 3);
                    setErrorArray(newArr);
                  }
                }}

                type="email"
              />
              <span
                className={`${errorArray.indexOf(3) !== -1
                  ? styles.errorMessage
                  : styles.message
                  }`}
              >
                Invalid Email
              </span>
            </div>
            <Row className="lg-mt-4 mt-2">
              <Col xs={12} md={12} lg={6}>
                <div className={`${styles.password} ${errorArray.indexOf(4) !== -1 && styles.passwordErrorInput}`}>

                  <div className={styles.passwordExtraDiv}>
                    {/* eye icon  */}
                    {passwordType === "password" ? (
                      <span onClick={() => setPasswordType("text")}>
                        <FontAwesomeIcon className={styles.icon_color} icon={faEyeSlash} />
                      </span>
                    ) : (
                      <span onClick={() => setPasswordType("password")}>
                        <FontAwesomeIcon className={styles.icon_color} icon={faEye} />
                      </span>
                    )}
                    <FloatingLabelInput
                      // validation first name
                      id="password"
                      label="Password"

                      onChange={(e) => {
                        const value = e.target.value;
                        // password validation function
                        const validatePassword = (email) => {
                          return String(email).match(
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/
                          );
                        };

                        const validPassword = validatePassword(value);
                        if (!validPassword) {
                          setErrorArray([...errorArray, 4]);
                        } else {
                          const newArr = errorArray.filter((el) => el !== 4);
                          setErrorArray(newArr);
                          setInputPassword(value);
                        }
                      }}
                      className={`${errorArray.indexOf(4) !== -1 && styles.errorInput
                        }`}
                      type={passwordType}
                    />
                  </div>
                </div>
              </Col>
              <Col xs={12} md={12} lg={6}>
                <div className={`mt-3 mt-lg-0 ${styles.confirmPassword} ${errorArray.indexOf(5) !== -1 && styles.confirmPasswordErrorInput}`}>

                  <div className={styles.passwordExtraDiv}>
                    {/* eye icon  */}
                    {confirmPasswordType === "password" ? (
                      <span onClick={() => setConfirmPasswordType("text")}>
                        <FontAwesomeIcon className={styles.icon_color} icon={faEyeSlash} />
                      </span>
                    ) : (
                      <span onClick={() => setConfirmPasswordType("password")}>
                        <FontAwesomeIcon className={styles.icon_color} icon={faEye} />
                      </span>
                    )}
                    <FloatingLabelInput
                      // validation first name
                      id="confirmPassword"
                      label="Confirm Password"
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value !== inputPassword) {
                          setErrorArray([...errorArray, 5]);
                        } else {
                          const newArr = errorArray.filter((el) => el !== 5);
                          setErrorArray(newArr);
                        }
                      }}
                      className={`${errorArray.indexOf(5) !== -1 && styles.errorInput
                        }`}
                      type={confirmPasswordType}
                    />
                  </div>
                </div>
              </Col>

            </Row>
            <span className={styles.passwordErrMssg}>
              The Password must contain <span>Special Character</span>,{" "}
              <span>Upper Case</span>, <span>Lower Case</span>, Numeric and{" "}
              <span>8 digits</span>
            </span>

            {/* select option field  */}
             <div className={styles.dropdownContainer}>
              <span>Select the option.</span>
              <div onClick={() => setVisibleDropdown(true)} className={styles.selectedOption}>
                <span>{selectedOption}</span>{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowDown} />
                </span>
              </div>

              {/* dropsown hidden div  */}
            {
              visibleDropdown && <div className={styles.invisibleContainer}>
                <div onClick={() => {
                  setSelectedOption("Option One Selected")
                  setTimeout(() => setVisibleDropdown(false), 100)
                }}>
                  <span>Option One Selected</span>{" "}
                  <span>
                  </span>
                </div>
              </div>
            }
            </div> 

            {/* checkbox field  */}
            <Form.Group className="mt-4" id="formGridCheckbox">
              <Form.Check onClick={() => setCheckValue(!checkValue)} className='text-light text-start' type="checkbox" label="I accept Accept terms and conditions" />
            </Form.Group>

            {/* submit form  */}
            <div className={styles.submitSection}>
              <button className={!checkValue ? `w-100 mt-2 ${styles.register_disabled}` : `${styles.submit_btn} mt-2`} disabled={!checkValue}>Sign Up</button>
            </div>
          </div>
        </form>
        <span className={styles.loginNavigateTxt}>
          Already have an account? <span> Login Here</span>
        </span>

        {/* login button section  */}
        <div className={styles.loginSection}>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;