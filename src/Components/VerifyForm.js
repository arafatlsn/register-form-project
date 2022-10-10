import { useState } from "react";
import styles from "./Styles/VerifyForm.module.css";

const Handler = () => {
  const [verifyCode, setVerifyCode] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        {/* logo container  */}
        <div className={styles.logoContainer}>
          <h1>
            <span>Your</span> <span>Logo</span>
          </h1>
          <h3>Enter 6 digit PIN number</h3>
          <span>
            we have sent 6 digit PIN number to your email and mobile number
          </span>
        </div>

        {/* form section  */}
        <div className={styles.formSection}>
          <form>
            <div className={styles.verifyCodeContainer}>
              <label htmlFor="verifyCode">
                <div className={styles.inputFieldContainer}>
                  <p
                    className={`${
                      verifyCode.length - 1 >= 0
                        ? styles.active
                        : styles.inputFiled
                    }`}
                  >
                    {verifyCode[0]}
                  </p>
                  <p
                    className={`${
                      verifyCode.length - 1 >= 1
                        ? styles.active
                        : styles.inputFiled
                    }`}
                  >
                    {verifyCode[1]}
                  </p>
                  <p
                    className={`${
                      verifyCode.length - 1 >= 2
                        ? styles.active
                        : styles.inputFiled
                    }`}
                  >
                    {verifyCode[2]}
                  </p>
                  <p
                    className={`${
                      verifyCode.length - 1 >= 3
                        ? styles.active
                        : styles.inputFiled
                    }`}
                  >
                    {verifyCode[3]}
                  </p>
                  <p
                    className={`${
                      verifyCode.length - 1 >= 4
                        ? styles.active
                        : styles.inputFiled
                    }`}
                  >
                    {verifyCode[4]}
                  </p>
                  <p
                    className={`${
                      verifyCode.length - 1 >= 5
                        ? styles.active
                        : styles.inputFiled
                    }`}
                  >
                    {verifyCode[5]}
                  </p>
                </div>
                <input
                  onChange={(e) => {
                    const value = e.target.value;
                    const lastChar = value[value.length - 1];
                    if (value.length <= 6) {
                      setInputValue(value);
                      setVerifyCode([...verifyCode, lastChar]);
                    }

                    if (value.length !== verifyCode.length + 1) {
                      setVerifyCode([]);
                      setInputValue("");
                    }
                  }}
                  type="number"
                  name="verifyCode"
                  id="verifyCode"
                  value={inputValue}
                />
              </label>
            </div>

            <div className={styles.varifyButtonContainer}>
              <button>Verify my account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Handler;
