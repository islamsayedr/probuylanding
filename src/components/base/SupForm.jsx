import { useState } from "react";
import { useForm } from "@formspree/react";
import styles from "./SupForm.module.css";

export default function SupForm({ lang }) {
  const [state, handleSubmit] = useForm("mdorqpne");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleSectorChange = (event) => {
    setSelectedSector(event.target.value);
  };
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <span></span>

      <input
        name="User Name"
        type="text"
        placeholder={lang === "AR" ? "اكتب اسمك..." : "Your name..."}
        required
      ></input>
      <input
        name="Company name"
        type="text"
        placeholder={lang === "AR" ? "اسم الشركة..." : "company name..."}
        required
      ></input>

      <select
        name="Company Location"
        value={selectedLocation}
        onChange={handleLocationChange}
        required
      >
        <option value="">
          {lang === "AR" ? "اختر موقع الشركة" : "Select Company Location"}
        </option>
        <option value="Inside Saudi Arabia">
          {lang === "AR"
            ? "داخل المملكه العربية السعودية"
            : "Inside Saudi Arabia"}
        </option>
        <option value="Outside Saudi Arabia">
          {lang === "AR"
            ? "خارج المملكه العربية السعودية"
            : "Outside Saudi Arabia"}
        </option>
      </select>
      {selectedLocation === "Inside Saudi Arabia" && (
        <input
          name="Area"
          type="text"
          placeholder={lang === "AR" ? "اسم المنطقة..." : "area name..."}
          required
        />
      )}

      <input
        name="CR Number"
        type="number"
        placeholder={lang === "AR" ? "رقم السجل التجارى..." : "CR Number..."}
        required
      ></input>
      <select name="Years of Operations" required>
        <option value="">
          {lang === "AR" ? "عدد سنوات العمل" : "Select Years of Operations"}
        </option>
        <option value="less than 6 months">
          {lang === "AR" ? "اقل من 6 شهور" : "less than 6 months"}
        </option>
        <option value="6 months - 1 year">
          {lang === "AR" ? "6 شهور - 1 سنه" : "6 months - 1 year"}
        </option>
        <option value="1 year - 3 years">
          {lang === "AR" ? "1 سنه - 3 سنين" : "1 year - 3 years"}
        </option>
        <option value="more than 3 years">
          {lang === "AR" ? "اكثر من 3 سنين" : "more than 3 years"}
        </option>
      </select>

      <select
        name="Sector"
        value={selectedSector}
        onChange={handleSectorChange}
        required
      >
        <option value="">
          {lang === "AR" ? "اختر المجال" : "Select Sector"}
        </option>
        <option value="Healthcare">
          {lang === "AR" ? "الصحة" : "Healthcare"}
        </option>
        <option value="F&B HORECA">
          {lang === "AR" ? "الطعام والشراب" : "F&B HORECA"}
        </option>
        <option value="Furniture">
          {lang === "AR" ? "الأثاث" : "Furniture"}
        </option>
        <option value="Cars spare-part">
          {lang === "AR" ? "قطع غيار السيارات" : "Cars spare-part"}
        </option>
        <option value="Various e-commerce commodities">
          {lang === "AR"
            ? "سلع تجارة إلكترونية متنوعة"
            : "Various e-commerce commodities"}
        </option>
        <option value="else">
          {lang === "AR" ? "مجال اخر" : "Other Sector"}
        </option>
      </select>
      {selectedSector === "else" && (
        <input
          name="sector"
          type="text"
          placeholder={lang === "AR" ? "ادخل المجال..." : "add sector..."}
          required
        />
      )}

      <input
        name="email"
        type="email"
        placeholder={
          lang === "AR" ? "البريد الإلكتروني..." : "example@mail.com..."
        }
        required
      />

      <input
        name="phone number"
        type="tel"
        placeholder={lang === "AR" ? "رقم الهاتف..." : "phone number..."}
        style={{ textAlign: lang === "AR" ? "right" : "left" }}
        required
      />

      <select name="Monthly Procurement Monetary Value" required>
        <option value="">
          {lang === "AR"
            ? "القيمة المالية لمشترياتك الشهرية"
            : "Monthly Procurement Monetary Value"}
        </option>
        <option value="less than 7,000 SAR">
          {lang === "AR" ? "أقل من 7,000 ريال سعودي" : "less than 7,000 SAR"}
        </option>
        <option value="7,000 - 13,000 SAR">
          {lang === "AR" ? "7,000 - 13,000 ريال سعودي" : "7,000 - 13,000 SAR"}
        </option>
        <option value="more than 13,000 SAR">
          {lang === "AR" ? "أكثر من 13,000 ريال سعودي" : "more than 13,000 SAR"}
        </option>
      </select>

      <select name="Number of invoices per month" required>
        <option value="">
          {lang === "AR"
            ? "عدد الفواتير شهريًا"
            : "Number of invoices per month"}
        </option>
        <option value="less than 1000 SAR">
          {lang === "AR" ? "أقل من 1000" : "less than 1000"}
        </option>
        <option value="1,000 - 7,000 SAR">
          {lang === "AR" ? "1000 - 7000" : "1,000 - 7,000"}
        </option>
        <option value="more than 7000 SAR">
          {lang === "AR" ? "أكثر من 7000" : "more than 7000"}
        </option>
      </select>

      <select name="Preferred method of payments" required>
        <option value="">
          {lang === "AR"
            ? "طريقة الدفع المفضلة"
            : "Preferred method of payments"}
        </option>
        <option value="yes">
          {lang === "AR" ? "تحويل بنكي" : "Bank transfer"}
        </option>
        <option value="no">{lang === "AR" ? "نقدًا" : "Cash"}</option>
        <option value="others">{lang === "AR" ? "أخرى" : "Others"}</option>
        <option value="no-problems">
          {lang === "AR"
            ? "لا مشكلة مع جميع الوسائل أعلاه"
            : "No problems with all the payments above"}
        </option>
      </select>

      <button className={styles.btn} type="submit" disabled={state.submitting}>
        {lang === "AR" ? "ارسال" : "Submit"}
      </button>
    </form>
  );
}
