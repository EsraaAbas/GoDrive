import React, { useState } from "react";
import styles from "./form.module.css";

const saudiCities = [
  "الرياض", "جدة", "مكة المكرمة", "المدينة المنورة", "الدمام",
  "الهفوف", "الخبر", "تبوك", "بريدة", "خميس مشيط",
  "الأحساء", "جازان", "نجران", "ينبع", "حائل",
  "عرعر", "القنفذة", "الطائف", "بيشة", "سكاكا"
];

export default function TransportForm() {
  const [formData, setFormData] = useState({
    senderCity: "",
    senderName: "",
    senderPhone: "",
    receiverCity: "",
    receiverName: "",
    receiverPhone: "",
    material: "",
    quantity: "",
    unit: "",
    weight: "",
    dimensions: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "هذا الحقل مطلوب";
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      return;
    }
    setErrors({});
    setSuccessMessage("✅ تم إرسال النموذج بنجاح!");
    setTimeout(() => setSuccessMessage(""), 5000);
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      {successMessage && <div className={styles.alert}>{successMessage}</div>}
      <h2 className={styles.title}>نموذج مستند نقل</h2>
      <form onSubmit={handleSubmit}>
        <h3 className={styles.sectionTitle}>بيانات المرسل</h3>
        <div className={styles.grid}>
          <div className={styles.inputGroup}>
            <label>عنوان المرسل (اختر المدينة)</label>
            <select name="senderCity" value={formData.senderCity} onChange={handleChange}>
              <option value="">اختر المدينة</option>
              {saudiCities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            {errors.senderCity && <span className={styles.error}>{errors.senderCity}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label>المرسل</label>
            <input name="senderName" value={formData.senderName} onChange={handleChange} />
            {errors.senderName && <span className={styles.error}>{errors.senderName}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label>رقم الهاتف</label>
            <input name="senderPhone" value={formData.senderPhone} onChange={handleChange} />
            {errors.senderPhone && <span className={styles.error}>{errors.senderPhone}</span>}
          </div>
        </div>

        <h3 className={styles.sectionTitle}>بيانات المستقبل</h3>
        <div className={styles.grid}>
          <div className={styles.inputGroup}>
            <label>عنوان المستقبل (اختر المدينة)</label>
            <select name="receiverCity" value={formData.receiverCity} onChange={handleChange}>
              <option value="">اختر المدينة</option>
              {saudiCities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            {errors.receiverCity && <span className={styles.error}>{errors.receiverCity}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label>المستقبل</label>
            <input name="receiverName" value={formData.receiverName} onChange={handleChange} />
            {errors.receiverName && <span className={styles.error}>{errors.receiverName}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label>رقم الهاتف</label>
            <input name="receiverPhone" value={formData.receiverPhone} onChange={handleChange} />
            {errors.receiverPhone && <span className={styles.error}>{errors.receiverPhone}</span>}
          </div>
        </div>

        <h3 className={styles.sectionTitle}>تفاصيل الشحنة</h3>
        <div className={styles.grid}>
          <div className={styles.inputGroup}>
            <label>اختر المادة</label>
            <input name="material" value={formData.material} onChange={handleChange} />
            {errors.material && <span className={styles.error}>{errors.material}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label>العدد</label>
            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
            {errors.quantity && <span className={styles.error}>{errors.quantity}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label>الوحدة</label>
            <select name="unit" value={formData.unit} onChange={handleChange}>
              <option value="">اختر</option>
              <option value="طن">طن</option>
              <option value="كجم">كجم</option>
            </select>
            {errors.unit && <span className={styles.error}>{errors.unit}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label>الوزن</label>
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
            {errors.weight && <span className={styles.error}>{errors.weight}</span>}
          </div>
          <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
            <label>الأبعاد</label>
            <input name="dimensions" value={formData.dimensions} onChange={handleChange} />
            {errors.dimensions && <span className={styles.error}>{errors.dimensions}</span>}
          </div>
        </div>

        <button type="submit" className={styles.button}>إرسال</button>
      </form>
    </div>
  );
}