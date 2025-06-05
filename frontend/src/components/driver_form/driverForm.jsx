import React, { useState } from "react";
import styles from "../form/form.module.css";

const DrierForm = () => {
  const [formData, setFormData] = useState({
    driverName: "",
    driverID: "",
    driverLicense: "",
    driverPhone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = "هذا الحقل مطلوب";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>معلومات السائق</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.grid}>
          <div className={styles.inputGroup}>
            <label>اسم السائق</label>
            <input
              name="driverName"
              value={formData.driverName}
              onChange={handleChange}
            />
            {errors.driverName && <span className={styles.error}>{errors.driverName}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label>رقم البطاقة</label>
            <input
              name="driverID"
              value={formData.driverID}
              onChange={handleChange}
            />
            {errors.driverID && <span className={styles.error}>{errors.driverID}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label>رقم النسخة</label>
            <input
              name="driverLicense"
              value={formData.driverLicense}
              onChange={handleChange}
            />
            {errors.driverLicense && <span className={styles.error}>{errors.driverLicense}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label>رقم الهاتف</label>
            <input
              name="driverPhone"
              value={formData.driverPhone}
              onChange={handleChange}
            />
            {errors.driverPhone && <span className={styles.error}>{errors.driverPhone}</span>}
          </div>
        </div>

        <button type="submit" className={styles.button}>
         حفظ التعديلات 
        </button>

        {submitted && <p className={styles.success}>تم إرسال البيانات بنجاح</p>}
      </form>
    </div>
  );
};

export default  DrierForm;
