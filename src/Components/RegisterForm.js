import { useState } from "react";
import styles from "./Styles/RegisterForm.module.css";
import { RiEyeCloseLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";

const Handler = () => {
  // error states
  const [errorArray, setErrorArray] = useState([]);

  // password states
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [inputPassword, setInputPassword] = useState("");
  console.log(inputPassword);

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
            {/* name field  */}
            <div className={styles.nameSection}>
              {/* first name  */}
              <div className={styles.firstName}>
                <label
                  htmlFor="firstName"
                  className={`${
                    errorArray.indexOf(1) !== -1 && styles.errorInput
                  }`}
                >
                  First Name
                </label>
                <input
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value !== "arafat") {
                      setErrorArray([...errorArray, 1]);
                    } else {
                      const newArr = errorArray.filter((el) => el !== 1);
                      setErrorArray(newArr);
                    }
                  }}
                  className={`${
                    errorArray.indexOf(1) !== -1 && styles.errorInput
                  }`}
                  type="text"
                />
                <span
                  className={`${
                    errorArray.indexOf(1) !== -1
                      ? styles.errorMessage
                      : styles.message
                  }`}
                >
                  Invalid Name
                </span>
              </div>

              {/* last name  */}
              <div className={styles.firstName}>
                <label
                  htmlFor="lastName"
                  className={`${
                    errorArray.indexOf(2) !== -1 && styles.errorInput
                  }`}
                >
                  Last Name
                </label>
                <input
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value !== "hossan") {
                      setErrorArray([...errorArray, 2]);
                    } else {
                      const newArr = errorArray.filter((el) => el !== 2);
                      setErrorArray(newArr);
                    }
                  }}
                  className={`${
                    errorArray.indexOf(2) !== -1 && styles.errorInput
                  }`}
                  type="text"
                />
                <span
                  className={`${
                    errorArray.indexOf(2) !== -1
                      ? styles.errorMessage
                      : styles.message
                  }`}
                >
                  Invalid Name
                </span>
              </div>
            </div>

            {/* email field  */}
            <div className={styles.emailField}>
              <label
                htmlFor="email"
                className={`${
                  errorArray.indexOf(3) !== -1 && styles.errorInput
                }`}
              >
                Email Address
              </label>
              <input
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
                className={`${
                  errorArray.indexOf(3) !== -1 && styles.errorInput
                }`}
                type="email"
              />
              <span
                className={`${
                  errorArray.indexOf(3) !== -1
                    ? styles.errorMessage
                    : styles.message
                }`}
              >
                Invalid Email
              </span>
            </div>

            {/* password field  */}
            <div className={styles.passwordSection}>
              {/* password  */}
              <div className={styles.password}>
                <label
                  htmlFor="firstName"
                  className={`${
                    errorArray.indexOf(4) !== -1 && styles.errorInput
                  }`}
                >
                  Password
                </label>
                <div className={styles.passwordExtraDiv}>
                  {/* eye icon  */}
                  {passwordType === "password" ? (
                    <span onClick={() => setPasswordType("text")}>
                      <RiEyeCloseLine />
                    </span>
                  ) : (
                    <span onClick={() => setPasswordType("password")}>
                      <BsEye />
                    </span>
                  )}
                  <input
                    onChange={(e) => {
                      const value = e.target.value;
                      // password validation function
                      const validatePassword = (email) => {
                        return String(email).match(
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
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
                    className={`${
                      errorArray.indexOf(4) !== -1 && styles.errorInput
                    }`}
                    type={passwordType}
                  />
                </div>
              </div>

              {/* confirm password  */}
              <div className={styles.confirmPassword}>
                <label
                  htmlFor="confirmPassword"
                  className={`${
                    errorArray.indexOf(5) !== -1 && styles.errorInput
                  }`}
                >
                  Confirm Password
                </label>
                <div className={styles.passwordExtraDiv}>
                  {/* eye icon  */}
                  {confirmPasswordType === "password" ? (
                    <span onClick={() => setConfirmPasswordType("text")}>
                      <RiEyeCloseLine />
                    </span>
                  ) : (
                    <span onClick={() => setConfirmPasswordType("password")}>
                      <BsEye />
                    </span>
                  )}
                  <input
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value !== inputPassword) {
                        setErrorArray([...errorArray, 5]);
                      } else {
                        const newArr = errorArray.filter((el) => el !== 5);
                        setErrorArray(newArr);
                      }
                    }}
                    className={`${
                      errorArray.indexOf(5) !== -1 && styles.errorInput
                    }`}
                    type={confirmPasswordType}
                  />
                </div>
              </div>
            </div>
            <span className={styles.passwordErrMssg}>
              The Password must contain <span>Special Character</span>,{" "}
              <span>Upper Case</span>, <span>Lower Case</span>, Numeric and{" "}
              <span>8 digits</span>
            </span>

            {/* select option field  */}
            {/* <div className={styles.selectField}>
            <select name="" id="">
                <option>select the option</option>
                <option value={"Option One"}>Option One</option>
            </select>
          </div> */}

            {/* checkbox field  */}
            {/* <label className={styles.formControl}>
              <input type="checkbox" name="checkbox-checked" />
            </label> */}

            {/* submit form  */}
            <div className={styles.submitSection}>
              <button>Sign Up</button>
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

export default Handler;
