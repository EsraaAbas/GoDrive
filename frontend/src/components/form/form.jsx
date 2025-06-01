import React, { useState } from "react";
import styles from "./form.module.css";

const saudiCities = [
    "الرياض",
    "جدة",
    "مكة المكرمة",
    "المدينة المنورة",
    "الدمام",
    "الهفوف",
    "الخبر",
    "تبوك",
    "بريدة",
    "خميس مشيط",
    "الأحساء",
    "جازان",
    "نجران",
    "ينبع",
    "حائل",
    "عرعر",
    "القنفذة",
    "الطائف",
    "بيشة",
    "سكاكا",
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("تم إرسال النموذج");
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>نموذج مستند نقل</h2>
            <form onSubmit={handleSubmit}>

                {/* بيانات المرسل */}
                <h3 className={styles.sectionTitle}>بيانات المرسل</h3>
                <div className={`${styles.grid} ${styles.section}`}>

                    <div className={`${styles.inputGroup} `}>
                        <label>المرسل</label>
                        <input
                            name="senderName"
                            value={formData.senderName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>عنوان المرسل (اختر المدينة)</label>
                        <select
                            name="senderCity"
                            value={formData.senderCity}
                            onChange={handleChange}
                        >
                            {saudiCities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>



                    <div className={styles.inputGroup}>
                        <label>رقم الهاتف</label>
                        <input
                            name="senderPhone"
                            value={formData.senderPhone}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* بيانات المستقبل */}
                <h3 className={styles.sectionTitle}>بيانات المستقبل</h3>
                <div className={`${styles.grid} ${styles.section}`}>

                  <div className={styles.inputGroup}>
                        <label>المستقبل</label>
                        <input
                            name="receiverName"
                            value={formData.receiverName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>عنوان المستقبل (اختر المدينة)</label>
                        <select
                            name="receiverCity"
                            value={formData.receiverCity}
                            onChange={handleChange}
                        >
                            {saudiCities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>

                    

                    <div className={styles.inputGroup}>
                        <label>رقم الهاتف</label>
                        <input
                            name="receiverPhone"
                            value={formData.receiverPhone}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* تفاصيل الشحنة */}
                <h3 className={styles.sectionTitle}>تفاصيل الشحنة</h3>
                <div className={`${styles.grid} ${styles.section}`}>
                    <div className={styles.inputGroup}>
                        <label>اختر المادة</label>
                        <input
                            name="material"
                            value={formData.material}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>العدد</label>
                        <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>الوحدة</label>
                        <select
                            name="unit"
                            value={formData.unit}
                            onChange={handleChange}
                        >
                            <option value="">اختر</option>
                            <option value="طن">طن</option>
                            <option value="كجم">كجم</option>
                        </select>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>الوزن</label>
                        <input
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                        <label>الأبعاد</label>
                        <input
                            name="dimensions"
                            value={formData.dimensions}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button type="submit" className={styles.button}>
                    إرسال
                </button>
            </form>
        </div>
    );
}
