import { useState } from "react";
import styles from "./Styles/VerifyForm.module.css";

const Handler = () => {
  const [verifyCode, setVerifyCode] = useState([]);

  // const all input code stats
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [thirdNumber, setThirdNumber] = useState("");
  const [fourthNumber, setFourthNumber] = useState("");
  const [fifthNumber, setFifthNumber] = useState("");
  const [sixthNumber, setSixthNumber] = useState("");

  console.log(verifyCode);

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
                  <input
                    type="number"
                    className={`${styles.inputCode}`}
                    value={firstNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      const lastChar = value[value.length - 1];
                      setFirstNumber(lastChar);
                    }}
                  />
                  <input
                    type="number"
                    className={styles.inputCode}
                    value={secondNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      const lastChar = value[value.length - 1];
                      setSecondNumber(lastChar);
                    }}
                  />
                  <input
                    type="number"
                    className={styles.inputCode}
                    value={thirdNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      const lastChar = value[value.length - 1];
                      setThirdNumber(lastChar);
                    }}
                  />
                  <input
                    type="number"
                    className={styles.inputCode}
                    value={fourthNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      const lastChar = value[value.length - 1];
                      setFourthNumber(lastChar);
                    }}
                  />
                  <input
                    type="number"
                    className={styles.inputCode}
                    value={fifthNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      const lastChar = value[value.length - 1];
                      setFifthNumber(lastChar);
                    }}
                  />
                  <input
                    type="number"
                    className={styles.inputCode}
                    value={sixthNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      const lastChar = value[value.length - 1];
                      setSixthNumber(lastChar);
                    }}
                  />
                </div>
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
