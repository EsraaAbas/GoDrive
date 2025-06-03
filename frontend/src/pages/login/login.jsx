
import React, { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  const [userType, setUserType] = useState("individual"); // 'individual' أو 'company' أو 'loginOnly'

  // بيانات مشتركة
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const [idNumber, setIdNumber] = useState("");
  const [issueNumber, setIssueNumber] = useState("");

 
  const [companyName, setCompanyName] = useState("");


  const [loginIdOrPhone, setLoginIdOrPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userType === "individual") {
      alert(`تسجيل فرد:
الاسم الكامل: ${fullName}
رقم الهاتف: +966 ${phone}
رقم الهوية: ${idNumber}
رقم الإصدار: ${issueNumber}`);
    } else if (userType === "company") {
      alert(`تسجيل شركة:
اسم الشركة: ${companyName}
رقم الهاتف: +966 ${phone}`);
    } else {
      alert(`دخول:
رقم الهوية / الهاتف: ${loginIdOrPhone}`);
    }
  };

  return (
     <div className={styles.pageWrapper}>
    <div className={styles.container}>
      <h1 className={styles.logo}>Godrivs</h1>

      <div className={styles.userTypeSelector}>
        <button
          className={userType === "individual" ? styles.activeBtn : styles.btn}
          onClick={() => setUserType("individual")}
        >
          أفراد
        </button>
        <button
          className={userType === "company" ? styles.activeBtn : styles.btn}
          onClick={() => setUserType("company")}
        >
          شركات
        </button>
        <button
          className={userType === "loginOnly" ? styles.activeBtn : styles.btn}
          onClick={() => setUserType("loginOnly")}
        >
          دخول
        </button>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {userType === "individual" && (
          <>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="الاسم الكامل"
            />

            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <span>+966</span>
              <input
                type="phone"
                pattern="[5][0-9]{8}"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="رقم الهاتف"
                maxLength={9}
                style={{ flex: 1 }}
              />
            </div>

            <input
              type="text"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              required
              placeholder="رقم الهوية"
            />

            <input
              type="text"
              value={issueNumber}
              onChange={(e) => setIssueNumber(e.target.value)}
              required
              placeholder="رقم الإصدار"
            />
          </>
        )}

        {userType === "company" && (
          <>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              placeholder="اسم الشركة"
            />

            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <span>+966</span>
              <input
                type="phone"
                pattern="[5][0-9]{8}"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="رقم الهاتف"
                maxLength={9}
                style={{ flex: 1 }}
              />
            </div>
          </>
        )}

        {userType === "loginOnly" && (
          <>
            <input
              type="text"
              value={loginIdOrPhone}
              onChange={(e) => setLoginIdOrPhone(e.target.value)}
              required
              placeholder="رقم الهوية أو الهاتف"
            />
          </>
        )}

        <button type="submit" className={styles.submitBtn}>
          دخول
        </button>
      </form>
    </div>
    </div>
  );
}
